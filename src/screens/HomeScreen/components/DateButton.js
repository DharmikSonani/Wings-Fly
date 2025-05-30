import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { memo, useCallback } from 'react'
import { COLOR } from '../../../helpers/colors'
import { ResponsiveSizeWp } from '../../../helpers/responsive'
import { FontFamily } from '../../../helpers/fonts'

const DateButton = ({
    index,
    selected,
    data,
    onSelect = () => { },
}) => {
    return (
        <TouchableOpacity
            style={[styles.Container, selected && styles.SelectedContainer]}
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