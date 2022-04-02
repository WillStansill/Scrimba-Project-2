import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Place from "./components/Place"
import data from "./data"

export default function App() {
  const [count, setCount] = useState(0)

  const places = data.map(item => {
    return (
      <Place 
      Country={item.Country}
      image={item.image}
      location={item.location} 
      description={item.description}
  
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section>
        {places}
      </section>
      </div>
    )
  }