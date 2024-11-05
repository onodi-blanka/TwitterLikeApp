import { User } from "./types/types"

function App() {
  const user: User  = {
    id: "1",
    name: "John Doe",
    email: "asd@a.com"
  }
  console.log(user.name + " " + user.email)
 return (
  <div>
    Hello world
  </div>
 )
}

export default App
