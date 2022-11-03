import { RepositoryItem } from "./ReositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

const repository ={
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

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
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>      
            <RepositoryItem repository={repository}/>      
            <RepositoryItem repository={repository}/>      
          </ul>   
        </section>
    )
}