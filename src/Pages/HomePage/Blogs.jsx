import React from 'react'
import BlogSection from '../../components/Homepage/BlogSection';
import Layout from '../../Layout/index';

function Blogs() {
    return (
        <Layout currentPage={0}> 
            <BlogSection />
        </Layout>
    )
}

export default Blogs
