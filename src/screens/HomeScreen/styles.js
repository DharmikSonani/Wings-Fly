import { StyleSheet } from 'react-native'
import { COLOR } from '../../helpers/colors'
import { ResponsiveSizeWp } from '../../helpers/responsive'

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    ContentContainer: {
        paddingBottom: ResponsiveSizeWp(92),
    },
    QuoteCardContainer: {
        width: '100%',
        padding: ResponsiveSizeWp(12),
    },
})