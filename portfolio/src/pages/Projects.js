import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import List from '../components/List';

function Projects ({userName }) {
    const [projects, setProjects] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData () {
            const data = await fetch(`https://api.github.com/users/${userName}/repos`);
            const result = await data.json();

            // console.log(result);

            if (result) {
                setProjects(result);
                setLoading(false);
            }
        }
        fetchData();
    }, [userName]);


  return (
    <div className='Projects-container'>
        <h2>Projects</h2>
        {
            loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <List items = {projects.map((project) => 
                        ({
                            value: <RouterLink 
                                url={project.html_url}
                                title={project.html_url} 
                            />,
                        })
                    )items} />
                </div>
            )
        }      
    </div>
  )
}

export default Projects;
