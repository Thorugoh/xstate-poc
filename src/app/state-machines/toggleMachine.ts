import { assign, createMachine } from "xstate";

export const toggleMachine = createMachine({
    id: 'toggle',
    initial: 'Inactive',
    states: {
        Inactive: {
            on: { toggle: 'Active'}
        },
        Active: {
            on: { toggle: 'Inactive'}
        }
    }
})