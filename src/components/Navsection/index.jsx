import Navitem from './Navitem'
import  { useState } from 'react';
function Navsection(){

    const [menuItens, setItens] = useState([
        {   
            id:0,
            name:"Kenzie",
            imge:""
        },
        {   
            id:1,
            name:"Hudson",
            imge:""
        },
    ])
    
    return (
        <section>
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
        </section>
    )

}
export default Navsection
