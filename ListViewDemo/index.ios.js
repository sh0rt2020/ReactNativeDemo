/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView
} from 'react-native';

export default class ListViewDemo extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['john', 'wayne', 'jack', 'julie', 'david', 'me'])
    };
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop:64}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{backgroundColor:'skyblue'}}>{rowData}</Text>}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
