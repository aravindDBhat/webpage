import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomePage = () => {
  return (
    <div className="d-block pb-2 pt-3 ps-4">
      {/* Hero Section */}
      <section className="hero text-center mt-5 mb-5" id="Home">
        <h1 className="mt-5">Unlock Top Talent in the Tech Industry!</h1>
        <p className="mt-3 mb-5">
          Your One-Stop Solution for Hiring Software Engineers, Product
          Managers, and Data Scientists.
        </p>
        <img
          className="shadow"
          style={{ borderRadius: "35px" }}
          src={require("../logo.png")}
          alt="Service Icon"
        />
        <button className="shadow ms-5 btn btn-primary btn-lg ps-5 pe-5 button">
          Sign Up
        </button>
      </section>

      {/* Why Choose Us */}
      <section
        style={{ backgroundColor: "#fff9f9" }}
        className=" why-choose-us mt-5 pt-4 mb-5"
      >
        <h2 className=" text-center mb-5 mt- 5 ms-5">Why Choose Us</h2>
        <ul>
          <li className="ms-5 mb-5 d-flex">
            <div className="col-6 w-50 text-side">
              <h5 className="text-center  mt-5 mb-4">Vast Talent Pool</h5>{" "}
              <p className="text-center">
                Significant number of qualified and skilled individuals who are
                potential candidates for job openings, projects, or other
                opportunities.
              </p>
            </div>
            <div className="col-6 text-center">
              {" "}
              <img
                className=" shadow "
                style={{ borderRadius: "35px" }}
                src={require("../talent.jpg")}
                width="150px"
                height="150px"
                alt="Service Icon"
              />
            </div>
          </li>

          <li className="pt-5 ms-5 mb-5 mt-5 d-flex">
            <div className="col-6 text-center">
              {" "}
              <img
                className=" shadow ms-5"
                style={{ borderRadius: "35px" }}
                src={require("../recruiter.jpg")}
                width="150px"
                height="150px"
                alt="Service Icon"
              />
            </div>
            <div className="col-6 w-50 text-side">
              <h5 className="text-center  mt-5 mb-4">Expert Recruiters</h5>{" "}
              <p className="text-center">
                Individual or professional who possesses exceptional skills,
                knowledge, and experience in the field of talent acquisition and
                recruitment.
              </p>
            </div>
          </li>
          <li className="ms-5 pt-5 mt-5 mb-5 d-flex">
            <div className="col-6 w-50 text-side">
              <h5 className="text-center  mt-5 mb-4">
                Fast and Efficient Hiring Process
              </h5>{" "}
              <p className="text-center">
                Streamlined and effective approach to recruiting and selecting
                candidates for job positions within an organization.
              </p>
            </div>
            <div className="ms-0 col-6 text-center">
              {" "}
              <img
                className=" shadow ms-0"
                style={{ borderRadius: "35px" }}
                src={require("../hiring.png")}
                width="150px"
                height="150px"
                alt="Service Icon"
              />
            </div>
          </li>

          <li className="ms-5 pt-5 pb-5 mb-5 mt-5 d-flex">
            <div className="col-6 text-center">
              {" "}
              <img
                className=" shadow ms-5"
                style={{ borderRadius: "35px" }}
                src={require("../global.jpg")}
                width="150px"
                height="150px"
                alt="Service Icon"
              />
            </div>
            <div className="col-6 w-50 text-side">
              <h5 className="text-center  mt-5 mb-4">Global Reach</h5>{" "}
              <p className="text-center">
                Ability of a company, organization, or brand to extend its
                presence, influence, and operations to a worldwide or
                international scale.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Job Listings and Categories */}
      <section className="jobs" id="jobs">
        <h2 className="text-center">Job Listings</h2>
        <div className=" mt-5 category">
          <Row className=" mb-5 ms-5 me-5 ps-5 pe-5 d-flex">
            <Col xs>
              <Card className="text-center" style={{ width: "100%" }}>
                <Card.Header style={{ backgroundColor: "white" }}>
                  <img
                    src={require("../python.png")}
                    style={{ width: "100px", height: "100px" }}
                    alt="img"
                  ></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mt-3">Python Developer</Card.Title>
                  <Button className="mt-3 ps-5 pe-5" variant="primary">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 12 }}>
              <Card className="text-center" style={{ width: "100%" }}>
                <Card.Header style={{ backgroundColor: "white" }}>
                  <img
                    src={require("../java1.png")}
                    style={{ width: "100px", height: "100px" }}
                    alt="img"
                  ></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mt-3">Java Developer</Card.Title>
                  <Button className="mt-3 ps-5 pe-5" variant="primary">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 1 }}>
              {" "}
              <Card className="text-center" style={{ width: "100%" }}>
                <Card.Header style={{ backgroundColor: "white" }}>
                  <img
                    src={require("../react.png")}
                    style={{ width: "100px", height: "100px" }}
                    alt="img"
                  ></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mt-3">React Developer</Card.Title>
                  <Button className="mt-3 ps-5 pe-5" variant="primary">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 1 }}>
              {" "}
              <Card className="text-center" style={{ width: "100%" }}>
                <Card.Header style={{ backgroundColor: "white" }}>
                  <img
                    src={require("../ruby.avif")}
                    style={{ width: "100px", height: "100px" }}
                    alt="img"
                  ></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mt-3">Ruby Developer</Card.Title>
                  <Button className="mt-3 ps-5 pe-5" variant="primary">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className=" mb-5 ms-5 me-5 ps-5 pe-5 d-flex">
            <Col xs={{ order: 4 }}>
              {" "}
              <Card className="text-center" style={{ width: "100%" }}>
                <Card.Header style={{ backgroundColor: "white" }}>
                  <img
                    src={require("../node.png")}
                    style={{ width: "100px", height: "100px" }}
                    alt="img"
                  ></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mt-3">NodeJs Developer</Card.Title>
                  <Button className="mt-3 ps-5 pe-5" variant="primary">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ order: 4 }}>
              {" "}
              <Card className="text-center" style={{ width: "100%" }}>
                <Card.Header style={{ backgroundColor: "white" }}>
                  <img
                    src={require("../ruby.avif")}
                    style={{ width: "100px", height: "100px" }}
                    alt="img"
                  ></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mt-3">Ruby Developer</Card.Title>
                  <Button className="mt-3 ps-5 pe-5" variant="primary">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={{ order: 1 }}>
              <Card className="text-center" style={{ width: "100%" }}>
                <Card.Header style={{ backgroundColor: "white" }}>
                  <img
                    src={require("../react.png")}
                    style={{ width: "100px", height: "100px" }}
                    alt="img"
                  ></img>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="mt-3">React Developer</Card.Title>
                  <Button className="mt-3 ps-5 pe-5" variant="primary">
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Testimonials */}

      {/* About Us */}
      <section className="about text-center mb-5" id="about">
        <h2>About Us</h2>
        <p>
          Write a brief background of your recruitment startup, its mission, and
          vision. Highlight your team's expertise and dedication to finding the
          best talent.
        </p>
      </section>
      <div className="text-center ">
        {" "}
        {/* Contact Us */}
        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          {/* Add contact information and a contact form */}
        </section>
        {/* Footer */}
        <footer>
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
          {/* Additional links and social media icons */}
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
