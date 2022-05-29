function Navitem({data}){

    const {name, image} = data

    return (
        <li>
            <a href="">
                <h2>{name}</h2>
                <img src={image}  alt={name} />
            </a>
        </li>
    )
}
export default Navitem