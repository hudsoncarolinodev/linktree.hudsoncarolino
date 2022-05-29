import Navbar from '../Navbar'
import {Header} from './style'
import {useState} from 'react'

function Appheader(){

    const [position, setPosition] = useState("-0%");
    
    return (
        <Header positionPx={position}>
            <Navbar />
        </Header>
    )
}

export default Appheader