import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { ResponsiveSizeWp } from '../../helpers/responsive'
import { COLOR } from '../../helpers/colors'
import Feather from 'react-native-vector-icons/Feather'
import { FontFamily } from '../../helpers/fonts'
import FastImage from 'react-native-fast-image'

const OptionCard = ({
    isFirst,
    data,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            style={styles.Container}
            activeOpacity={1}
            onPress={() => { onPress(data) }}
        >
            <View style={styles.IconContainer}>
                <FastImage
                    source={data?.icon}
                    style={styles.IconStyle}
                    resizeMode='contain'
                />
            </View>
            <View style={[styles.ContentContainer, isFirst && { borderTopWidth: 0, }]}>
                <View style={styles.TextContainer}>
                    <Text style={styles.TypeText} numberOfLines={1}>{data?.type}</Text>
                    <Text style={styles.DescriptionText} numberOfLines={2}>{data?.description}</Text>
                </View>
                <Feather
                    name='chevron-right'
                    size={ResponsiveSizeWp(27)}
                    color={COLOR.PRIMARY}
                />
            </View>
        </TouchableOpacity>
    )
}

export default memo(OptionCard)

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
    },
    IconContainer: {
        height: ResponsiveSizeWp(50),
        aspectRatio: 1 / 1,
        backgroundColor: COLOR.OPTIONICONLIGHT,
        padding: ResponsiveSizeWp(11),
        borderRadius: ResponsiveSizeWp(40),
        marginVertical: ResponsiveSizeWp(10),
        marginHorizontal: ResponsiveSizeWp(18),
    },
    IconStyle: {
        height: '100%',
        width: '100%',
    },
    ContentContainer: {
        flex: 1,
        borderTopWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GREY,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: ResponsiveSizeWp(13),
        gap: ResponsiveSizeWp(30),
    },
    TextContainer: {
        flex: 1,
    },
    TypeText: {
        fontFamily: FontFamily.Bold,
        fontSize: ResponsiveSizeWp(16),
        color: COLOR.BLACK,
    },
    DescriptionText: {
        fontFamily: FontFamily.Regular,
        fontSize: ResponsiveSizeWp(10),
        color: COLOR.DARKGREY,
    },
})