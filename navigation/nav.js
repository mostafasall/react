
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import onboardingscreen from '../screens/onboardingscreen';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import SimpleQuestion from '../screens/myquestions';
import Profile from '../screens/profile';
import verified from '../screens/verified';

//import Quiz from "./screens/Quiz";
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
const Stack = createStackNavigator();


export default ()=>{
    //const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState] = React.useState();
    const containerRef = React.useRef();
    //const { getInitialState } = useLinking(containerRef); 
    
    
      return (
        
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <Stack.Navigator>
             <Stack.Screen name="Root" component={BottomTabNavigator} /> 
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="myquestions" component={SimpleQuestion} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="verified" component={verified} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      );
         }
         const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',
            },
        });
  