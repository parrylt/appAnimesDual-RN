import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Hxh from '../pages/hxh';
import Home from '../pages/home';
import Yuyu from '../pages/yuyu';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      initialRouteName= "Homepage"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Hunter x Hunter"
        component={Hxh}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="yoga" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Homepage" component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Yu Yu Hakusho" component={Yuyu}
              options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ghost" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
