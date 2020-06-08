import React from 'react';
import Banner from './Banner'
import JobList from './JobList'

function Landing(props) {
    return (
        <div>
            <Banner></Banner>
            <JobList></JobList>
        </div>
    );
}

export default Landing;