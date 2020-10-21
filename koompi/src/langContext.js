import React, { useState, useEffect } from "react"

export const LangContext = React.createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    setLang(window.localStorage.getItem("i18nextLng"))
  }, [])

  return (
    <LangContext.Provider value={{ state: lang }}>{children}</LangContext.Provider>
  )
}
