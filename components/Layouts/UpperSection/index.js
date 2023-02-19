import RandomButton from 'components/Buttons/RandomButton'
import BiStateButton from 'components/Buttons/BistateButton'

export default function UpperSection({ children }) {
  return (
    <div className="dark:bg-dm-black h-full flex flex-col">
      <div className="flex justify-between">
        <BiStateButton />
        <RandomButton>random</RandomButton>
      </div>
      {children}
    </div>
  )
}
