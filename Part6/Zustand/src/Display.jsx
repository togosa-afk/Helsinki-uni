
import { useBad, useNatural, useGood } from './store'

const Display = () => {

    const bad = useBad()
    const good = useGood()
    const natural = useNatural()

    const all = bad + good + natural
    const average = all/3
    const positive = (good/all)*100

    return(
        <>
            <p>good: {good}</p>  
            <p>natural: {natural}</p>  
            <p>bad: {bad}</p>  
            <p>all: {all}</p>  
            <p>average: {average}</p>
            <p>positive: { all===0 ? 0 : positive } </p> 
        </>
    )
}

export default Display

