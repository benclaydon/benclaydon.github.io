import { Button, View } from "react-native-web";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { styles } from "./Style";
import React, { useEffect, useState } from 'react';
import { Display } from "custom-7-segment";


// Some RNG stuff
function splitmix32(a) {
    let t = a ^ a >>> 16;
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ t >>> 15;
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
}

// Gets the number of days since epoch. This is the random seed of today's puzzle
function getSeed() {
    var now = new Date();
    var fullDaysSinceEpoch = Math.floor(now/8.64e7);
    return fullDaysSinceEpoch;
}

function rng(seed, setSeed) {
    const x = splitmix32(seed);
    const nextSeed = seed + 0x9e3779b9 | 0;
    setSeed(nextSeed);

    return { value: x, nextSeed: nextSeed};
}


// Gets the segments which are broken
function getBrokenSegments(seed, setSeed) {
    // Initialize a list with 7 zeros
    const brokenSegments = Array(7).fill(0);

    for (let i = 0; i < 7; i++) {
        const result = rng(seed, setSeed);
        brokenSegments[i] = parseInt(result.value * NUM_DIALS); // Use the random value
        seed = result.nextSeed; // Update the seed locally
    }

    return {segments: brokenSegments, nextSeed: seed};
}

function getNewMap(dialNumber, randomState) {
    var newMap = structuredClone(defaultMap);

    for (i = 0; i < randomState.length; i++) {
        var num = randomState[i];

        // If this is the dial we are modifying then flip
        if (num == dialNumber) {
            for (j = 0; j < 10; j++) {
                newMap[parseInt(j)][i] = newMap[parseInt(j)][i] === 1 ? 0 : 1;
            }
        }
    }

    return newMap;
}

const NUM_DIALS = 3;

const defaultMap = {
    "0": [1, 1, 1, 1, 1, 1, 0],
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


/*
The idea:

We have a 7 segment display displaying a random 3 digit number
7 of the segments display the wrong thing. If a segment is broken on one display, it is guaranteed not to be broken on others (currently I think inverting the true state)
((( I might have it such that one segment is broken one two displays! )))
You can change any of the three displays up or down 1 number
Each change counts as a move
Can you guess the ORIGINAL number displayed on screen in the minimal number of moves?
*/

function DialGroup({ num, map, onIncrement, onDecrement, setFn }) {
    return (
        <View style={styles.dialGroup}>
            {num.map((value, index) => (
                <View key={index} style={styles.dialContainer}>
                    <Button title="+" onPress={() => onIncrement(index, setFn)} />
                    <Display
                        value={value.toString()}
                        count="1"
                        skew="true"
                        charMap={map[index]}
                    />
                    <Button title="-" onPress={() => onDecrement(index, setFn)} />
                </View>
            ))}
        </View>
    );
}   

export default function BrokenDial({ navigation }) {
    const [broken, setBroken] = useState([0, 0, 0]);
    const [unbroken, setUnbroken] = useState([0, 0, 0]);
    const [seed, setSeed] = useState(getSeed());
    const [map, setMap] = useState(null);
    const [solutionNum, setSolutionNum] = useState(null);
    const [actions, setActions] = useState(0);

    const incrementDial = (index, setFn) => {
        setFn((prevNum) => {
            const newNum = [...prevNum];
            newNum[index] = newNum[index] + 1;
            newNum[index] = Math.abs(newNum[index]) % 10;
            console.log(newNum);
            return newNum;
        });
    };

    const decrementDial = (index, setFn) => {
        setFn((prevNum) => {
            const newNum = [...prevNum];
            newNum[index] = newNum[index] - 1;

            if (newNum[index] === -1) {
                newNum[index] = 9;
            } else {
                newNum[index] = Math.abs(newNum[index]) % 10;
            }

            console.log(newNum);
            return newNum;
        });
    };

    // Set the random seed to today's seed
    useEffect(() => {
        let randomState = getBrokenSegments(seed, setSeed)
        setMap([getNewMap(0, randomState.segments), getNewMap(1, randomState.segments), getNewMap(2, randomState.segments)]);

        var random_num = rng(randomState.nextSeed, setSeed);
        let secret_solution = Math.floor(random_num.value * 1000);
        setSolutionNum(secret_solution);

        var start_broken = rng(random_num.nextSeed, setSeed);
        start_broken_num = Math.floor(1000 * start_broken.value);
        var start_broken_arr = [Math.floor(start_broken_num / 100), Math.floor(start_broken_num / 10) % 10, start_broken_num % 10]
        setBroken(start_broken_arr)

        var start_unbroken = rng(start_broken.nextSeed, setSeed);
        start_unbroken_num = Math.floor(1000 * start_unbroken.value);
        var start_unbroken_arr = [Math.floor(start_unbroken_num / 100), Math.floor(start_unbroken_num / 10) % 10, start_unbroken_num % 10]
        setUnbroken(start_unbroken_arr)

        console.log("Broken start number: " + start_broken_num);
        console.log("Unbroken start number: " + start_unbroken_num);
        console.log("Secret solution: " + secret_solution);
    }, []);


    return (
        <SafeAreaProvider>
            <View style={styles.view}>
                <TopNavigator navigation={navigation} />

                {map && <DialGroup 
                        num={broken} 
                        map={map}                         
                        onIncrement={incrementDial}
                        onDecrement={decrementDial}
                        setFn={setBroken} />
                }

                {<DialGroup 
                        num={unbroken} 
                        map={[defaultMap, defaultMap, defaultMap]}  // Each dial is default                     
                        onIncrement={incrementDial}
                        onDecrement={decrementDial}
                        setFn={setUnbroken} />
                }


                <Button
                    title="Submit"
                    onPress={() => {
                        
                    }}
                />

            </View>
        </SafeAreaProvider>
    );
}

