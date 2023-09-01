import { View } from "react-native-web";
import { Button, Text, TextInput } from "react-native-paper";
import { Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { styles } from "./Style";
import { useState } from "react";
import { useForm    , ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xknlogqv");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={styles.bodyText}>
                <Text style={styles.bodyTextNoIndent}>Your Email Address</Text>
            </label>
            <br />
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <br />
            <Text style={styles.bodyTextNoIndent}>Message</Text>
            <br />
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <br />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default function Contact({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={styles.view}>
                <TopNavigator navigation={navigation} />

                <Text style={styles.bodyText}>Have any questions? Contact me here.</Text>

                <ContactForm />
            </View>
        </SafeAreaProvider>
    );
}