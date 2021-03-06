import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateSheet from './components/CreateSheet';
import Characters from './components/Characters';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator>     
      <Stack.Screen	
      name="CreateSheet"
      component={CreateSheet}
      />

      <Stack.Screen	
      name="Characters"
      component={Characters}
      />

    
   </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
