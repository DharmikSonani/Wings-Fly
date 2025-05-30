import React from 'react'
import useScreenHooks from './HomeScreen.Hooks';
import ScreenHeader from '../../components/ScreenHeader';
import FloatingButton from '../../components/button/FloatingButton';
import Feather from 'react-native-vector-icons/Feather'
import { COLOR } from '../../helpers/colors';
import { ResponsiveSizeWp } from '../../helpers/responsive';
import OptionDrawer from '../../components/option-drawer/OptionDrawer';
import DateController from './components/DateController';

const HomeScreen = () => {

    const {

        drawerVisible,
        options,

        handleAddButtonPress,
        handleDrawerClose,
        handleOptionSelect,
        handleDateChange,
    } = useScreenHooks();

    return (
        <>
            <ScreenHeader>
                <DateController onDateChange={handleDateChange} />

                <FloatingButton onPress={handleAddButtonPress}>
                    <Feather
                        name='plus'
                        color={COLOR.WHITE}
                        size={ResponsiveSizeWp(35)}
                    />
                </FloatingButton>
            </ScreenHeader>

            <OptionDrawer
                data={options}
                visible={drawerVisible}
                onDismiss={handleDrawerClose}
                onOptionSelect={handleOptionSelect}
            />
        </>
    )
}

export default HomeScreen