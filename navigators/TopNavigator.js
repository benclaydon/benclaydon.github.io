import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../screens/Style'

const TopNavigator = ({ navigation }) => {
    const [blink, setBlink] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setBlink(!blink);
        }, 500);
    }, [blink])

    const text = "Ben Claydon_";
    const charIndexToHighlight = 11; // Index of the character to highlight
    const highlightedColor = "black"; // Color for the highlighted character


    return (
        <View style={styles.container}>
            <Text>
                {text.split('').map((char, index) => (
                    <Text
                        key={index}
                        style={[styles.title, {
                            color: index === charIndexToHighlight && blink ? highlightedColor : "#fff",
                        }]}
                    >
                    {char}
                    </Text>
                ))}
            </Text>

            <View style={styles.menu}>
                <Text style={styles.menuItem} onPress={() => navigation.navigate('Home')}>Home</Text>
                {/* <Text style={styles.menuItem} onPress={() => navigation.navigate('Projects')}>Projects</Text> */}
                <Text style={styles.menuItem} onPress={() => navigation.navigate('CV')}>Education & Employment</Text>
                <Text style={styles.menuItem} onPress={() => navigation.navigate('Contact')}>Contact</Text>
                <Text style={styles.menuItem} onPress={() => navigation.navigate('BrokenDial')}>Broken Dial</Text>

            </View>
        </View>
    );
};

export default TopNavigator;
