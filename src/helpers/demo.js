import { BrainIcon, GoalIcon, Task1Icon, Task2Icon, Task3Icon, Task4Icon, Task5Icon, Task6Icon, TaskIcon, TickIcon } from './assets';
import { ResponsiveSizeWp } from './responsive';
import { CARD_COLORS } from './colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const OPTIONS_DRAWER_DATA = [
    {
        'type': 'Habit',
        'description': 'Activity that repeats over time it has detailed tracking and statistics.',
        'icon': BrainIcon,
    },
    {
        'type': 'Recurring Task',
        'description': 'Activity that repeats over time it has detailed tracking and statistics.',
        'icon': TaskIcon
    },
    {
        'type': 'Task',
        'description': 'Single instance activity without tracking over time.',
        'icon': TickIcon
    },
    {
        'type': 'Goal of the Day',
        'description': 'A specific target set for oneself to achieve within a single day.',
        'icon': GoalIcon
    }
]

export const TASK_DATA = [
    {
        'title': 'Schedule a meeting with Harshit Sir',
        'time': '09:00 AM',
        'type': 'Habit',
        'tag': 'Must',
        'status': 'pending',
        'icon': Task1Icon,
        'icon2': <MaterialCommunityIcons name='timer-sand' size={ResponsiveSizeWp(13)} color={CARD_COLORS[0].color} />,
    },
    {
        'title': '2.5 Hours Simran and Meditation',
        'time': '09:00 AM',
        'type': 'Habit',
        'tag': 'Must',
        'status': 'pending',
        'icon': Task2Icon,
        'icon2': <MaterialCommunityIcons name='message-processing-outline' size={ResponsiveSizeWp(13)} color={CARD_COLORS[1].color} />,
    },
    {
        'title': 'Save 200 Rupees Daily',
        'time': '12:00 PM',
        'type': 'Habit',
        'tag': 'Must',
        'status': 'pending',
        'icon': Task3Icon,
        'icon2': <MaterialCommunityIcons name='calculator' size={ResponsiveSizeWp(13)} color={CARD_COLORS[2].color} />,
    },
    {
        'title': 'Walk 10k Step Daily',
        'time': '07:00 AM',
        'date': '12/31',
        'type': 'Habit',
        'tag': 'Important',
        'status': 'pending',
        'icon': Task4Icon,
        'task': {
            'total': 31,
            'completed': 12,
        }
    },
    {
        'title': 'Buy Sunflower for Mumma',
        'time': '11:00 AM',
        'progress': '0/1',
        'type': 'Task',
        'tag': 'Important',
        'status': 'pending',
        'icon': Task5Icon,
        'icon2': <MaterialIcons name='checklist' size={ResponsiveSizeWp(13)} color={CARD_COLORS[4].color} />,
        'task': {
            'total': 1,
            'completed': 0,
        }
    },
    {
        'title': 'Make Mandala and Colour Daily',
        'time': '07:30 PM',
        'date': '12/30',
        'type': 'Task',
        'tag': 'Important',
        'status': 'pending',
        'icon': Task6Icon,
        'icon2': <MaterialIcons name='repeat' size={ResponsiveSizeWp(13)} color={CARD_COLORS[5].color} />,
        'task': {
            'total': 30,
            'completed': 12,
        }
    }
]