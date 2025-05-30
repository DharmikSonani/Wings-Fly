import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { OPTIONS_DRAWER_DATA, TASK_DATA } from "../../helpers/demo";
import { format } from "date-fns";

const useScreenHooks = () => {

    // Variables
    const navigation = useNavigation();;
    const options = OPTIONS_DRAWER_DATA;
    const tasks = TASK_DATA;

    // UseStates
    const [drawerVisible, setDrawerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [progress, setProgress] = useState(20);
    const [completedTask, setCompletedTask] = useState([]);

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

    const handleTaskPress = useCallback((task) => {
        // setProgress(10);
    }, [])

    return {

        drawerVisible,
        options,
        progress,
        tasks,

        handleAddButtonPress,
        handleDrawerClose,
        handleOptionSelect,
        handleDateChange,
        handleTaskPress,
    };
}

export default useScreenHooks