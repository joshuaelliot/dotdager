
import './App.css'
import Front from './components/Front'
import Header from './components/Header'
import About from './components/About'
import Guitar from './components/Guitar'
import Cats from './components/Cats'
import Pickle from './components/Pickle'
import Footer from './components/Footer'
import Developer from './components/Developer'

function App() {
  

  return (
    <>
      <Header/>
      <Front/>
      <About>
        <Guitar/>
        <Cats/>
        <Pickle/>
        <Developer/>
      </About>
      <Footer/>
    </>
  )
}

export default App
