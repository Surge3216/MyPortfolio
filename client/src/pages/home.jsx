import React from 'react'
import AboutMe from '../componets/AboutMe/AboutMe'
import Body from '../componets/cards/Cards'
import Hero from '../componets/hero/Hero'

export default function home() {
    return (
        <div>
            <Hero/>
            <div className="container">
                <AboutMe/>
                <Body/>
            </div>
        </div>
    )
}
