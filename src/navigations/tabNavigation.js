import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Mypage from '../screens/Mypage';
import Schedule from '../screens/Schedule';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
      tabBarOptions={{
        activeTintColor: 'green', // 선택된 탭의 색상
        inactiveTintColor: 'gray', // 선택되지 않은 탭의 색상
      }}
    >
      <Tab.Screen
        name='Mypage'
        component={Mypage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/person.png')} // 이미지 경로 설정
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      {/* 나머지 탭들도 동일한 방식으로 설정 */}
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/home.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Schedule'
        component={Schedule}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/calender.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
