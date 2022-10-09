import React, { useEffect, useState } from 'react';
import { BackTop } from 'antd';
import { withRouter } from 'react-router-dom'
import './layout.less';
import footer from '../../static/images/footer.jpg';
import logo from '../../static/images/logo.png';
import '../../../mock/footer.js';

import { ajaxAxios } from '../../../mock/index';

const Footer = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ajaxAxios('/getFooter').then(res => {
            setData(res.data)
        })
    }, [])

    let divStyle = {
        backgroundImage: 'url(' + footer + ')'
    }

    const go = (id) => {
        if (id === 1) {
            props.history.push('/home/careers');
        }
        if (id === 2) {
            props.history.push('/home/strategyCooperate');
        }
        if (id === 3) {
            props.history.push('/home/enterpriseHonor');
        }
        if (id === 4) {
            props.history.push('/home/companyProfile')
        }
        if (id === 5) {
            props.history.push('/home/feedback')
        }
    }

    return (
        <div className='footer' style={divStyle}>
            <div className='footer-left'>
                <div>
                    <div className='img-name'>
                        <img className='logo' src={logo} />
                        <div>
                            全球医疗
                            <div className='global-healthcare'>Global Healthcare</div>
                        </div>
                    </div>
                    <div className='tel'>客服电话：010-82736610</div>
                </div>
            </div>
            <div className='footer-right'>
                { data && data.map(item => {
                    return (
                        <div className='item' key={item.id} onClick={() => go(item.id)}>
                            {item.name}
                        </div>
                    )
                }) }
            </div>
            <BackTop />
        </div>
    )
}

export default withRouter(Footer);