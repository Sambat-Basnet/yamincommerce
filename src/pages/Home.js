import React from 'react'
import Nav from '../components/Nav'
import {BsArrowRight} from 'react-icons/bs'

import styles from './home.module.css'

const Home = () => {
    return (
        <>
        <Nav transparent/>
        <div className={styles.mainHome}>
            <div className={styles.viewSec}>
            <a href="/products"><BsArrowRight className={styles.arrIcon} /></a> 
            </div>
        </div>
        </>
    )
}

export default Home
