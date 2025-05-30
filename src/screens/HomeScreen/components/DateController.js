import { FlatList, StyleSheet, } from 'react-native'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { addDays, eachDayOfInterval, format, } from 'date-fns'
import { ResponsiveSizeWp } from '../../../helpers/responsive'
import { FontFamily } from '../../../helpers/fonts'
import { COLOR } from '../../../helpers/colors'
import DateButton from './DateButton'

const DateController = ({
    onDateChange = () => { },
}) => {

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const dates = useMemo(() => eachDayOfInterval(
        {
            start: new Date(),
            end: addDays(new Date(), 10)
        },
        {
            weekStartsOn: 1,
        }
    ), []);

    const data = useMemo(() => dates.map((date) => ({ date, day: days[date.getDay()].toUpperCase() })), [dates])

    const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))

    useEffect(() => { onDateChange(selectedDate) }, [selectedDate])

    const handleDateSelection = useCallback((date) => {
        setSelectedDate(format(new Date(date), 'yyyy-MM-dd'));
    }, [])

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
                <DateButton
                    data={item}
                    selected={new Date(selectedDate).getDate() === item.date.getDate()}
                    onSelect={handleDateSelection}
                />
            }
            horizontal
            style={styles.Container}
            contentContainerStyle={styles.ContentContainer}
            showsHorizontalScrollIndicator={false}
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
        paddingHorizontal: ResponsiveSizeWp(12),
        gap: ResponsiveSizeWp(12),
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