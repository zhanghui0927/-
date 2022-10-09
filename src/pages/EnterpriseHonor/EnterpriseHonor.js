/**
 * 企业荣誉
 */
 import React from 'react';

 import './enterpriseHonor.less';
 import enterprise from '../../static/images/enterpriseHonor/enterprise.jpg';

 const EnterpriseHonor = () => {

    return (
        <div className='enterpriseHonor'>
             <img src={enterprise} />
        </div>
    )
 }

 export default EnterpriseHonor;