import { List } from 'react-native-paper';
import { styles } from "../screens/Style";

export default function Project(props) {
    var title = props["title"];
    return (
        <div style={styles.container}>
            <List.Accordion title={title} style={styles.container}>
                {title}
                This is a test!
            </List.Accordion>
        </div>
    )
}