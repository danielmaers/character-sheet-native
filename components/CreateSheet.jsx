import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function CreateSheet({navigation}){
    return(
        <View>            
            <Button
                title="Create"
                onPress={() =>
                    navigation.navigate('Create')
                }
            >
                Create Your Character
            </Button>
            
        </View>
    )
}

const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <Button
          title="Black Panther"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Black Panther' })
          }
        />
      </View>
    );
  };