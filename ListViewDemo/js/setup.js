/*
初始化并安装页面
*/

import React, {Component, PropTypes} from 'react'
import {
	Navigator,
	Text
} from 'react-native'

import ListViewDemo from './ListViewDemo'
import ListDetail from './ListDetail'


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
                <Component {...route.params} navigator={navigator}/>
            );
        }

		render() {
			const routes = [
				{title: 'ListViewDemo', index: 0, component: ListViewDemo, params: {theme: this.theme}},
				{title: 'ListDetail', index: 1, component: ListDetail, params: {theme: this.theme}},
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
                    			//LeftButton\RightButton\Title是routeMapper的三个参数，缺一不可
                    			LeftButton: (route, navigator, index, navState) => {
                    				return (<Text>back</Text>);
                    			},
                    			RightButton: (route, navigator, index, navState) => {
                    				return (<Text>ListDetail</Text>);
                    			},
                    			Title: (route, navigator, index, navState) => {
                    				return (<Text>ListViewDemo</Text>);
                    			}
                    		}}

                    		style = {{backgroundColor: 'green'}}
                    	/>
                    }
                />
			);
		}
	}

	return <Root/>;
}

module.exports = setup;