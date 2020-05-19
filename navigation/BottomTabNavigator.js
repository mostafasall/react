import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Register from '../screens/RegisterScreen';
import Onboarding from '../screens/onboardingscreen';
import Profile from '../screens/profile';
import SimpleQuestion from '../screens/myquestions';
import filters from '../screens/filters';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
       <BottomTab.Screen
        name="Question"
        component={SimpleQuestion}
        options={{
          title: 'Question',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-dolar" />,
        }}
      />
       <BottomTab.Screen
        name="filters"
        component={filters}
        options={{
          title: 'filters',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-dolar" />,
        }}
      />
      <BottomTab.Screen
      
      name="Profiles"
      component={Onboarding}
      options={{
        title: 'onboardscreen',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="logo-yen" />,
      }}
    />
    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Profile':
      return 'Mostafa salloum';
      case 'Login':
      return 'Login';
  }
}
