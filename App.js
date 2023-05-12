import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/Landing';
import Portfolio from './screens/Portfolio';
import TabNavigator from './navigators/TabNavigator';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <TabNavigator>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={Landing} options={{title:'Home'}} />
          <Stack.Screen name="Portfolio" component={Portfolio} options={{title:'Projects'}} />
        </Stack.Navigator> */}
      </TabNavigator>
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
