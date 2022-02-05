import RandomButton from 'components/Buttons/RandomButton'
import React, { useContext } from 'react'
import ReloadContext from 'context/reloadContext'

export default function UpperSection({ children }) {
  const reloadStates = useContext(ReloadContext)

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-end">
        <RandomButton reloadStates={reloadStates}>aleatorio</RandomButton>
      </div>
      {children}
    </div>
  )
}
