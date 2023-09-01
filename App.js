import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Projects from './screens/Projects';
import Contact from './screens/Contact';
import CV from './screens/CV';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Landing} />
          <Stack.Screen name="Projects" component={Projects} />
          <Stack.Screen name="CV" component={CV} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}