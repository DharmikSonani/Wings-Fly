import { useCallback, useEffect, useState } from "react";
import { OPTIONS_DRAWER_DATA, TASK_DATA } from "../../helpers/demo";
import { format } from "date-fns";

const useScreenHooks = () => {

    // Variables
    const options = OPTIONS_DRAWER_DATA;

    // UseStates
    const [tasks, setTasks] = useState(TASK_DATA);
    const [drawerVisible, setDrawerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [progress, setProgress] = useState(20);


    // UseEffects
    useEffect(() => {
        const completed = tasks.filter(task => task.status === "completed").length;
        const total = tasks.length;
        setProgress(Math.round((completed / total) * 100));
    }, [tasks])

    useEffect(() => {
        setTasks(TASK_DATA);
    }, [selectedDate])

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
        if (task.status === 'completed') return;

        const updatedTasks = tasks.map(t =>
            t.title === task.title ? { ...t, status: 'completed' } : t
        );
        setTasks(updatedTasks);
    }, [tasks]);

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