function Navitem({data}){

    const {name, image} = data

    return (
        <li>
            <img src={image}  alt={name} />
            <a href="">{name}</a>
        </li>
    )
}
export default Navitem