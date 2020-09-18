import React from 'react'

// 引入组件
import TopNav from './../../components/TopNav'
import Footer from './../../components/Footer'
import HomeNav from './components/HomeNav'
import HomeSowing from './components/HomeSowing'
import HomeCard from './components/HomeCard'
import HomeResource from './components/HomeResource'
import HomeJob from './components/HomeJob'
import HomeActivities from './components/HomeActivities'
import HomeLive from './components/HomeLive'

class Home extends React.Component{
    render() {
        return (
           <>
             <TopNav />
             <HomeNav />
             <HomeSowing />
             <>
               <HomeCard />
               <HomeResource />
               <HomeJob />
               <HomeActivities />
               <HomeLive />
             </>
             <Footer />
           </>
        )
    }
}

export default Home;
