import React, { useState } from 'react'

const Context = React.createContext({})

export function AuthorContextProvider({ children }) {
  const [quotes, setQuotes] = useState([])

  fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })

  return <Context.Provider value={{}}>{children}</Context.Provider>
}

export default Context
