import React from 'react'
import useScreenHooks from './HomeScreen.Hooks';
import ScreenHeader from '../../components/ScreenHeader';
import FloatingButton from '../../components/button/FloatingButton';
import Feather from 'react-native-vector-icons/Feather'
import { CARD_COLORS, COLOR } from '../../helpers/colors';
import { ResponsiveSizeWp } from '../../helpers/responsive';
import OptionDrawer from '../../components/option-drawer/OptionDrawer';
import DateController from './components/DateController';
import QuoteCard from './components/QuoteCard';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import TaskCard from './components/TaskCard';

const HomeScreen = () => {

    const {

        drawerVisible,
        options,
        progress,
        tasks,

        handleAddButtonPress,
        handleDrawerClose,
        handleOptionSelect,
        handleDateChange,
        handleTaskPress,
    } = useScreenHooks();

    return (
        <>
            <ScreenHeader>
                <DateController onDateChange={handleDateChange} />

                <View style={styles.QuoteCardContainer}>
                    <QuoteCard progress={progress} />
                </View>

                <FlatList
                    data={tasks}
                    style={styles.Container}
                    contentContainerStyle={styles.ContentContainer}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <TaskCard
                            index={index}
                            data={item}
                            onPress={handleTaskPress}
                            color={CARD_COLORS[index]}
                        />
                    }
                />

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