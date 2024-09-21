import React from 'react'
import './Home.scss'
import Banner from '../../components/Banner/Banner'
import Section1 from '../../components/Home/Section1/Section1'

function Home() {
    return (
        <div className="Home">
            <Banner />
            <Section1 />
        </div>
    )
}

export default Home
