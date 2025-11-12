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
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>


      <main>
        <h1>Actor identity</h1>
        <div class="container">

          <div class="row">
            {actors.map((actor) => (
              <div class='col-3 mb-4'>
                <div className="card h-100 g-4" style={{ width: '300px', display: 'flex' }}>

                  <h4>{actor.name}</h4>
                  <img src={actor.image} />
                  <span>{actor.birth_year}</span>
                  <span>{actor.nationality}</span>
                  <span>{actor.biography}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>


    </>
  )
}

export default App
