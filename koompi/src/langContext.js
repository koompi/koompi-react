import React, { useState } from "react"

export const LangContext = React.createContext(null)

const initailState = window.localStorage.i18nextLng

export function LangProvider({ children }) {
  const [state, setState] = useState(initailState)

  console.log("initailState", initailState)

  return <LangContext.Provider value={{ state }}>{children}</LangContext.Provider>
}
