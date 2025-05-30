import { Animated, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import { COLOR } from '../../../helpers/colors'
import { ResponsiveSizeWp } from '../../../helpers/responsive'
import { FontFamily } from '../../../helpers/fonts'

const offset = (index) => ResponsiveSizeWp(57) * index;

const DateButton = ({
    index,
    selected,
    data,
    onSelect = () => { },
    scrollX,
}) => {

    const inputRange = [
        offset(index - 4),
        offset(index - 3),
        offset(index - 2),
        offset(index - 1),
        offset(index),
        offset(index + 1),
        offset(index + 2),
        offset(index + 3),
        offset(index + 4)
    ]

    const scale = scrollX && scrollX?.interpolate({
        inputRange,
        outputRange: [0, 1, 1, 1, 1, 1, 1, 1, 0],
    })

    return (
        <TouchableOpacity
            style={[styles.Container, selected && styles.SelectedContainer, scale && { transform: [{ scale: scale }] }]}
            onPress={useCallback(() => { onSelect(data.date, index) }, [])}
        >
            <View style={[styles.DayContainer]}>
                <Text style={[styles.DayStyle, styles.TextStyle, selected && styles.SelectedTextStyle]} numberOfLines={1}>
                    {data?.day}
                </Text>
            </View>
            <View style={[styles.DateContainer, selected && styles.SelectedDateContainer]}>
                <Text style={[styles.DateText, styles.TextStyle, selected && styles.SelectedTextStyle]} numberOfLines={1}>{data?.date?.getDate()}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default memo(DateButton)

const styles = StyleSheet.create({
    Container: {
        backgroundColor: COLOR.LIGHTGREY,
        width: ResponsiveSizeWp(45),
        height: ResponsiveSizeWp(55),
        borderRadius: ResponsiveSizeWp(16),
    },
    TextStyle: {
        color: COLOR.DARKGREY,
    },
    DayContainer: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    DayStyle: {
        fontFamily: FontFamily.Regular,
        fontSize: ResponsiveSizeWp(11),
        textTransform: 'capitalize',
        marginTop: ResponsiveSizeWp(3),
    },
    DateContainer: {
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.GREY,
        width: '100%',
        borderBottomStartRadius: ResponsiveSizeWp(16),
        borderBottomEndRadius: ResponsiveSizeWp(16),
        borderTopStartRadius: ResponsiveSizeWp(12),
        borderTopEndRadius: ResponsiveSizeWp(12),
    },

    DateText: {
        fontFamily: FontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(14),
    },
    SelectedContainer: {
        backgroundColor: COLOR.PRIMARYLIGHT,
    },
    SelectedTextStyle: {
        color: COLOR.WHITE,
    },
    SelectedDateContainer: {
        backgroundColor: COLOR.PRIMARY,
    },
})