import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  const [actor, setActor] = useState([])
  const [actress, setActress] = useState([])
  const api_server_actor = 'https://lanciweb.github.io/demo/api/actors/'
  const api_server_actress = 'https://lanciweb.github.io/demo/api/actresses/'
  axios.get(api_server_actor).then(response => {
    console.log(response.data.results)
  })

  return (
    <>


    </>
  )
}

export default App
