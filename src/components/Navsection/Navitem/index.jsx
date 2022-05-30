import {Li} from './style'

function Navitem({data}){

    const {name,link,backgroundImage} = data
 
    return (
        <Li backgroundImage={backgroundImage}>
            <a href={link} title={name} target="_blank">
                <h2>{name}</h2>
                {/* <img src=""  alt={name} /> */}
            </a>
        </Li>
    )
}
export default Navitem