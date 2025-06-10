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
You can change any of the three displays up or down 1 number
Each change counts as a move
Can you guess the ORIGINAL number displayed on screen in the minimal number of moves?
*/

function getBrokenSegments() {

}

export default function BrokenDial({ navigation }) {
    const [num, setNum] = useState(142);

    const defaultMap = {
        "0": [1, 1, 1, 1, 1, 1, 1],
        "1": [0, 1, 1, 0, 0, 0, 0],
        "2": [1, 1, 0, 1, 1, 0, 1],
        "3": [1, 1, 1, 1, 0, 0, 1],
        "4": [0, 1, 1, 0, 0, 1, 1],
        "5": [1, 0, 1, 1, 0, 1, 1],
        "6": [1, 0, 1, 1, 1, 1, 1],
        "7": [1, 1, 1, 0, 0, 0, 0],
        "8": [1, 1, 1, 1, 1, 1, 1],
        "9": [1, 1, 1, 1, 0, 1, 1],
    }


    return (
        <SafeAreaProvider>
            <View style={styles.view}>
                <TopNavigator navigation={navigation} />

                <Text style={styles.title}>Here be a number</Text>

                <Display value={ num.toString() } count="3" skew="true" charMap={
                    defaultMap
                }/>;

                <Button
                    title="Press me"
                    onPress={() => setNum(num + 1)}
                />

            </View>
        </SafeAreaProvider>
    );
}

