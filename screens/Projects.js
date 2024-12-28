import { View } from "react-native-web";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { styles } from "./Style";
import { useState } from "react";
import Project from "../components/Project";


export default function Landing({ navigation }) {
    const [expanded, setExpanded] = useState(true);


    return (
        <SafeAreaProvider>
            <View style={styles.view}>
                <TopNavigator navigation={navigation} />

                <Text style={styles.bodyText}>Here are some selected projects.</Text>

            </View>
        </SafeAreaProvider>
    );
}