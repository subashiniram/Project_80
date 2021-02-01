import React, { Component} from 'react';
import { View, Text, StyeSheet ,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {firebase} from 'firebase';

export default class CustomSideBarMenu extends Component{
  render(){
    return (
        <View style = {{flex:1}}>
            <View style = {styles.DrawerItemsContainer}>
                <DrawerItems{...this.props}/>
                <Text>Menu</Text>
            </View>    
        </View>



    );
   } 
};


const styles = StyleSheet.create({
    DrawerItemsContainer : {
      flex:0.8,
     
    },
})
