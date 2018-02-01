import React,{ Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TableUpdate from './TableUpdate';
import HomeScreen from './HomeScreen';

const App = StackNavigator(
  {
    Home: { screen: HomeScreen,title: 'Home' },
    TableView: { screen: TableUpdate,title: 'TableEntry' },
  }/*,
  {
     headerMode: 'none',
     mode: 'modal',
     navigationOptions: {
       gesturesEnabled: false,
     },
     transitionConfig: () => ({
       transitionSpec: {
         duration: 300,
         easing: Easing.out(Easing.poly(4)),
         timing: Animated.timing,
       },
       screenInterpolator: sceneProps => {
         const { layout, position, scene } = sceneProps;
         const { index } = scene;

         const height = layout.initHeight;
         const translateY = position.interpolate({
           inputRange: [index - 1, index, index + 1],
           outputRange: [height, 0, 0],
         });

         const opacity = position.interpolate({
           inputRange: [index - 1, index - 0.99, index],
           outputRange: [0, 1, 1],
         });

         return { opacity, transform: [{ translateY }] };
       },
     }),
   }*/
);

export default App;
