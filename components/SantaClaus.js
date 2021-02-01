import React from 'react';
import LottieView from 'lottie-react-native';
import { Image } from 'react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <Image
      source={{uri: 'https://i.pinimg.com/originals/95/4d/49/954d49b305b9344d69f0bcb341f0e698.png'}}
      style={{width:"60%"}} />
    )
  }
}