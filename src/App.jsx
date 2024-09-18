
import { Header } from "./components/Header"
import { Post } from "./Post"


function App() {
  return (
    <div>
      <Header />
        <Post 
          author = "Diego Freitas"
          content = "Ignite, Ignite, Ignite"
        />

    </div>
  )
}

export default App
