
import {  Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import {createNativeStackNavigator} from './node_modules/@react-navigation/native-stack';

import {Form,Profil} from "./src/index"

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

    <Stack.Screen 
    name="Home"
    component={Form}
    options={{title: "Welcome"}}
    />

 <Stack.Screen 
    name="Profile"
    component={Profil}
    options={{title: "Your Profile"}}
    />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

