import React from 'react';
import { Container } from 'react-bootstrap'
import Job from './Job'

function JobList(props) {
    let [jobs, setJobs] = React.useState(null
    )
    React.useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        let url = `http://localhost:3001/jobs`;
        let data = await fetch(url);
        let result = await data.json();
        setJobs(result);
    };
    return (
        
            <Container>
                <div className="job-list">
                {jobs && jobs.map(item => <Job job={item} key={item.id} />)}
                </div>
            </Container>
       


    );
}

export default JobList;