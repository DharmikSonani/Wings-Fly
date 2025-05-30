import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './helper';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export const NavigationHandler = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                autoHideHomeIndicator: true,
            }}
            initialRouteName={Screens.HomeScreen}
        >
            <Stack.Screen name={Screens.HomeScreen} component={HomeScreen} />
        </Stack.Navigator>
    );
}