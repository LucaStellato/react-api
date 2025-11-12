import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  const [actor, setActor] = useState([])
  const [actress, setActress] = useState([])
  const api_server_actor = 'https://lanciweb.github.io/demo/api/actors/'
  const api_server_actress = 'https://lanciweb.github.io/demo/api/actresses/'
  axios.get(api_server_actor).then(response => {
    console.log(response.data)
    setActor(response.data)
  })
  axios.get(api_server_actress).then(response => {
    console.log(response.data)
    setActress(response.data)
  })



  return (
    <>


    </>
  )
}

export default App
