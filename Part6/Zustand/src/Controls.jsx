import { useCounterControls } from './store'


const Controls = () => {

    const {goodAction, badAction, naturalAction} = useCounterControls()



    return(
        <>
            <div>
                <button onClick={goodAction} >good</button>
                <button onClick={naturalAction} >natural</button>
                <button onClick={badAction} >bad</button>
            </div>
        
        </>
    )
}

export default Controls


