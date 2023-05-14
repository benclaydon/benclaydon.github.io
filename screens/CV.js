import { View } from "react-native-web";
import { Text } from "react-native-paper";
import { Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { viewStyle } from "./screenStyle";

export default function CV({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={viewStyle}>
                <TopNavigator navigation={navigation} />

                <Text>This is the CV page</Text>
            </View>
        </SafeAreaProvider>
    );
}