import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Songs from './Songs';

class App extends Component {
  render () {
    return (
      <View>
        <ScrollView>
          <Songs />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 60
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  }
});

export default App;
