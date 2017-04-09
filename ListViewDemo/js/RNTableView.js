import React, {Component} from 'React';
import {
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native';
import RNDetail from './RNDetail'
import RNTableViewCell from './cell/RNTableViewCell'


export default class RNTableView extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['john', 'wayne', 'jack', 'julie', 'david', 'me'])
    };
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key = {'${sectionID}-${rowID}'}
        style = {{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3b5998' : '#cccccc',
        }}
      />
    );
  }

  _pressRow(rowID) {
    this.props.navigator.push({
      component: RNDetail,
      params: {
        theme: this.state.theme,
        ...this.props,
      },
    });
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableHighlight onPress = {() => {
          this._pressRow(rowID);
          highlightRow(sectionID, rowID);
        }}>
        <Text style = {{backgroundColor: 'skyblue'}}>{rowData}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style = {{flex: 1, paddingTop:64}}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this._renderRow.bind(this)}
          renderSeparator = {this._renderSeparator}
          />
      </View>
    );
  }
}