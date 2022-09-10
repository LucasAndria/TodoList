import Head from "next/head";
import TodoList from "../components/TodoList"


export default function Home() {

  return (
    <div>
      <Head>
        <title>TODO LIST</title>
      </Head>
      <TodoList />
    </div>
    
  )
}
