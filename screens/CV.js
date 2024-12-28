import { View } from "react-native-web";
import { Text } from "react-native-paper";
import { Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopNavigator from '../navigators/TopNavigator';
import { styles } from "./Style";

export default function CV({ navigation }) {
    return (
        <SafeAreaProvider>
            <View style={styles.view}>
                <TopNavigator navigation={navigation} />

                <Text style={styles.title}>Education</Text>
                <ul style={styles.ul}>
                    <li><Text style={styles.bodyText}>First Class MSci Computer Science, University of St Andrews. (2018 - 2023)</Text></li>
                    <li><Text style={styles.bodyText}>PhD Computer Science, University of St Andrews. Fully funded by Adobe Systems. (2023-)</Text></li>
                </ul>
                
                <Text style={styles.title}>Employment</Text>
                <Text style={styles.bodyText}>In the summer of 2022, I completed a 3 month software development internship at BT.</Text>
                <Text style={styles.bodyText}>There, I developed software testing network equipment. I used Python to automate a previously lengthly manual testing process into a program which ran in seconds.</Text>


                <Text style={styles.title}>Publications</Text>
                <Text style={styles.bodyText}>I have published and given talks in international conferences and journals on the topic of similarity search. This includes:</Text>
                <ul style={styles.ul}>
                    <li><Text style={styles.bodyText}>Delivered a talk at <a href="https://www.sisap.org/2024/">SISAP 2024</a> on the engineering of a scalable, metric-indexing based similarity engine able to handle multiple-object queries.</Text></li>
                    <li><Text style={styles.bodyText}>Co-authored a journal paper in <a href="https://www.mdpi.com/journal/entropy">Entropy</a> detailing correlations and transformations between Euclidean spaces and Information spaces.</Text></li>
                </ul>


                <Text style={styles.title}>Links</Text>
                <ul style={styles.ul}>
                    <li><Text style={styles.bodyText}>My <a href="https://scholar.google.com/citations?user=VvUPad0AAAAJ&hl=en">Google Scholar</a></Text></li>
                    <li><Text style={styles.bodyText}>My <a href="https://uk.linkedin.com/in/ben--claydon?trk=people-guest_people_search-card">LinkedIn</a></Text></li>
                </ul>
            </View>
        </SafeAreaProvider>
    );
}

