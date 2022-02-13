import { useEffect, useState } from 'react';
import 'moment/locale/fr';
import moment from 'moment';
import style from "./dateDuJour.module.css";



const DateDuJour = () => {

    let currentDate = moment().format("dddd D MMMM YYYY");

    /* Faire en sorte que la date change chaque jour 
    const tomorrow =  new Date(today.getFullYear(), today.getMonth(), today.getDate() +1);
 */
    const [date, setDate] = useState(currentDate);

    return (
        <>
            <h2 className={style.titreDate}>Date du jour</h2>
            <p>{date}</p>
        </>

    )
}





export default DateDuJour;
