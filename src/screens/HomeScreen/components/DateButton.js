import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { memo, useCallback } from 'react'
import { COLOR } from '../../../helpers/colors'
import { ResponsiveSizeWp } from '../../../helpers/responsive'
import { FontFamily } from '../../../helpers/fonts'

const DateButton = ({
    selected,
    data,
    onSelect = () => { },
}) => {
    return (
        <TouchableOpacity
            style={[styles.Container, selected && styles.SelectedContainer]}
            onPress={useCallback(() => { onSelect(data.date) }, [])}
        >
            <View style={[styles.DayContainer]}>
                <Text style={[styles.DayStyle, styles.TextStyle, selected && styles.SelectedTextStyle]} numberOfLines={1}>{data?.day}</Text>
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
        width: ResponsiveSizeWp(56),
        aspectRatio: 1 / 1.22,
        borderRadius: ResponsiveSizeWp(22),
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
        fontSize: ResponsiveSizeWp(12),
        marginTop: ResponsiveSizeWp(5),
    },
    DateContainer: {
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.GREY,
        width: '100%',
        borderBottomStartRadius: ResponsiveSizeWp(22),
        borderBottomEndRadius: ResponsiveSizeWp(22),
        borderTopStartRadius: ResponsiveSizeWp(15),
        borderTopEndRadius: ResponsiveSizeWp(15),
    },

    DateText: {
        fontFamily: FontFamily.Medium,
        fontSize: ResponsiveSizeWp(15),
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