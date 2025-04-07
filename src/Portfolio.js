import React, { useState, useEffect } from "react";
import {
  Segment,
  Sidebar,
  Menu,
  Header,
  Icon,
  List,
  Divider,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Internship from "./components/Internship";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import image from "./images/img-3.jpeg";
import Contact from "./components/Contact";

const Portfolio = () => {
  const [activePage, setActivePage] = useState("about");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div style={styles.container}>
        {isMobile && (
          <div
            inverted
            attached="top"
            style={{
              ...styles.mobileNav,
              border: "none",
              display: "flex",
              alignItems: "center",
              backgroundColor: "black",
              fontSize: "24px",
            }}
          >
            <Menu.Item
              onClick={() => setSidebarVisible(!sidebarVisible)}
              style={{
                display: "flex",
                alignItems: "center",
                border: "none",
                color: "#ffffff",
                height: "40px",
              }}
            >
              <Icon
                name="bars"
                style={{ cursor: "pointer", fontSize: "1.5rem" }}
              />
              <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Balaji Pichchika
              </span>
            </Menu.Item>
          </div>
        )}

        {!isMobile && (
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            vertical
            visible
            style={styles.sidebar}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <img
                src={image}
                alt="animation"
                style={{
                  borderRadius: "50%",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
            </div>
            <Header as="h2" textAlign="center" style={styles.header}>
              Balaji Pichchika
            </Header>
            <Menu.Item
              name="about"
              active={activePage === "about"}
              onClick={() => setActivePage("about")}
            >
              <span
                style={{
                  color: activePage === "about" ? "orange" : "#ffffff",
                }}
              >
                About
              </span>
            </Menu.Item>
            <Menu.Item
              name="education"
              active={activePage === "education"}
              onClick={() => setActivePage("education")}
            >
              <span
                style={{
                  color: activePage === "education" ? "orange" : "#ffffff",
                }}
              >
                Education
              </span>
            </Menu.Item>
            <Menu.Item
              name="internship"
              active={activePage === "internship"}
              onClick={() => setActivePage("internship")}
            >
              <span
                style={{
                  color: activePage === "internship" ? "orange" : "#ffffff",
                }}
              >
                Internship
              </span>
            </Menu.Item>
            <Menu.Item
              name="projects"
              active={activePage === "projects"}
              onClick={() => setActivePage("projects")}
            >
              <span
                style={{
                  color: activePage === "projects" ? "orange" : "#ffffff",
                }}
              >
                Projects
              </span>
            </Menu.Item>
            <Menu.Item
              name="skills"
              active={activePage === "skills"}
              onClick={() => setActivePage("skills")}
            >
              <span
                style={{
                  color: activePage === "skills" ? "orange" : "#ffffff",
                }}
              >
                Skills
              </span>
            </Menu.Item>
            {/* <Menu.Item
            name="contact"
            active={activePage === "contact"}
            onClick={() => setActivePage("contact")}
          >
            <span
              style={{
                color: activePage === "contact" ? "orange" : "#ffffff",
              }}
            >
              Contact
            </span>
          </Menu.Item> */}
          </Sidebar>
        )}

        {isMobile && (
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            vertical
            visible={sidebarVisible}
            onHide={() => setSidebarVisible(false)}
            style={styles.mobileSidebar}
          >
            <Menu.Item
              name="about"
              active={activePage === "about"}
              onClick={() => {
                setActivePage("about");
                setSidebarVisible(false);
              }}
            >
              <span
                style={{
                  color: activePage === "about" ? "orange" : "#ffffff",
                }}
              >
                About
              </span>
            </Menu.Item>
            <Menu.Item
              name="education"
              active={activePage === "education"}
              onClick={() => {
                setActivePage("education");
                setSidebarVisible(false);
              }}
            >
              <span
                style={{
                  color: activePage === "education" ? "orange" : "#ffffff",
                }}
              >
                Education
              </span>
            </Menu.Item>
            <Menu.Item
              name="internship"
              active={activePage === "internship"}
              onClick={() => {
                setActivePage("internship");
                setSidebarVisible(false);
              }}
            >
              <span
                style={{
                  color: activePage === "internship" ? "orange" : "#ffffff",
                }}
              >
                Internship
              </span>
            </Menu.Item>
            <Menu.Item
              name="projects"
              active={activePage === "projects"}
              onClick={() => {
                setActivePage("projects");
                setSidebarVisible(false);
              }}
            >
              <span
                style={{
                  color: activePage === "projects" ? "orange" : "#ffffff",
                }}
              >
                Projects
              </span>
            </Menu.Item>
            <Menu.Item
              name="skills"
              active={activePage === "skills"}
              onClick={() => {
                setActivePage("skills");
                setSidebarVisible(false);
              }}
            >
              <span
                style={{
                  color: activePage === "skills" ? "orange" : "#ffffff",
                }}
              >
                Skills
              </span>
            </Menu.Item>
            {/* <Menu.Item
            name="contact"
            active={activePage === "contact"}
            onClick={() => setActivePage("contact")}
          >
            <span
              style={{
                color: activePage === "contact" ? "orange" : "#ffffff",
              }}
            >
              Contact
            </span>
          </Menu.Item> */}
          </Sidebar>
        )}

        {/* Main Content */}
        <Sidebar.Pusher
          style={isMobile ? styles.mobileContent : styles.content}
        >
          {activePage === "about" && (
            <Segment raised style={styles.segment}>
              <About />
            </Segment>
          )}
          {activePage === "education" && (
            <Segment raised style={styles.segment}>
              <Education />
            </Segment>
          )}
          {activePage === "internship" && (
            <Segment raised style={styles.segment}>
              <Internship />
            </Segment>
          )}
          {activePage === "projects" && (
            <Segment raised style={styles.segment}>
              <Projects />
            </Segment>
          )}
          {activePage === "skills" && (
            <Segment raised style={styles.segment}>
              <Skills />
            </Segment>
          )}
          {activePage === "contact" && (
            <Segment raised style={styles.segment}>
              <Contact />
            </Segment>
          )}
        </Sidebar.Pusher>
      </div>
      {/* Footer - Quick Access */}
      {isMobile && (
        <Segment inverted vertical style={styles.footer}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          
          <div style={{ minWidth: "100px", margin: "1rem" }}>
            <Header inverted as="h4" content="Quick Access" />
            <List link inverted>
              <List.Item as="a" onClick={() => setActivePage("about")}>About</List.Item>
              <List.Item as="a" onClick={() => setActivePage("education")}>Education</List.Item>
              <List.Item as="a" onClick={() => setActivePage("internship")}>Internship</List.Item>
              <List.Item as="a" onClick={() => setActivePage("projects")}>Projects</List.Item>
              <List.Item as="a" onClick={() => setActivePage("skills")}>Skills</List.Item>
            </List>
          </div>
      
          <div style={{ minWidth: "100px", margin: "1rem" }}>
            <Header inverted as="h4" content="Contact" />
            <List link inverted>
              <List.Item as="a" href="mailto:balajipicchika02@gmail.com">balajipicchika02@gmail.com</List.Item>
              <List.Item as="a" href="https://www.linkedin.com/in/balaji-pichchika-78110b264/">LinkedIn</List.Item>
              <List.Item as="a" href="https://github.com/Balajipicchika">GitHub</List.Item>
            </List>
          </div>
      
          <div style={{ minWidth: "100px", margin: "1rem" }}>
            <Header inverted as="h4" content="More" />
            <List link inverted>
              <List.Item as="a" href="#resume">Resume</List.Item>
              <List.Item as="a" href="#certifications">Certifications</List.Item>
            </List>
          </div>
          
        </div>
        <Divider/>
        <div style={{ textAlign: "center", marginTop: "1rem", color: "#fff" }}><p>© {new Date().getFullYear()} All rights reserved.</p></div>
      </Segment>
      
      )}
    </>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e1e1e, #333)",
    margin: 0,
  },
  sidebar: {
    width: "20%",
    height: "100vh",
    paddingTop: "2rem",
    backdropFilter: "blur(10px)",
    margin: "20px",
  },
  mobileSidebar: {
    width: "50%",
    height: "100%",
    position: "absolute",
    top: "50px",
    left: 0,
  },
  header: {
    color: "#ffffff",
  },
  content: {
    marginLeft: "20%",
    padding: "2rem",
    minHeight: "100vh",
  },
  mobileContent: {
    padding: "2rem",
    minHeight: "100vh",
    color: "#ffffff",
  },
  segment: {
    background: "rgba(255, 255, 255, 0.1)",
    color: "#eeeeee",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(15px)",
    width: "90%",
    margin: "auto",
  },
  mobileNav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
  },
  mobileWrapper: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  section: {
    padding: "1rem 0",
    borderBottom: "1px solid #eee",
  },

  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#00adb5",
    marginBottom: "0.5rem",
  },
  footer: {
    bottom: 0,
    width: "100%",
    background: "#1b1c1d",
    zIndex: 1000,
    margin: 'auto',
    padding: "20px"
  },
};

export default Portfolio;
