import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import{projectsItems} from '../../Data/projectsData'
import Aos from 'aos';
import "aos/dist/aos.css";

function Project() {

  useEffect(()=> {
    Aos.init({duration: 2000});
  }, [])

  return (
      <>
        {
          projectsItems.map(item=> {
            const{id, image, title, projectPath} = item;
            return(
              <div key={id} className='box' data-aos="zoom-in">
                  <Link className="link" to={projectPath}>
                    <div className='img-box'>
                      <img src={image} alt={title} />
                    </div>
                    <div className='txt-box'>
                      <h3>{title}</h3>
                    </div>
                  </Link>
              </div>
            )
          })
        }
      </>
  )
}

export default Project;
