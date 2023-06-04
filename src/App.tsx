import Header from "./components/header/Header"
import styles from './App.module.css'
import { Sidebar } from "./components/sidebar/Sidebar"
import { Post } from "./components/post/Post"
import { Author, ContentParagraph, ContentLink } from './type';

interface Post {
  id: number;
  author: Author;
  content: (ContentParagraph | ContentLink)[];
  publishedAt: Date;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "Vinicius Vieira",
      avatar: "https://avatars.githubusercontent.com/u/118015999?v=4",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'https://github.com/viniciusvieirac',}
    ],
    publishedAt: new Date('2023-06-03 18:00:00')
  },
  {
    id: 2,
    author: {
      name: "Vinicius Vieira",
      avatar: "https://avatars.githubusercontent.com/u/118015999?v=4",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'https://github.com/viniciusvieirac',}
    ],
    publishedAt: new Date('2023-06-03 18:00:00')
  },
];

function App() {
  return (
    <div>
     <Header />
     <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        {posts.map((post) => (
          <Post
            key={ post.id }
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
           />
        ) )}
      </main>
     </div>
    </div>
  )
}

export default App
