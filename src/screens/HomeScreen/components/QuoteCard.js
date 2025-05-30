import { Animated, StyleSheet, Text } from 'react-native'
import React, { memo, useEffect, useRef } from 'react'
import { ResponsiveSizeWp } from '../../../helpers/responsive'
import { COLOR } from '../../../helpers/colors'
import { elevation_2 } from '../../../helpers/styles'
import { FontFamily } from '../../../helpers/fonts'
import ProgressLine from './ProgressLine'

const QuoteCard = ({
    progress = 0,
}) => {

    const animation = useRef(new Animated.Value(0)).current;
    const quote = `"Do not pray for an easy life, pray for strength to endure a different one"`;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: true,
            duration: 500,
        }).start();
    }, [])

    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    })

    return (
        <Animated.View style={[styles.Container, elevation_2, { shadowColor: COLOR.BLACK }, { transform: [{ scale: scale }] }]}>
            <Text style={styles.TitleText} numberOfLines={1}>Today's Quote</Text>
            <Text style={styles.QuoteText}>{quote}</Text>
            <ProgressLine data={progress} />
        </Animated.View>
    )
}

export default memo(QuoteCard)

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        backgroundColor: COLOR.WHITE,
        borderRadius: ResponsiveSizeWp(9),
        paddingHorizontal: ResponsiveSizeWp(50),
        alignItems: 'center',
        gap: ResponsiveSizeWp(10),
        paddingTop: ResponsiveSizeWp(20),
        paddingBottom: ResponsiveSizeWp(30),
    },
    TitleText: {
        fontFamily: FontFamily.Bold,
        fontSize: ResponsiveSizeWp(16),
        color: COLOR.BLACK,
        textAlign: 'center',
    },
    QuoteText: {
        fontFamily: FontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.DARKGREY,
        textAlign: 'center',
    },
})