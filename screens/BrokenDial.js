import { Button, View } from "react-native-web";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { styles } from "./Style";
import React, { useState } from 'react';
import { Display } from "custom-7-segment";



/*
The idea:

We have a 7 segment display displaying a random 3 digit number
7 of the segments display the wrong thing (currently I think inverting the true state)

*/

export default function BrokenDial({ navigation }) {
    const [num, setNum] = useState(142);

    return (
        <SafeAreaProvider>
            <View style={styles.view}>
                <TopNavigator navigation={navigation} />

                <Text style={styles.title}>Here be a number</Text>

                <Display value={ num.toString() } count="3" skew="true"/>;

                <Button
                    title="Press me"
                    onPress={() => setNum(num + 1)}
                />

            </View>
        </SafeAreaProvider>
    );
}

