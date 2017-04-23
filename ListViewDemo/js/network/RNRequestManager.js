/*
请求管理
*/
'use strict';

import {
  AsyncStorage,
} from 'react-native';
import RNApiManager from './api/RNApiManager';

const API_SERVER = 'http://m.spider.com.cn';

export default class RNRequestManager {
  constructor(props) {
    super(props);
  }

  //get table list data from remote server.
  fetchList(param) {
    fetch(API_SERVER, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })
    .then(function(response) {
      return (response.stringify(response););
    })
    .catch((error) => {
      console.error(error);
    });
  }

  //get detail data from remote server.
  fetchDetail(param) {
    fetch(API_SERVER, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    })
    .then(function(response) {
      return (JSON.stringify(response));
    })
    .catch(error) {
      console.error(error);
    }
  }
}
