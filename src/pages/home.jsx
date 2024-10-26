import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    function navigateHandler() {
        navigate("/products")
    }
  return (
    <div>
        <h1>Home</h1>
        <button onClick={navigateHandler}>Products</button>
    </div>
  )
}

export default Home