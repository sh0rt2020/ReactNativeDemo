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
			// isSelect: this
		};
	}


	render() {
		let item = this.props.rowData;
		return (
			<TouchableHighlight
				onPress = {this.props.onSelect}
				key = {item}
				// highlightRow = {}
			>
				<View style = {styles.cellcontainer}>
					<Text style = {styles.title}>{item}</Text>
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
	},

	title: {
		marginTop: 8,
		fontSize: 18,
		color: '#333333',
		backgroundColor: 'red',
	},

	description: {
		marginBottom: 2,
		fontSize: 12,
		color: '#666666',
	},

	cellcontainer: {
		marginLeft: 8,
		marginRight: 8,
		height: 44,
		backgroundColor: '#ffffff',
	},
});
