import './Variable.component.css'
import {useLocation} from 'react-router-dom'

const Variable = () => {

    const location = useLocation()
    const  data  = location.state

    return (
        <div id={'variable'} className={'main-section'}>
            <div className={'main-box'}>
                <div className={'header-section'} style={{padding: '10px'}}>
                    <div className={`maintext`}>
                        {data?.name}
                    </div>
                    <div className={`${data?.color} subtext`}>
                        {data?.tag}
                    </div>
                </div>

                {
                    data.sort((a: number, b: number) => Math.abs(a) - Math.abs(b)).map((item: any, index: any)=> {
                        return (
                            <div key={index} className={'body-section'}>
                                {item}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )

}

export default Variable
