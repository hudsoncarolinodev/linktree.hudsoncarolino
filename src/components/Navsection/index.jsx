import Navitem from './Navitem'
import  { useState } from 'react';
import {Section} from './style'

function Navsection(){

    const [menuItens, setItens] = useState([
        {   
            id:0,
            name:"Sala Demo (SENHA: 12345)",
            backgroundImage:`https://hudsoncarolino.com.br/wp-content/uploads/2022/05/demo.webp`,
            link:"https://kenzieacademybr.zoom.us/j/83005615779",
        },
        {   
            id:3,
            name:"Acesso gravações demo",
            link:"https://canvas.kenzie.com.br/courses/17/pages/demos-e-talks",
            backgroundImage:`https://hudsoncarolino.com.br/wp-content/uploads/2022/05/canvas.jpg`,
        },
        {   
            id:1,
            name:"Repositório Demo",
            link:"https://github.com/Kenzie-Academy-Brasil-Developers/m1-t14",
            backgroundImage:"https://github.githubassets.com/images/modules/site/social-cards/github-social.png"
        },
        {   
            id:2,
            name:"Acesso ao canvas (M1-T14)",
            link:"https://canvas.kenzie.com.br/courses/17",
            backgroundImage:`https://hudsoncarolino.com.br/wp-content/uploads/2022/05/canvas.jpg`,
        },
        // {   
        //     id:4,
        //     name:"Slido para perguntas demo",
        //     link:"https://app.sli.do/event/9Z8Spw4q3yHcXehcKmaRYY",
        //     backgroundImage:`https://hudsoncarolino.com.br/wp-content/uploads/2022/05/slido.png`,
        // },
        {   
            id:5,
            name:"Agendar (1-1) com Hudson",
            link:"https://calendly.com/hudson-14/1-1-hudson?month=2022-05",
            backgroundImage:`https://hudsoncarolino.com.br/wp-content/uploads/2022/05/calendly.png`,
        },
    ])

    return (
        <Section>
            <ul>
                {
                    menuItens.map((item)=> {
                    
                        return <Navitem 
                            key={item.id} 
                            data={item} 
                        /> 
                    
                    })
                }
            </ul>
        </Section>
    )

}
export default Navsection
