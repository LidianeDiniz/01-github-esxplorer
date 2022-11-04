import { RepositoryItem } from "./ReositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";



export function RepositoryList(){
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/LidianeDiniz/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

    return(
        <section className="repository-List" >
          <h1>Lista de repositorios</h1>  

          <ul>
            {repositories.map(repository => {
              return <RepositoryItem key={repository.name} repository={repository}/>
            })}
            
              
          </ul>   
        </section>
    )
}