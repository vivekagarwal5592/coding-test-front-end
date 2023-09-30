import './Indicator.component.css'
import {useLocation} from 'react-router-dom'
import {useState} from "react";

const Indicator = () => {

    const location = useLocation();
    const data = location.state;
    const [fieldValue, setFieldValue] = useState(data?.default_value);

    return (
        <div id={'indicator'} className={'main-section'}>
            <div className={'main-box'}>
                <div className={'header-section'}>
                    <div className={`maintext`}>
                        {data?.study_type}
                    </div>
                </div>

                <div className={'set-parameters'}>
                    Set Parameters
                </div>

                <div className={'indicator-variable-section'}>
                    <div className={'flex-4'}>
                        {data?.parameter_name}
                    </div>
                    <div className={'flex-1'}>
                        <input type={'text'} value={fieldValue} onChange={(e)=> setFieldValue(e.target.value)}></input>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Indicator
