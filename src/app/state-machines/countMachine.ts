import { StateMachine, assign, createMachine } from "xstate";

const increment = (context) => context.count + 1;
const decrement = (context) => context.count - 1;

export const countMachine: StateMachine<> = createMachine({
    id: 'active',
    context: {
        count: 0,
    },
    states: {
        active: {
            on: {
                inc: { actions: assign({count: increment }) }
                dec: {actions: assign({count: decrement })}
            }
        }
    }

})