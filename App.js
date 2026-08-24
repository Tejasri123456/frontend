import { BrowserRouter,Route,Routes} from  "react-router-dom"
import Register from './Register'
import Login from './Login'
  function App() {
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/reg' element ={<Register/>}/>
        <Route path="/log" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
}
export default App