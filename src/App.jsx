import './App.css'
import Details from './Components/Details/Details'
import Parallax from './Components/main-parallax/main-parallax'
import Header from './Components/Navbar/Navbar'


const App = () => {

  return (
      <div className='w-100 h-100'>
        <Header/>
        <Parallax/>
        <Details img='https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png'/>
        <Details img='https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png'/>
        </div>
  )
}

export default App
