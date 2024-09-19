
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar/>  
      <main>
        <Post 
          author="Lucas"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies."
        />
        <Post 
          author="Lucas"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies."
        />
        </main>
      </div> 
    </div>
  )
}
