import React from 'react';

import './home.less';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Home = (props) => {
    const { children } = props;

    return (
        <div className='home'>
            <Header />
            <div style={{ height: 119 }}></div>
            { children }
            <Footer/>
        </div>
    )
}

export default Home;