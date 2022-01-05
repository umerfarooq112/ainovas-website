import React from 'react'
import Layout from '../../Layout/index';
import Hero from '../../components/Homepage/Hero';

import TabSection from '../../components/Homepage/TabSection';
import InfoSection from '../../components/Homepage/InfoSection';
import OtherInformation from '../../components/Homepage/OtherInformation';
import OurServices from '../../components/common/OurServices';


function HomePage() {
    return (
        <div className='homepage--wrapper'>
            <Layout currentPage={0}> 
                <Hero />
                <TabSection />
                <InfoSection />
                <OtherInformation />
                <OurServices />
            </Layout>
        </div>
    )
}

export default HomePage
