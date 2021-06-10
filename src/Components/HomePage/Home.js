import React from 'react'
import Hero from '../Hero'
import Fetch from '../Products/fetch'
import Feature from '../Features'
import Fetch2 from '../Products/fetch2'
import Footer from '../Footer'


function Home() {
    return (
        <div>
           <Hero />
           <Fetch />
           <Feature />
           <Fetch2 />
           <Footer />
        </div>
    )
}

export default Home