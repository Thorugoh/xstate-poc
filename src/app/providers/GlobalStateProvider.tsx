import React from "react";
import { createActorContext } from "@xstate/react";
import { toggleMachine } from "../state-machines/toggleMachine";

export const GlobalStateContext = createActorContext(toggleMachine);

export const GlobalStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return(
        <GlobalStateContext.Provider>
            {children}
        </GlobalStateContext.Provider>
    )
}