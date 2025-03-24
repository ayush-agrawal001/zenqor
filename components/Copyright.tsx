import type React from "react"

const Copyright: React.FC = () => {
  return (
    <div className="flex flex-col pb-2 mt-10 sm:mt-12 w-full text-sm leading-tight text-center text-zinc-500">
      <div className="w-full min-h-0 border border-solid bg-neutral-500 border-neutral-500" />
      <div className="flex flex-wrap gap-4 justify-center items-center mt-6 w-full">
        <div className="w-full flex justify-center text-xs sm:text-sm">
          <div className="flex flex-wrap justify-center">
            <span>© 2025 Zenqor - All Rights Reserved | Privacy and Policy.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Copyright

