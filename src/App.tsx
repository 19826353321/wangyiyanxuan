import { useState ,Suspense} from 'react'
import Routes from '@/routes'
import Footer from './components/Footer'
// import "@/assets/styles/reset.css"
import "@/assets/styles/reset2.css"
import "./App.css"
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>

      <Routes />
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
