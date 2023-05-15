import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../screens/Style'

const TopNavigator = ({ navigation }) => {
    const [blink, setBlink] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setBlink(!blink);
        }, 500);
        console.log("Update");
    }, [blink])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`> Ben Claydon` +  (blink % 2 == 0 ? `_` : ` `)}</Text>
            <View style={styles.menu}>
                <Text style={styles.menuItem} onPress={() => navigation.navigate('Home')}>Home</Text>
                <Text style={styles.menuItem} onPress={() => navigation.navigate('Projects')}>Projects</Text>
                <Text style={styles.menuItem}>Education & Employment</Text>
                <Text style={styles.menuItem}>Contact</Text>
            </View>
        </View>
    );
};

export default TopNavigator;
