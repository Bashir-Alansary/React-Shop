import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function Tool({tools}) {

    useEffect(()=> {
        Aos.init({duration: 2000});
      }, [])

    return (
        <div className='content'>
            {
                tools.map(tool => {
                    const{id, image, name} = tool;
                    return(
                        <div className='tool-box' key={id} data-aos="flip-right">
                            <div className='img-box'>
                                <img src={image} alt={name} />
                            </div>
                            <h3 className='tool-name'>{name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tool;
