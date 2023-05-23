import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import './global.css'

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse obcaecati a reiciendis soluta, ea molestias. Magni molestias, optio eos similique cum delectus accusantium ipsa, suscipit, consequuntur dignissimos minima totam? Voluptatum!"
          />
          <Post
            author="Gabliel Buzzi"
            content="Um novo post muito legal"
          />
        </main>

      </div>

    </div>
  )
}
