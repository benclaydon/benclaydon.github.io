import { View } from "react-native-web";
import { Text } from "react-native-paper";
import { Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { styles } from "./Style";

export default function Landing({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={styles.view}>
                <TopNavigator navigation={navigation}/>


                <div style={{ width: "25%" }}>
                    <Image source={require("../assets/me.jpg")} style={styles.selfImg} />
                </div>
                <Text>I'm a developer with experience in both industrial and research settings.</Text>
                <Text>I'm particularly proficient with Python, but have experience in C. </Text>
            </View>
        </SafeAreaProvider>
    );
}