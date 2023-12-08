import Header from "./components/Header"
import {data} from "./helper/data"
import Card from "./components/Card"
import app from "./sass/app.scss"
const App = () => {
  
  return (
    <>
      <Header/>
      <Card data={data}/>
    </>
  )
}

export default App
