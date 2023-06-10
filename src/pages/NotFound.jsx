import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>Page not found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor labore obcaecati, delectus 
            itaque nostrum quibusdam aut neque eos dolorum,  repellendus saepe reprehenderit veniam accusamus, veritatis laudantium quis unde dicta!</p>
    <p>Go to <Link to="/">Homepage</Link></p>
    
    </div>
  )
}

export default NotFound