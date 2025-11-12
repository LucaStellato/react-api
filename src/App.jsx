import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  const [actors, setActors] = useState([])
  const [actress, setActress] = useState([])
  const api_server_actor = 'https://lanciweb.github.io/demo/api/actors/'
  const api_server_actress = 'https://lanciweb.github.io/demo/api/actresses/'

  useEffect(apiActor, [])
  useEffect(apiActress, [])
  function apiActor() {
    axios.get(api_server_actor).then(response => {
      console.log(response.data)
      setActors(response.data)
    })
  }
  function apiActress() {
    axios.get(api_server_actress).then(response => {
      console.log(response.data)
      setActress(response.data)
    })
  }



  return (
    <>
      <h1>Actor identity</h1>
      <div className="card" style={{ width: '18rem' }}>
        {actors.map((actor) => (

          <li>
            {actor.name}
            <img src={actor.image} />
            {actor.birth_year}
            {actor.nationality}
            {actor.biography}
          </li>
        ))}
      </div>

    </>
  )
}

export default App
