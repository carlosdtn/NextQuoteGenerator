import React, { useState } from 'react'

const Context = React.createContext({})

export function ReloadContextProvider({ children }) {
  const [isReload, setIsReload] = useState(false)

  return (
    <Context.Provider value={{ isReload, setIsReload }}>
      {children}
    </Context.Provider>
  )
}

export default Context
