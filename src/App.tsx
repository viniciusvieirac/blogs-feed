import Header from "./components/header/Header"
import styles from './App.module.css'
import { Sidebar } from "./components/sidebar/Sidebar"


function App() {
  return (
    <div>
     <Header />
     <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <h1>vasco da</h1>
      </main>
     </div>
    </div>
  )
}

export default App
