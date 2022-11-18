import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import SetTimer from './src/Screens/SetTimer';
import Quiz from './src/Screens/Quiz';
import TimeUp from './src/Screens/TimeUp';
import {Provider} from 'react-redux';
import Store from './src/Store/Store';
import SignIn from './src/Screens/SignIn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="SignIn">
           <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SetTimer" component={SetTimer} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="TimeUp" component={TimeUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
