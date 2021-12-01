import React from 'react'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import TopBar from './TopBar'

export default function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <TopBar/>
                <ContentRowTop/>
            </div>
            <Footer/>
        </div>
    )
}
