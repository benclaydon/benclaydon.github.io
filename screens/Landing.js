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
                <div style={ styles.selfImgDiv }>
                    <Image source={require("../assets/me.jpg")} style={styles.selfImg} />
                </div>
                <Text style={styles.bodyText}>Hi, I'm Ben.</Text>
                <Text style={styles.bodyText}>I'm a current Computer Science PhD student at the University of St Andrews.</Text>
                <Text style={styles.bodyText}>I primarily use Python, but am also highly proficient with Java.</Text>
                <Text style={styles.bodyText}>You can check out examples of my work or contact me here!</Text>
            </View>
        </SafeAreaProvider>
    );
}