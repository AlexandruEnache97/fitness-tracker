import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import colors from '../../constants/colors';
import UserPage from '../../screens/UserPage/UserPage';

interface Props {
}

const NavigationBottom: React.FC<Props> = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={() => ({
      tabBarActiveBackgroundColor: colors.backgroundColor,
      tabBarInactiveBackgroundColor: colors.backgroundColor,
      tabBarActiveTintColor: colors.textSecondary,
      tabBarInactiveTintColor: colors.textPrimary,
      tabBarLabelStyle: {
        fontSize: 12,
      },
    })}>
      <Tab.Screen
        name="HOME"
        component={UserPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TRAINING"
        component={UserPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-chart" size={22} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="STATISTICS"
        component={UserPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="COMMUNITY"
        component={UserPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="clipboard" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer >
);

export default NavigationBottom;
