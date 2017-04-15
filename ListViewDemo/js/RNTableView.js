
'use strict'
import React, {Component} from 'React';
import {
  Text,
  View,
  TouchableHighlight,
  ListView,
  StyleSheet,
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
        // key = {'${sectionID}-${rowID}'}
        key = {rowID}
        style = {{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3b5998' : '#cccccc',
        }}
      />
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    let {navigator} = this.props;
    return (
      <RNTableViewCell
        onSelect = {() => this._onSelectRow(rowID, rowData)}
        rowData = {rowData}
        theme = {this.state.theme}
        {...{navigator}}
      />
    );
  }

  _onSelectRow(rowID, rowData) {
    this.props.navigator.push({
      component: RNDetail,
      params: {
        rowID: {rowID},
        rowData: {rowData},
        parentComponent: this,
        ...this.props,
      },
    });
  }

  render() {
    return (
      <View style = {styles.list}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this._renderRow.bind(this)}
          renderSeparator = {this._renderSeparator}
          />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 64,
  },
});
