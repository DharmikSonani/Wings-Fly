import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { FontFamily } from '../../../helpers/fonts'
import { COLOR } from '../../../helpers/colors'
import { ResponsiveSizeWp } from '../../../helpers/responsive'

const ProgressLine = ({
    data,
}) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.TextStyle}>{`Progress ${data}%`}</Text>
            <View style={[styles.Line]}>
                <View style={[styles.ProgressLine, { width: `${data}%` }]} />
                <View style={styles.Circle} />
            </View>
        </View>
    )
}

export default memo(ProgressLine)

const styles = StyleSheet.create({
    Container: {
        gap: ResponsiveSizeWp(2),
        position: 'absolute',
        bottom: ResponsiveSizeWp(0),
        left: ResponsiveSizeWp(9),
        right: ResponsiveSizeWp(9),
    },
    TextStyle: {
        fontFamily: FontFamily.SemiBold,
        color: COLOR.PRIMARY,
        fontSize: ResponsiveSizeWp(11),
        marginBottom: ResponsiveSizeWp(2),
    },
    Line: {
        backgroundColor: COLOR.GREY,
        width: '100%',
        height: ResponsiveSizeWp(3),
        borderRadius: ResponsiveSizeWp(4),
        flexDirection: 'row',
        alignItems: 'center',
    },
    ProgressLine: {
        backgroundColor: COLOR.PRIMARYLIGHT,
        height: '100%',
        borderRadius: ResponsiveSizeWp(4),
    },
    Circle: {
        height: ResponsiveSizeWp(10),
        aspectRatio: 1 / 1,
        backgroundColor: COLOR.PRIMARY,
        borderRadius: ResponsiveSizeWp(5),
        marginLeft: -ResponsiveSizeWp(10)
    }
})