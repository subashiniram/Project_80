import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: BookDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={{uri: "https://i.pinimg.com/originals/95/4d/49/954d49b305b9344d69f0bcb341f0e698.png"}} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={{uri: "https://i.pinimg.com/originals/95/4d/49/954d49b305b9344d69f0bcb341f0e698.png"}} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});
