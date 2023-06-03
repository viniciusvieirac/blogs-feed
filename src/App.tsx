import Header from "./components/header/Header"
import styles from './App.module.css'
import { Sidebar } from "./components/sidebar/Sidebar"
import { Post } from "./components/post/Post"


function App() {
  return (
    <div>
     <Header />
     <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
       <Post />
       <Post />
      </main>
     </div>
    </div>
  )
}

export default App
