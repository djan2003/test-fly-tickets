import React, {useState} from 'react';
import './App.css';
import * as data from "./flights.json"
import {FlyCard} from "./Components/FlyCard/FlyCard";
import {Nav} from "./Components/NavSort/Nav";

function App() {
    let result1 = JSON.stringify(data)
    let result2 = JSON.parse(result1)
    let result3 = result2.default.result.flights
    let finishData = [];
    for (let i = 0; i < result3.length; i++) {
        finishData[i] = [
            result3[i].flight.legs[0].segments[0].departureCity.caption,// - 0 город вылета
            result3[i].flight.carrier.caption, // - 1 авиакомпания
            result3[i].flight.price.totalFeeAndTaxes.amount, // -2 цена
            result3[i].flight.legs[0].segments[0].departureAirport.caption, // - 3 Какой аэропорт
            result3[i].flight.legs[0].segments[0].departureAirport.uid,// - 4 Абривиатура Аэропорта
            result3[i].flight.legs[0].segments[result3[i].flight.legs[0].segments.length - 1].arrivalAirport.caption,// - 5 Аэропорт прилета
            result3[i].flight.legs[0].segments[result3[i].flight.legs[0].segments.length - 1].arrivalDate,// - 6 дата прилета
            result3[i].flight.legs[0].duration,// - 7 время в полете в минутах
            result3[i].flight.legs[0].segments[0].departureDate, // - 8 время вылета
            result3[i].flight.legs[0].segments.length,// - 9 есть или нет пересадка, если длина массива 1 - пересадки нет, если 2 есть пересадка
            result3[i].flight.carrier.uid, // - 10 Абривиатура авиакомпании
            result3[i].flight.legs[1].segments[0].departureAirport.caption,// 11 аэропорт вылета
            result3[i].flight.legs[1].segments[0].departureAirport.uid,// 12 абрив аэтопорта
            result3[i].flight.legs[1].segments[result3[i].flight.legs[1].segments.length - 1].arrivalAirport.caption,//13 аэропорт прилета
            result3[i].flight.legs[1].segments[0].departureDate,//14 дата вылета
            result3[i].flight.legs[1].duration,//15 время полета в минутах
            result3[i].flight.legs[1].segments[result3[i].flight.legs[1].segments.length - 1].arrivalDate,//16 дата прилета
            result3[i].flight.legs[1].segments.length,// 17 есть или нет пересадки
            result3[i].flight.legs[0].duration + result3[i].flight.legs[1].duration,// 18 время в пути туда-обратно
            result3[i].flight.legs[0].segments[result3[i].flight.legs[0].segments.length - 1].arrivalAirport.uid,//19 абривеатура аэропорта прибытия туда
            result3[i].flight.legs[1].segments[result3[i].flight.legs[1].segments.length - 1].arrivalAirport.uid,//20 абривеатура аэропорта прибытия обратно
        ]
    }
    let [finishData1, setFinishData1] = useState(finishData)
    const noTransit = () => {
        let checkData = finishData.filter(tic => tic[9] === 1)
        setFinishData1(checkData.filter(tic => tic[17] === 1))
    }
    const withTransit = () => {
        setFinishData1(finishData)
    }
    const sortRicePrice = () => {
        let checkData = [
            ...finishData.sort(function (a, b) {
                return a[2] - b[2]
            })
        ]
        setFinishData1(checkData)
    }
    const sortDecreasePrice = () => {
        let dataForSort = [...finishData]
        let checkData = [
            ...dataForSort.sort(function (a, b) {
                return b[2] - a[2]
            })
        ]
        setFinishData1(checkData)
    }
    const sortRiceTime = () => {
        let checkData = [
            ...finishData.sort(function (a, b) {
                return a[18] - b[18]
            })
        ]
        setFinishData1(checkData)
    }
    const sortPriceClient = (min, max) => {
        return () => {
            let checkData = [
                ...finishData.sort(function (a, b) {
                    return a[2] - b[2]
                })
            ]
            setFinishData1(checkData.filter(tic => tic[2] >= min).filter(tic => tic[2] <= max))
        }
    }
    const sortCompanyName = (name) => {
        return () => {

            setFinishData1(finishData1.filter(tic => tic[1] == name))
        }
    }
    let finishData2 = [...finishData1]
    let companyAndMinPrice = [...finishData2.sort(function (a, b) {
        return a[2] - b[2]
    })]
    let companyAndMinPrice1 = []
    let company4 = []
    companyAndMinPrice.map((i) => {
        if (companyAndMinPrice1.includes(i[1])) {

        } else {
            companyAndMinPrice1.push(i[1])
            company4.push(i)
        }
    })
    let [countTickets, setCountTickets] = useState(2)
    const showMoreTickets = () => {
        setCountTickets(countTickets += 2)
    }
    return (
        <div className={'main'}>
            <div className={'nav'}>
                <Nav
                    data={finishData1}
                    companyAndPrice={company4}
                    sortRicePrice={sortRicePrice}
                    sortDecreasePrice={sortDecreasePrice}
                    sortRiceTime={sortRiceTime}
                    withTransit={withTransit}
                    noTransit={noTransit}
                    sortPriceClient={sortPriceClient}
                    sortCompanyName={sortCompanyName}

                />
            </div>
            <div className={'tickets'}>
                {finishData1.slice(0, countTickets)
                    .map((inf) => {
                            return <FlyCard
                                departCity={inf[0]}
                                companyName={inf[1]}
                                price={inf[2]}
                                airPortDepart={inf[3]}
                                abbAir={inf[4]}
                                airPortArriv={inf[5]}
                                timeDep={inf[8]}
                                flyTime={inf[7]}
                                arrTime={inf[6]}
                                isTransit={inf[9]}
                                abbAirCom={inf[10]}
                                airPortDepart2={inf[11]}
                                abbAirDep2={inf[12]}
                                airPortArriv2={inf[13]}
                                departDate2={inf[14]}
                                timeFly2={inf[15]}
                                dateArriv2={inf[16]}
                                isTransit2={inf[17]}
                                abbAirArrive={inf[19]}
                                abbAirArrive2={inf[20]}
                            />
                        }
                    )}
                <button className={'show-more'} onClick={showMoreTickets}> Показать еще</button>
            </div>
        </div>
    );
}
export default App;
