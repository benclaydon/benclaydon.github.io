import { useState, useEffect } from 'react';
import { View } from "react-native-web";
import { Text } from "react-native-paper";
import { Image, Dimensions  } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { styles } from "./Style";

export default function Landing({ navigation }) {
    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

    useEffect(() => {
        const updateDimensions = () => {
            setWindowDimensions(Dimensions.get('window'));
        };

        // Add event listener for dimension changes
        Dimensions.addEventListener('change', updateDimensions);

        // Cleanup the event listener on unmount
        return () => {
            Dimensions.removeEventListener('change', updateDimensions);
        };
    }, []);

    const imageHeight = windowDimensions.height / 2;
    const imageWidth = (1536 / 2048) * imageHeight;


    return (
        <SafeAreaProvider>
            <View style={styles.view}>

                <TopNavigator navigation={navigation}/>
                <Text style={styles.title}>Hi, I'm Ben.</Text>

                <div style={ styles.selfImgDiv }>
                    <Image source={require("../assets/me.jpg")} style={{ width: imageWidth, height: imageHeight, alignSelf: 'center' }} />
                </div>
                <Text style={styles.bodyText}>I'm a second year PhD candidate at the School of Computer Science, University of St Andrews under the supervision of <a href="https://www.st-andrews.ac.uk/computer-science/people/rchc/">Prof Richard Connor</a> and <a href="https://www.st-andrews.ac.uk/computer-science/people/al/">Prof Al Dearle</a>. </Text>
                <Text style={styles.bodyText}>My research area is similarity search. Broadly defined, this is the task of finding similar items from a large collection, given another presented as a query. </Text>
                <Text style={styles.bodyText}>This becomes challenging once we index lots (billions) of objects, and require high-accuracy answers in fractions of a second.</Text>
                <Text style={styles.bodyText}>You can find examples of my work or contact me here!</Text>
            </View>
        </SafeAreaProvider>
    );
}