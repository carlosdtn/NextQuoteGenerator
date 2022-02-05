import RandomButton from 'components/Buttons/RandomButton'
import React, { useContext } from 'react'
import ReloadContext from 'context/reloadContext'

export default function UpperSection({ children }) {
  const reloadStates = useContext(ReloadContext)

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between">
        <p className="mt-4 ml-16 bg-slate-400 text-gray-800">
          (Switch Cambio de Modo)
        </p>
        <RandomButton reloadStates={reloadStates}>aleatorio</RandomButton>
      </div>
      {children}
    </div>
  )
}
