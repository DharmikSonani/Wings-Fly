import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { OPTIONS_DRAWER_DATA } from "../../helpers/demo";
import { format } from "date-fns";

const useScreenHooks = () => {

    // Variables
    const navigation = useNavigation();;
    const options = OPTIONS_DRAWER_DATA;

    // UseStates
    const [drawerVisible, setDrawerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

    // UseEffects


    // Methods
    const handleAddButtonPress = () => {
        setDrawerVisibility(true);
    }

    const handleDrawerClose = () => {
        setDrawerVisibility(false);
    }

    const handleOptionSelect = (option) => {
        setDrawerVisibility(false);
    }

    const handleDateChange = useCallback((date) => { setSelectedDate(date) }, [])

    return {

        drawerVisible,
        options,

        handleAddButtonPress,
        handleDrawerClose,
        handleOptionSelect,
        handleDateChange,
    };
}

export default useScreenHooks