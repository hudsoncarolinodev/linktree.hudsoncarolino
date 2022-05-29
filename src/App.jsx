import Appheader from './components/Appheader'
import Appfooter from './components/Appfooter'
import Home from './views/Home'

function App() {

  return (
    <div className='container'>
      <Appheader />
        <Home />
      <Appfooter/>
    </div>
  )
}

export default App
