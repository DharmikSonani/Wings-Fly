import { StyleSheet, TouchableOpacity, } from 'react-native'
import React, { memo } from 'react'
import { COLOR } from '../../helpers/colors'
import { ResponsiveSizeWp } from '../../helpers/responsive'
import { elevation_5 } from '../../helpers/styles'

const FloatingButton = ({
    onPress = () => { },
    children,
}) => {
    return (
        <TouchableOpacity
            style={[styles.Container, elevation_5]}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

export default memo(FloatingButton)

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: COLOR.PRIMARY,
        width: ResponsiveSizeWp(50),
        aspectRatio: 1 / 1,
        bottom: ResponsiveSizeWp(30),
        right: ResponsiveSizeWp(30),
        borderRadius: ResponsiveSizeWp(10),
        justifyContent: 'center',
        alignItems: 'center',
    }
})