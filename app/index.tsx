import {Button, Keyboard, View} from "react-native";
import WebView from "react-native-webview";
import {useEffect, useState} from "react";

export default function RootLayout() {
    const [keyboardOffset, setKeyboardOffset] = useState(0);

    useEffect(() => {
        const keyboardShowEvent = Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboardOffset(e.endCoordinates.height);
        });

        const keyboardHideEvent = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOffset(0);
        });

        return () => {
            keyboardShowEvent.remove();
            keyboardHideEvent.remove();
        };
    }, []);

    return (
        <View style={{backgroundColor: 'red', flex: 1}}>
            <View style={{flex: 1, paddingBottom: keyboardOffset}}>
                <WebView source={require('../assets/index.html')} scrollEnabled={true}/>
            </View>
            <Button title="Toggle" onPress={() => {
                setKeyboardOffset((x) => x ? 0 : 350);
            }}/>
        </View>
    );
}
