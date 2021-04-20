import React from 'react';
import './style.css'

export const OneFly = (props) => {
    let hours = Math.floor(props.flyTime / 60);
    let minutes = Math.floor(props.flyTime) - (hours * 60);
    return (
        <div className={'MainContainer'}>
            {props.price
                ? <header className={'header'}>
                    <div>
                        {props.companyName}
                    </div>
                    <div className={'price-block'}>
                        <div className={'price'}>{parseInt(props.price)}</div>
                        <div>Стоимость для одного взрослого пассажира</div>
                    </div>
                </header>
                : <header className={'header'}>

                </header>
            }
            <div className={'CityContainer'}>
                <div>{props.departCity}/{props.airPortDepart}({props.abbAir})</div>
                <div>-></div>
                <div>{props.price ? <span>Лондон,</span> : <span>Москва,</span>}
                {props.airPortArriv}({props.abbAirArive})</div>
            </div>
            <div className={'TimeContainer'}>
                <div>
                    {props.timeDep}
                </div>
                <div>
                    {`${hours} Ч ${minutes} МИН`}
                </div>
                <div>
                    {props.arrTime}
                </div>

            </div>
            {props.isTransit > 1
                ? <div className={'transit'}>
                    <div>Пересадка 1</div>
                </div>

                : <div className={'transit'}>
                    <div>Прямой рейс</div>
                </div>

            }
            <div className={'AirlinesContainer'}>
                <div>Рейс выполняет:</div>
                <div>{props.abbAirCom} {props.companyName}</div>

            </div>
        </div>
    )
}