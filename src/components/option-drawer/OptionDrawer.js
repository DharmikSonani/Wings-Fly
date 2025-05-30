import { FlatList, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import BottomSheet from '../bottomsheet/BottomSheet'
import OptionCard from './OptionCard'
import { ResponsiveSizeWp } from '../../helpers/responsive'

const OptionDrawer = ({
    data = [],
    visible,
    onDismiss = () => { },
    onOptionSelect = () => { },
}) => {

    return (
        <BottomSheet
            visible={visible}
            onDismiss={onDismiss}
        >
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <OptionCard data={item} onPress={onOptionSelect} isFirst={index === 0} />}
                contentContainerStyle={{ paddingVertical: ResponsiveSizeWp(10) }}
                bounces={false}
            />
        </BottomSheet>
    )
}

export default memo(OptionDrawer)

const styles = StyleSheet.create({})