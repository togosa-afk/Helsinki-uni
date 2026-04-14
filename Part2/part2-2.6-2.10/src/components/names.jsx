

const Names = ({persons}) => {
    console.log(`persons content :  ${persons.content} `)
    return (
        <li> {persons.name} {persons.number} </li>
    )
}

export default Names