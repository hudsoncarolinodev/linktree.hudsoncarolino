import {useState} from 'react'
import Navbar from '../Navbar'
import {Header} from './style'
import { FaAlignLeft, FaRegTimesCircle } from "react-icons/fa";

function Appheader(){

    const [positionHeader, SetpositionHeader] = useState(false);
    
    return (
        <Header positionPx={positionHeader}>
            <button onClick={()=>SetpositionHeader(!positionHeader)}>
                {positionHeader ? <FaRegTimesCircle/>:<FaAlignLeft/>}
            </button>
            <Navbar />
        </Header>
    )
}
export default Appheader