import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { ResponsiveSizeWp } from '../../helpers/responsive'

const IconButton = ({
    icon,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.Container}
        >
            {icon}
        </TouchableOpacity>
    )
}

export default memo(IconButton)

const styles = StyleSheet.create({
    Container: {
        width: ResponsiveSizeWp(30),
        aspectRatio: 1 / 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})