import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {

  const router = useRouter()

  const goTo = (link) => {
    (router.push(link))
  }

  return (
    <div >
      <div>
        <button onClick={() => goTo("friend-list")}>
          FriendLists
        </button>
      </div>
      <div>
        <button onClick={() => goTo("use-table")}>
          Table utilisation
        </button>
      </div>
      <div>
        <button onClick={() => goTo("todo-list")}>
          Todo List
        </button>
      </div>
      <div>
        <button onClick={() => goTo("test")}>
          Test
        </button>
      </div>
    </div>
  )
}
