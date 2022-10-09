import React from 'react';
import { Button } from 'antd';
import './index.less';

/**
 * 更多按钮
 */
export const Morebtn = (props) => {
    const { btnName = '更多' } = props;
    return (
        <div className='morebtn'>
            <Button className='btn'>
                {btnName}
            </Button>
        </div>
    )
}