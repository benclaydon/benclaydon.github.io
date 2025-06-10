import { Button, View } from "react-native-web";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { styles } from "./Style";
import React, { useState } from 'react';
import { Display } from "custom-7-segment";


// Some RNG stuff
function splitmix32(a) {
      let t = a ^ a >>> 16;
      t = Math.imul(t, 0x21f0aaad);
      t = t ^ t >>> 15;
      t = Math.imul(t, 0x735a2d97);
      return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
   }


/*
The idea:

We have a 7 segment display displaying a random 3 digit number
7 of the segments display the wrong thing. If a segment is broken on one display, it is guaranteed not to be broken on others (currently I think inverting the true state)
((( I might have it such that one segment is broken one two displays! )))
You can change any of the three displays up or down 1 number
Each change counts as a move
Can you guess the ORIGINAL number displayed on screen in the minimal number of moves?
*/

export default function BrokenDial({ navigation }) {
    const [num, setNum] = useState(142);
    const [seed, setSeed] = useState(getSeed())
    const NUM_DIALS = 3;

    /// Functions

    // Gets the number of days since epoch. This is the random seed of today's puzzle
    function getSeed() {
        var now = new Date();
        var fullDaysSinceEpoch = Math.floor(now/8.64e7);
        return fullDaysSinceEpoch;
    }

    function rng(seed, setSeed) {
        var x = splitmix32(seed);
        setSeed( seed + 0x9e3779b9 | 0);
        return x;
    }

    // Gets the segments which are broken
    function getBrokenSegments(rng) {
        // Initialize a list with 7 zeros
        const brokenSegments = Array(7).fill(rng());
        return brokenSegments;
    }



    /// End functions

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

    // Set the random seed to today's seed

    return (
        <SafeAreaProvider>
            <View style={styles.view}>
                <TopNavigator navigation={navigation} />

                <Text style={styles.title}>Here be a number</Text>

                <Display value={ num.toString() } count="3" skew="true" charMap={
                    defaultMap
                }/>

                <Button
                    title="Press me"
                    onPress={() => {
                        setNum(num + 1);
                        console.log(rng(seed, setSeed));
                        
                    }}
                />

            </View>
        </SafeAreaProvider>
    );
}

