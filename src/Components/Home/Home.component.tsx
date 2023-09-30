import {useEffect, useState} from 'react'
import './Home.component.css'
import {getStockData} from "../../Services/StockMarket.Service";
import {Link} from "react-router-dom";

const Home = () => {

    const [stockMarketData, setStockMarketData] = useState([]);

    useEffect(() => {
        getStockData().then((result) => {
            if (result?.data?.length > 0) {
                setStockMarketData(result.data)
            }
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (<div id={'home'} className={'main-section'}>
        <div className={'main-box'}>
            {stockMarketData.map((item: any, index: number) => {
                return (
                    <div>
                    <Link key={index} to='/criteria' state={item}>
                        <div className={'parent'}>
                            <div className={`maintext`}>
                                {item.name}
                            </div>
                            <div className={`${item.color} subtext`}>
                                {item.tag}
                            </div>
                        </div>
                    </Link>
                    </div>

                )
            })}

        </div>

    </div>)

}

export default Home
