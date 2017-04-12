import React, {Component} from 'react'
import {
	Image,
	Text,
	View
} from 'react-native'


export default class RNDetail extends Component {
	constructor(props) {
		super(props);
		// {navigator} = this.props.navigator;
	}

	render() {
		const {navigator} = this.props
		return (
			<View style = {{paddingTop: 64}}>
				<Text style = {{height: 44}}>this is a detail page</Text>
			</View>
		);
	}
}