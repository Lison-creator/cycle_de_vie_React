import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import style from "./horloge.module.css";


const Horloge = () => {


    const [time, setTime] = useState(moment().format("HH : mm : ss"));

    /* Je veux que le useEffect change l'heure (l'actualise) */
    useEffect(() => {

        console.log('Actualisation de l\'heure');

        setInterval(() => {
            setTime(moment().format("HH : mm : ss"));
        }, 200)

    },[])
    return (
        <>
        {console.log("render")}
            <h2 className={style.titreHeure}>Heure actuelle</h2>
            <p>{time}</p>
        </>

    )
}


export default Horloge;
