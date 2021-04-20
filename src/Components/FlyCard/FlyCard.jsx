import React from 'react';
import {OneFly} from "./OneFly/FlyCard";
import './style.css'

export const FlyCard = (props) => {
    return (
        <div className={'FlyCardContainer'}>
           <OneFly
               companyName={props.companyName}
               price={props.price}
               departCity={props.departCity}
               airPortDepart={props.airPortDepart}
               abbAir={props.abbAir}
               airPortArriv={props.airPortArriv}
               timeDep={props.timeDep}
               flyTime={props.flyTime}
               arrTime={props.arrTime}
               isTransit={props.isTransit}
               abbAirCom={props.abbAirCom}
               abbAirArive={props.abbAirArrive}
           />
           <OneFly
               companyName={props.companyName}
               departCity={"Лондон"}
               airPortDepart={props.airPortDepart2}
               abbAir={props.abbAirDep2}
               airPortArriv={props.airPortArriv2}
               timeDep={props.departDate2}
               flyTime={props.timeFly2}
               arrTime={props.dateArriv2}
               isTransit={props.isTransit2}
               abbAirCom={props.abbAirCom}
               abbAirArive={props.abbAirArrive2}

           />
           <div className={'btn'}>
                   <button >Выбрать</button>
           </div>


        </div>
    )
}