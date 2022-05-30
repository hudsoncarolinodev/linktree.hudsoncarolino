import Navitem from './Navitem'
import  { useState } from 'react';
import {Section} from './style'

function Navsection(){

    const [menuItens, setItens] = useState([
        {   
            id:0,
            name:"Sala Demo (SENHA: 1122)",
            backgroundImage:"./../../../../public/img/demo.webp",
            link:"https://kenzieacademybr.zoom.us/j/84512565476?pwd=em9oam1BQWdtMXZLQ3dPeCtSNnRSZz09",
        },
        {   
            id:3,
            name:"Acesso gravações demo",
            link:"https://alunos2.kenzie.com.br/courses/99/pages/demos-e-talks",
            backgroundImage:"./../../../../public/img/canvas.jpg",
        },
        {   
            id:1,
            name:"Repositório Demo",
            link:"https://github.com/Kenzie-Academy-Brasil-Developers/m1-mai-22",
            backgroundImage:"https://github.githubassets.com/images/modules/site/social-cards/github-social.png"
        },
        {   
            id:2,
            name:"Acesso ao canvas (M1-T13)",
            link:"https://alunos2.kenzie.com.br/courses/99",
            backgroundImage:"./../../../../public/img/canvas.jpg",
        },
        {   
            id:4,
            name:"Slido para perguntas demo",
            link:"https://app.sli.do/event/9Z8Spw4q3yHcXehcKmaRYY",
            backgroundImage:"./../../../../public/img/slido.png",
        },
        {   
            id:5,
            name:"Agendar (1-1) com Hudson",
            link:"https://calendly.com/hudson-14/1-1-hudson?month=2022-05",
            backgroundImage:"./../../../../public/img/calendly.png",
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
