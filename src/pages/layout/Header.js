import {
    Button,
    Divider
} from 'antd';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './layout.less';
import tel from '../../static/images/tel.jpg';
import logo from '../../static/images/hd_logo.png';

const Header = (props) => {

    useEffect(() => {
    }, [])

    const handleChange = () => {
        // const navlinks = document.querySelector(".nab-bar").getElementsByTagName("a");
        // console.log(navlinks)
        // for (let i = 0; i < navlinks.length; i++) {
        //     navlinks[i].className = '';
        //     // if (navlinks[i].className === 'active') {
        //     //     // console.log(navlinks[i])
        //     //     navlinks[i].className = 'current';
        //     // }
        // }
    }


    return (
        <div>
            <div className='header'>
                <div className='head'>
                    <div className='service-hotline'>
                        <img className='tel' src={tel} />
                        服务热线：010-82736610
                    </div>
                    <div className='button'>
                        <Button type="primary" className='btn-login'>
                            <NavLink to="/login">登录</NavLink>
                        </Button>
                        <Button type="primary" className='btn-register'>
                            <NavLink to="/login">注册</NavLink>
                        </Button>
                    </div>
                </div>
                <div className='navigation'>
                    <img className='logo' src={logo} />
                    <div className='nab-bar'>
                        <NavLink to="/home/frontPage" id="color-black">首页</NavLink>
                        <NavLink to="/home/findHospital" id="color-black">找医院</NavLink>
                        <NavLink to="/home/drugPass" id="color-black">药品通</NavLink>
                        <NavLink to="/home/tubeTrain" id="color-black">管培</NavLink>
                        <NavLink to="/home/meeting" id="color-black">会议</NavLink>
                        <NavLink to="/home/about" id="color-black">关于我们</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;