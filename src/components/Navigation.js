import React, { Component } from 'react';
import {
  ToolBar
} from 'react-native-material-ui';


export default class Navigation extends Component {
  render() {
    <ToolBar
      leftElement="menu"
      centerElement="Searchable"
      searchable={{
        autoFocus: true,
        placeholder: 'Search',
      }}
    />
    return (
      <ToolBar />

    );
  }
}
