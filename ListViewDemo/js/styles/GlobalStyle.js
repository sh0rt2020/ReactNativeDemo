/*
全局样式
*/
import {
  Dimensions,
} from 'react-native'

const {height, width} = Dimensions.get('window');

module.exports = {
  line: {
    flex: 1,
    height: 0.5,
    opacity: 0.5,
    backgroundColor: 'darkgray',
  },

  cell_container: {
    flex: 1,
    marginLeft: 8,
		marginRight: 8,
		height: 44,
		backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 0.5,
    borderRadius: 2,
    borderStyle: null,
    shadowColor: 'gray',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },

  listView_container: {
    flex: 1,
    backgroundColor: 'white',
  },

  listView_height: (height-(44+20)),
  window_height: height,
  window_width: width,

  nav_bar_height_ios: 44,
  nav_bar_height_android: 50,
};
