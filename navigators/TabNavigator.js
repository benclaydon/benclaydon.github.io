import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Landing from '../screens/Landing';
import Portfolio from '../screens/Portfolio';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Landing} />
            <Tab.Screen name="Settings" component={Portfolio} />
        </Tab.Navigator>
    );
}