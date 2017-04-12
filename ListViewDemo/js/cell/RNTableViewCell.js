import React, {Component} from 'react'
import {
	Image,
	Text,
	View,
	StyleSheet,
	TouchableHighlight
} from 'react-native'

export default class RNTableViewCell extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		return (
			<TouchableHighlight onPress = {() => {
				
			}}
				<View style = {styles.cellcontainer}>

				</View>
			</TouchableHighlight>
		);
	}
}


var styles = StyleSheet.create({
	image: {
		marginLeft: 8,
		height: 26,
		width:26,
		flex: 1,
	}

	title: {
		marginTop: 8,
		fontSize: 18,
		color: '#333333',
	}

	description: {
		marginBottom: 2,
		fontSize: 12,
		color: '#666666',
	}

	cellcontainer: {
		
	}
});