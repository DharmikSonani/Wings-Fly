import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { memo, } from 'react'
import { COLOR } from '../../helpers/colors'
import { ResponsiveSizeWp, screenHeight, screenWidth, useBottomSafeArea } from '../../helpers/responsive'

const BottomSheet = ({
    visible = false,
    onDismiss = () => { },
    children,
}) => {

    const bottomSafeArea = useBottomSafeArea();

    return (
        <>
            <Modal
                visible={visible}
                transparent={true}
                animationType='slide'
                onRequestClose={onDismiss}
                onDismiss={onDismiss}
                statusBarTranslucent={true}
            >
                <View style={[styles.Wrapper,]}>
                    <TouchableOpacity
                        style={styles.DismissWrapper}
                        onPress={onDismiss}
                        activeOpacity={1}
                    />
                    <View style={[styles.BottomSheetWrapper, { paddingBottom: bottomSafeArea }]}>
                        {children}
                    </View>
                </View>
            </Modal>
            {visible && <View style={[styles.Background,]} />}
        </>
    )
}

export default memo(BottomSheet)

const styles = StyleSheet.create({
    Background: {
        backgroundColor: COLOR.BLACK_20,
        position: 'absolute',
        top: -screenHeight,
        left: -screenWidth,
        bottom: -screenHeight,
        right: -screenWidth,
        zIndex: 1000,
    },
    Wrapper: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        zIndex: -100,
    },
    DismissWrapper: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: -10,
    },
    BottomSheetWrapper: {
        backgroundColor: COLOR.WHITE,
        width: '100%',
        borderTopLeftRadius: ResponsiveSizeWp(40),
        borderTopRightRadius: ResponsiveSizeWp(40),
        overflow: 'hidden',
    },
})