import { StyleSheet, View } from 'react-native'
import React, { memo, useMemo } from 'react'
import { COLOR } from '../helpers/colors'
import { ResponsiveSizeWp, useTopPadding } from '../helpers/responsive'
import IconButton from './button/IconButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FastImage from 'react-native-fast-image'
import { AppIcon, WingsFlyLogo } from '../helpers/assets'

const ScreenHeader = ({
    children
}) => {

    const topSpace = useTopPadding();
    const iconColor = COLOR.DARKGREY;

    return (
        <View style={[styles.Wrapper, { paddingTop: topSpace }]}>
            <View style={styles.HeaderContainer}>
                <FastImage
                    source={AppIcon}
                    style={styles.AppIconStyle}
                    resizeMode='contain'
                />

                <FastImage
                    source={WingsFlyLogo}
                    style={styles.AppNameStyle}
                    resizeMode='contain'
                />
                <View style={{ flex: 1 }} />
                <IconButton
                    icon={
                        useMemo(() =>
                            <Ionicons
                                name='search-outline'
                                size={ResponsiveSizeWp(24)}
                                color={iconColor}
                            />, [])
                    }
                />
                <IconButton
                    icon={
                        useMemo(() =>
                            <Ionicons
                                name='calendar-outline'
                                size={ResponsiveSizeWp(24)}
                                color={iconColor}
                            />, [])
                    }
                />
                <IconButton
                    icon={
                        useMemo(() =>
                            <AntDesign
                                name='questioncircleo'
                                size={ResponsiveSizeWp(24)}
                                color={iconColor}
                            />, [])
                    }
                />
            </View>
            <View style={styles.ContentContainer}>
                {children}
            </View>
        </View>
    )
}

export default memo(ScreenHeader)

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    HeaderContainer: {
        flexDirection: 'row',
        gap: ResponsiveSizeWp(10),
        alignItems: 'center',
        paddingHorizontal: ResponsiveSizeWp(20),
        paddingVertical: ResponsiveSizeWp(15),
    },
    AppIconStyle: {
        width: ResponsiveSizeWp(38),
        aspectRatio: 1 / 1,
        backgroundColor: COLOR.PRIMARY,
        borderRadius: ResponsiveSizeWp(12),
    },
    AppNameStyle: {
        height: ResponsiveSizeWp(25),
        aspectRatio: 3.71 / 1,
        marginLeft: -ResponsiveSizeWp(5)
    },
    ContentContainer: {
        flex: 1,
    },
})