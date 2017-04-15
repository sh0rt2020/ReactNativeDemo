import React, {Component} from 'react'
import {
	Image,
	Text,
	View,
	StyleSheet,
} from 'react-native'


export default class RNDetail extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			title: 'RNDetailPage',
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	render() {
		let title = this.props.rowData;
		return (
			<Text style = {styles.header}>
				the detail page of {JSON.stringify(title)}
				</Text>
		);
	}
}

var styles = StyleSheet.create({
	header: {
		paddingTop: 64,
	},
});
