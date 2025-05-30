import { Animated, StyleSheet, } from 'react-native'
import React, { memo, useCallback, useEffect, useMemo, useState, useRef } from 'react'
import { addDays, eachDayOfInterval, format, } from 'date-fns'
import { ResponsiveSizeWp, screenWidth } from '../../../helpers/responsive'
import { FontFamily } from '../../../helpers/fonts'
import { COLOR } from '../../../helpers/colors'
import DateButton from './DateButton'

const DateController = ({
    onDateChange = () => { },
}) => {

    const ref = useRef();
    const dateAnimation = useRef(new Animated.Value(0)).current;
    const scrollX = useRef(new Animated.Value(0)).current;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const dates = useMemo(() => eachDayOfInterval(
        {
            start: new Date(),
            end: addDays(new Date(), 15)
        },
        {
            weekStartsOn: 1,
        }
    ), []);

    const data = useMemo(() => dates.map((date) => ({ date, day: days[date.getDay()] })), [dates])

    const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))

    useEffect(() => {
        Animated.timing(dateAnimation, {
            useNativeDriver: true,
            toValue: 1,
            duration: 1000,
        }).start();

    }, [])

    useEffect(() => { onDateChange(selectedDate) }, [selectedDate])

    const handleDateSelection = useCallback((date, index) => {
        setSelectedDate(format(new Date(date), 'yyyy-MM-dd'));
        handleScroll(index);
    }, [])

    const handleScroll = useCallback((index) => {
        const offset = ResponsiveSizeWp(57) * index;
        ref.current?.scrollToOffset({ offset, animated: true });
    }, [ref, screenWidth])

    const animatedTranslateX = dateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [screenWidth / 2, 0],
    })

    return (
        <Animated.FlatList
            ref={ref}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) =>
                <DateButton
                    index={index}
                    data={item}
                    selected={new Date(selectedDate).getDate() === item.date.getDate()}
                    onSelect={handleDateSelection}
                    scrollX={scrollX}
                />
            }
            horizontal
            style={[styles.Container, { transform: [{ translateX: animatedTranslateX }] }]}
            contentContainerStyle={styles.ContentContainer}
            showsHorizontalScrollIndicator={false}
            getItemLayout={(data, index) => ({
                length: ResponsiveSizeWp(57), // Adjust this value based on your DateButton width
                offset: ResponsiveSizeWp(57) * index,
                index
            })}
            pagingEnabled
            snapToInterval={ResponsiveSizeWp(57)}
            onScroll={
                Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX,
                                }
                            },
                        },
                    ],
                    { useNativeDriver: true }
                )
            }
        />
    )
}

export default memo(DateController)

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        flexGrow: 0,
    },
    ContentContainer: {
        paddingHorizontal: (screenWidth / 2) - (ResponsiveSizeWp(45) / 2),
        gap: ResponsiveSizeWp(12),
        paddingVertical: ResponsiveSizeWp(10),
    },
    TitleText: {
        fontSize: ResponsiveSizeWp(20),
        color: COLOR.BLACK,
        fontFamily: FontFamily.Medium
    },
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: ResponsiveSizeWp(15),
        marginBottom: ResponsiveSizeWp(20),
    },
})