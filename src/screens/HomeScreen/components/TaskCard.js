import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { COLOR, FLAG_COLOR } from '../../../helpers/colors'
import { ResponsiveSizeWp } from '../../../helpers/responsive'
import { FontFamily } from '../../../helpers/fonts'
import FastImage from 'react-native-fast-image'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TaskCard = ({
    color,
    data,
    onPress = () => { }
}) => {

    const isCompleted = data?.status === 'completed';

    return (
        <TouchableOpacity
            style={styles.Container}
            activeOpacity={1}
            onPress={() => { onPress(data) }}
        >
            <FastImage
                source={data?.icon}
                style={styles.IconStyle}
                resizeMode='contain'
            />
            <View style={[styles.ContentContainer]}>
                <View style={styles.TextContainer}>
                    <Text style={styles.TitleText} numberOfLines={1}>{data?.title}</Text>
                    <View style={styles.InnerContainer}>
                        <View style={[styles.TimeContainer, { backgroundColor: color?.background }]}>
                            <Ionicons
                                name='alarm-outline'
                                size={ResponsiveSizeWp(15)}
                                color={color?.color}
                            />
                            {data?.icon2 && data?.icon2}
                            <Text style={[styles.TimeTextStyle, { color: color?.color }]} numberOfLines={1}>{data?.time}</Text>
                        </View>
                        {
                            data?.task &&
                            <View style={styles.TagContainer}>
                                <Text style={styles.TagTextStyle} numberOfLines={1}>{data?.task?.completed}/{data?.task?.total}</Text>
                            </View>
                        }
                        <View style={styles.TagContainer}>
                            <Text style={styles.TagTextStyle} numberOfLines={1}>{data.type}</Text>
                            <View style={styles.Saperator} />
                            <Text style={styles.TagTextStyle} numberOfLines={1}>{data.tag}</Text>
                            <Feather
                                name='flag'
                                size={ResponsiveSizeWp(10)}
                                color={FLAG_COLOR[data?.tag?.toLowerCase()]}
                            />
                        </View>
                    </View>
                </View>

                <View style={[styles.CheckView, isCompleted && { backgroundColor: COLOR.LIGHTGREEN }]}>
                    {
                        isCompleted &&
                        <FontAwesome6
                            name='check'
                            size={ResponsiveSizeWp(17)}
                            color={COLOR.GREEN}
                        />
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default memo(TaskCard)

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    IconStyle: {
        height: ResponsiveSizeWp(55),
        aspectRatio: 1 / 1,
        marginVertical: ResponsiveSizeWp(10),
        marginLeft: ResponsiveSizeWp(12),
        marginRight: ResponsiveSizeWp(10),
    },
    ContentContainer: {
        flex: 1,
        borderBottomWidth: ResponsiveSizeWp(1),
        borderColor: COLOR.GREY,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: ResponsiveSizeWp(12),
    },
    TextContainer: {
        flex: 1,
        gap: ResponsiveSizeWp(5),
        paddingVertical: ResponsiveSizeWp(15),
    },
    TitleText: {
        fontFamily: FontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(15),
        color: COLOR.BLACK,
    },
    CheckView: {
        width: ResponsiveSizeWp(25),
        aspectRatio: 1 / 1,
        borderRadius: ResponsiveSizeWp(12.5),
        backgroundColor: COLOR.GREY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InnerContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: ResponsiveSizeWp(3),
        flexWrap: 'wrap',
    },
    TimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: ResponsiveSizeWp(7),
        height: ResponsiveSizeWp(20),
        borderRadius: ResponsiveSizeWp(4),
        gap: ResponsiveSizeWp(2),
    },
    TagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.LIGHTGREY,
        paddingHorizontal: ResponsiveSizeWp(7),
        height: ResponsiveSizeWp(20),
        borderRadius: ResponsiveSizeWp(4),
        gap: ResponsiveSizeWp(5),
    },
    Saperator: {
        width: ResponsiveSizeWp(1),
        height: ResponsiveSizeWp(10),
        backgroundColor: COLOR.DARKGREY,
    },
    TagTextStyle: {
        fontFamily: FontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(12),
        color: COLOR.DARKGREY,
    },
    TimeTextStyle: {
        fontFamily: FontFamily.SemiBold,
        fontSize: ResponsiveSizeWp(11),
    },
})