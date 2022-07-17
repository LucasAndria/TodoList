import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {

  const router = useRouter()

  const goTo = (link) => {
    (router.push(link))
  }

  return (
    <div className="relative w-full h-screen bg-[#A0BEF8]">
      <div className="p-5 flex justify-center items-center">
        <p>These are the projects I have done to learn NextJs and Firebase</p>
      </div>
      <div className="w-[100%] max-w-6xl h-[20vh] grid md:grid-cols-2 lg:grid-cols-3 items-center ml-[1%] gap-8">
        <div className="flex justify-center">
          <button onClick={() => goTo("friend-list")} className='bg-[#B5F0F0] text-center w-40 h-10 rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300'>
            FriendLists
          </button>
        </div>

        <div className="flex justify-center">
          <button onClick={() => goTo("use-table")} className='bg-[#B5F0F0] text-center w-40 h-10 rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300'>
            Table utilisation
          </button>
        </div>

        <div className="flex justify-center">
          <button onClick={() => goTo("todo-list")} className='bg-[#B5F0F0] text-center w-40 h-10 rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300'>
            Todo List
          </button>
        </div>
      </div>
    </div>
  )
}
