import React, {useState} from 'react';
import './style.css'

export const Nav = (props) => {
    let [minPrice, setMinPrice] = useState(0)
    let [maxPrice, setMaxPrice] = useState(100000000)
    const onChangeHadlerMin = (e) => {
        setMinPrice(e.currentTarget.value)
    }
    const onChangeHadlerMax = (e) => {
        setMaxPrice(e.currentTarget.value)
    }
    return (
        <div className={'NavContainer'}>
            <div className={'SortContainer'}>
                <div>Сортировать</div>
                <label>
                    <input onChange={props.sortRicePrice} type="radio" name="mycheck" value="1"/> по возрастанию
                    цены<br/>
                </label>
                <label>
                    <input onChange={props.sortDecreasePrice} type="radio" name="mycheck" value="2"/> по убыванию
                    цены<br/>
                </label>
                <label>
                    <input onChange={props.sortRiceTime} type="radio" name="mycheck" value="3"/> по времени в пути
                </label>
            </div>
            <div className={'SortContainer'}>
                <div>Фильтровать</div>
                <div className={'checkBox'}>
                    <label>
                        <input onClick={props.withTransit} type={'checkBox'}/> - 1 пересадка
                    </label>
                    <label>
                        <input onClick={props.noTransit} type={'checkBox'}/> - без пересадок
                    </label>
                </div>
            </div>
            <div className={'PriceContainer'}>
                <div>Цена</div>
                <input placeholder={'от'} onChange={onChangeHadlerMin} className={'price'} type={'text'}/>
                <input  placeholder={'до'} name={"до"} onChange={onChangeHadlerMax} className={'price'} type={'text'}/>
                <button onClick={props.sortPriceClient(minPrice, maxPrice)} className={'price'}>показать</button>
            </div>
            <div className={'airCompany'}>
                <div>Авиакомпания</div>
                {props.companyAndPrice.map((i) => {
                    return (
                        <div>
                            <input onChange={props.sortCompanyName(i[1])} type={'checkBox'}/>
                            <span>{i[1]} от {parseInt(i[2])} р. </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}