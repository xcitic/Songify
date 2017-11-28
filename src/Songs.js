import React, { Component } from 'react';
import { View } from 'react-native';
import data from './data/data.json';
import SongCard from './components/SongCard';


const songs = data.map((song) =>
  <SongCard title={song.title} artist={song.artist} image={song.image}/>
);

export default class Songs extends Component {
  render() {
    return (
      <View>{songs}</View>
    )
  }
}
