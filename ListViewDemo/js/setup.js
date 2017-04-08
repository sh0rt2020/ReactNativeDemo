/*
初始化并安装页面
*/

import React, {Component, PropTypes} from 'react'
import {
	NavigatorIOS,
	Navigator,
} from 'react-native'

import ListViewDemo from './ListViewDemo'


function setup() {
	class Root extends Component {
		//构造函数
		constructor(props) {
			super(props);
			this.state = {};
		}

		_renderScene(route, navigator) {
            let Component = route.component;
            return (
                <Component {...route.params} navigator={navigator}/>
            );
        }

		render() {
			return (
				<Navigator
                    initialRoute={{
                        name: 'ListViewDemo',
                        component: ListViewDemo
                    }}
                    renderScene={(e, i)=>this._renderScene(e, i)}
                />
			)
		}
	}

	return <Root/>;
}

module.exports = setup;