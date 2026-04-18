

const Names = ({persons , onClick}) => {
    console.log(`persons name :  ${persons.name} `)
    return (
        <li> {persons.name} {persons.number} <button onClick={() => onClick(persons.id)}>delete</button> </li>
    )
}

export default Names