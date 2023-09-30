import './Criteria.component.css'
import {Link, useLocation} from 'react-router-dom'

const Criteria = () => {

    const location = useLocation()
    const criteriaData = location.state

    const getData = (item: any) => {

        let keyList = Object.keys(item.variable)
        let result: any = []
        let index = 0;
        for (let i = 0; i < keyList.length; i++) {
            let stringBeforeVariable = item.text.substring(index, item.text.indexOf(keyList[i]))

            result.push(stringBeforeVariable)

            index = item.text.indexOf(keyList[i]) + keyList[i].length

            if (item.variable[keyList[i]].type === 'value') {
                result.push(<Link key={i} to={'/variable'}
                                  state={item.variable[keyList[i]].values}>({item.variable[keyList[i]].values[0]})</Link>)
            } else {
                result.push((<Link key={i} to={'/indicator'}
                                   state={item.variable[keyList[i]]}>({item.variable[keyList[i]].default_value})</Link>))
            }
        }

        result.push(item.text.substring(index))
        return (<div>{result}</div>)
    }

    return (<div id={'criteria'} className={'main-section'}>
            <div className={'main-box'}>
                <div className={'header-section'}>
                    <div className={`maintext`}>
                        {criteriaData?.name}
                    </div>
                    <div className={`${criteriaData?.color} subtext`}>
                        {criteriaData?.tag}
                    </div>
                </div>

                {criteriaData.criteria.map((item: any, index: number) => {
                    return (<div key={index} className={'body-section'}>
                            {item.type === 'plain_text' ? <div>{item.text}</div> : undefined}

                            {item.type === 'variable' ? getData(item) : undefined}
                            {index !== criteriaData.criteria.length - 1 ? <div className={'and'}>and</div> : undefined}
                        </div>)
                })}
            </div>
        </div>)

}

export default Criteria
