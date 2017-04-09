/*
初始化并安装页面
*/

import React, {Component, PropTypes} from 'react'
import {
	Navigator,
	Text,
	TouchableHighlight
} from 'react-native'

import RNTableView from './RNTableView'
import RNDetail from './RNDetail'


function setup() {
	class Root extends Component {
		//构造函数
		constructor(props) {
			super(props);
			this.state = {};
		}

		//用户自定义函数
		_renderScene(route, navigator) {
            let Component = route.component;
            let index = route.index;
            return (
                <Component {...route.params} navigator = {navigator}/>
            );
        }

		render() {
			const routes = [
				{title: 'ListViewDemo', index: 0, component: RNTableView, params: {theme: this.theme}},
				{title: 'ItemDetail', index: 1, component: RNDetail, params: {theme: this.theme}},
			];

			return (
				<Navigator
					initialRoute = {routes[0]}
					initialRouteStack = {routes}
                    
                    renderScene = {
                    	(route, navigator) => this._renderScene(route, navigator)
                    }

                    navigationBar = {
                    	<Navigator.NavigationBar 
                    		routeMapper = {{
                    			//LeftButton、RightButton、Title是routeMapper的三个参数，缺一不可
                    			LeftButton: (route, navigator, index, navState) => {

                    				if (route.index === 0) {
            							return null;
            						} else {
            							return (
            								<TouchableHighlight onPress = {() => navigator.pop()}>
                								<Text>back</Text>
                							</TouchableHighlight>);
            						}
                    			},
                    			RightButton: (route, navigator, index, navState) => {
                    				return null;
                    			},
                    			Title: (route, navigator, index, navState) => {
                    				return (<Text style = {{height: 64}}>{route.title}</Text>);
                    			}
                    		}}

                    		style = {{backgroundColor: 'green', height: 64}}
                    	/>
                    }
                />
			);
		}
	}

	return <Root/>;
}

module.exports = setup;