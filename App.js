import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CourseScreen from './src/screens/CourseScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: null,
          headerStyle: {elevation: 0},
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => <Ionicons name="menu" size={25} />,
            headerRight: () => (
              <Image
                source={{
                  uri: 'https://www.nickiswift.com/img/gallery/zendaya-had-the-best-response-to-her-embarrassing-moment-caught-on-video/zendaya-laughs-off-her-stumble-1645650968.jpg',
                }}
                style={{width: 35, height: 35, borderRadius: 500}}
              />
            ),
          }}
        />
        <Stack.Screen
          options={{headerTransparent: true}}
          name="CourseScreen"
          component={CourseScreen}
        />
        {/* <Stack.Screen name="details" component={Details} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
