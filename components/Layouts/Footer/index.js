export default function Footer() {
  return (
    <footer className="dark:bg-dm-black flex justify-center pb-4 text-gray-500 text-xs sm:text-sm md:text-base">
      <span>
        Created by {''}
        <a
          href="https://github.com/carlosdtn"
          className="inline-block underline font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          carlosdtn
          <img
            src="https://avatars.githubusercontent.com/u/54995804?v=4"
            alt="profile"
            className="inline-block w-4 h-4 rounded-full ml-1"
          />
        </a>
        {''} - devChallenges.io
      </span>
    </footer>
  )
}
