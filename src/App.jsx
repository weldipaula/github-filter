import { useState, useEffect } from 'react'
import {parseISO} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Container } from './styled'


function App() {
  const [data, setData] = useState([])
  const [render, setRender] = useState([])
  const [search, setSearch] = useState()

  useEffect(()=>{
    async function getData () {
      const response = await fetch('https://api.github.com/users/weldipaula/repos')
      const dataRepo = await response.json();
      setData(dataRepo)
      setRender(dataRepo)
    }
    getData()
  },[])

  function handleFilterArchived () {
    const repoArchived = []
    data.map(repo => {
      if(repo.archived){
        repoArchived.push(repo)
      }
    })
    setRender(repoArchived)
  }

  function handleFilterCommit () {
    let filterCommit = data
    let filterCommitFormated = []

    filterCommit.map(commit => 
      filterCommitFormated.push({
        id : commit.id,
        name : commit.name,
        pushed_at : parseISO(commit.pushed_at,'dd/MM/yyyy',{locale:ptBR}),
        archived : commit.archived,
        html_url : commit.html_url,
        description: commit.description
      })
    )

    const filteredCommit = filterCommitFormated.sort((a,b) => {
      if (a.pushed_at > b.pushed_at) return -1
      if (a.pushed_at < b.pushed_at) return 1
      return 0
    })
    
    setRender(filteredCommit)
  }

  function handleOrderAZ () {
    setRender(data)
  }

  function handleFilterString () {
    const filterString = []
    data.map(repo => {
      if(repo.name.includes(search)){
        filterString.push(repo)
      }
    })
    setRender(filterString)
  }

  function resetRadioState () {
    setSearch('')
    setRender(data)
  }

  return (
    <>
    <Container>
      <div className="c-filters">
        <div className="c-search">
        <div className="search-bar">
          <input 
            type="text" 
            name="search" 
            id="search" 
            value={search}
            placeholder='Encontre um repo' 
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>
        <div className="search-btn">
          <button 
            onClick={handleFilterString}
          >Buscar</button>
        </div>
        </div>
        <div className="c-radio"> 
        <div className="radios">
          <div className="radio">
            <input 
              type="radio" 
              name="filter" 
              id="archived"
              onChange={handleFilterArchived}
            />
            <label htmlFor="archived">Arquivado</label>
          </div>       
          <div className="radio">
            <input 
              type="radio" 
              name="filter" 
              id="order"
              onChange={handleOrderAZ}
            />
            <label htmlFor="order">Orden A - Z</label>
          </div>
          <div className="radio">
            <input 
              type="radio" 
              name="filter" 
              id="commit"
              onChange={handleFilterCommit}
            />
            <label htmlFor="commit">Commit mais recente</label>
          </div>
        </div>
        <div className='radio-button'>
          <button onClick={resetRadioState}>limpar</button>
        </div>        
        </div>
      </div>
      <div className="container-repo">
        { render.map(repo => {
            return (
              <div 
                className='repo'
                key={repo.id}>
                  <a href={repo.html_url}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                  </a>
              </div>
            )
          })
        }
      </div>
    </Container>
    </>
  )
}

export default App