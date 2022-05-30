import Navitem from './Navitem'
import  { useState } from 'react'
import {Navbararea} from './style'

function Navbar(){

    const [menuItens, setItens] = useState([
        {   
            id:0,
            name:"Kenzie Academy",
            imge:""
        },
    ])
    
    return (
        <Navbararea>
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
        </Navbararea>
    )
}
export default Navbar