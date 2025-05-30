import { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboardStatus = () => {

    const [keyboardVisible, setKeyboardVisibility] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener(Platform.OS == 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', () => {
            setKeyboardVisibility(true);
        });

        const hideSubscription = Keyboard.addListener(Platform.OS == 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', () => {
            setKeyboardVisibility(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return {
        keyboardVisible,
    }
};

export default useKeyboardStatus;
