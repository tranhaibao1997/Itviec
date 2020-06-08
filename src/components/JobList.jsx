import React from "react";
import Job from "./Job";
import { useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

function JobList(props) {
  let [jobs, setJobs] = React.useState(null);
  let [originalJobs, setoriginalJobs] = React.useState(null);
  let [searchText, setSearchText] = React.useState(null);
  React.useEffect(() => {
    getData();
    handleSearch();
  }, [originalJobs]);

  let history = useHistory();
  let query = useQuery();
  const QUERYSTR_PREFIX = "q";

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  function getSearchString(e) {
    setSearchText(e.target.value);
  }

  const handleSearch = (e) => {
    let filteredJobs = originalJobs;
    if (e) {
      e.preventDefault();
      history.push(
        `/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(searchText)}`
      );
    }
    if (searchText) {
      filteredJobs = originalJobs.filter((job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setJobs(filteredJobs);
  };

  const getData = async () => {
    let url = `https://my-json-server.typicode.com/tranhaibao1997/Itviec/jobs`;
    let data = await fetch(url);
    let result = await data.json();
    setJobs(result);
    setoriginalJobs(result);
  };

  return (
    <>
      <div className="search-header">
        <Container>
          <div className="search-form">
            <Row>
              <Col md={12}>
                <Form inline>
                  <FormControl
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => getSearchString(e)}
                  />
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <div className="job-list">
          {jobs && jobs.map((item) => <Job job={item} key={item.id} />)}
        </div>
      </Container>
    </>
  );
}

export default JobList;
