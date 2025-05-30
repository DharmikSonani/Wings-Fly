import { BrainIcon, GoalIcon, TaskIcon, TickIcon } from "./assets";

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
