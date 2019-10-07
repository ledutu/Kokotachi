import { Linking } from 'react-native';

export default function OpenLinking(url) {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            return Linking.openURL(url);
        }
        else {
            return console.log("Error " + url)
        }
    })
}
