import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import Button from 'react-native-button';
import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from 'react-native-card-view';


export default class SongCard extends Component {
  render () {
    return (
          <Card>
            <CardTitle>
              <Text style={styles.title}>{this.props.title}</Text>
            </CardTitle>
            <CardImage>
              <Image
                style={{width: 400, height: 200}}
                source={{uri: "https://getmdl.io/assets/demos/image_card.jpg"}}
              />
            </CardImage>
            <CardContent>
              <Text>{this.props.artist}</Text>
            </CardContent>
            <CardAction >
              <Button
                style={styles.button}
                onPress={() => {}}>
                Button 1
              </Button>
              <Button
                style={styles.button}
                onPress={() => {}}>
                Button 2
              </Button>
            </CardAction>
          </Card>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
});
