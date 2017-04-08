import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  Text,
  View,
  ListView
} from 'react-native';

export default class ListViewDemo extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired;
    navigator: PropTypes.object.isRequired;
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['john', 'wayne', 'jack', 'julie', 'david', 'me'])
    };

    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
         title: 'ListViewDemo'
      })
    }
  }

  render() {
    return (
      // <NavigatorIOS 
      //   initialRoute = {{
      //     component: RNTableView,
      //     title: 'ListViewDemo'
      //   }}
      //   style = {{flex: 1}}
      //   />
        
      <View style={{flex: 1, paddingTop:64}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{backgroundColor:'skyblue'}}>{rowData}</Text>}
          />
      </View>
    );
  }
}