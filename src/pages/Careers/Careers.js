/**
 * 招贤纳士
 */
import React from 'react';
import { Button } from 'antd';

import careerIndex from '../../static/images/careers/career-index.jpg';
import trick from '../../static/images/careers/trick.jpg';
import hire from '../../static/images/careers/hire.jpg';
import './careers.less';

const Careers = (props) => {

    const goSocial = () => {
        props.history.push('/home/careers/careerMatch');
    }
    const doJoinUs = () => {
        props.history.push('/home/careers/careerMatch/joinUs');
    }
    const goSchool = (type) => {
        props.history.push(`/home/careers/schoolRecruitment/${type}`);
    }

    return (
        <div className='careers'>
            <img className='careerIndex' src={careerIndex} />
            <div className='recruitment'>
                <div className='left'>
                    <img src={trick} />
                    <div className='social-recruitment'>
                        <h3>社会招聘</h3>
                        <div onClick={goSocial} style={{ margin: '1rem 0 0.5rem 0' }}>*职业匹配</div>
                        <div onClick={doJoinUs}>*加入我们</div>
                    </div>
                    <div className='detail'>
                        <Button type="primary" style={{ fontSize: '0.7rem' }} onClick={goSocial}>查看详情</Button>
                    </div>
                </div>
                <div className='right'>
                    <img src={hire} />
                    <div className='social-recruitment'>
                        <h3>校园招聘</h3>
                        <div onClick={() => goSchool('school')} style={{ margin: '1rem 0 0.5rem 0' }}>*校招职位</div>
                        <div onClick={() => goSchool('intern')}>*实习生职位</div>
                    </div>
                    <div className='detail'>
                        <Button type="primary" style={{ fontSize: '0.7rem' }} onClick={() => goSchool('school')}>查看详情</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;