// import React, { useState } from "react";
// import { Segment, Sidebar, Menu, Container, Header } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
// import Internship from "./components/Internship";
// import About from "./components/About";
// import Education from "./components/Education";
// import Projects from "./components/Projects";

// const Portfolio = () => {
//   const [activePage, setActivePage] = useState("about");

//   return (
//     <div as={Container} style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1e1e1e, #333)", margin: 0 }}>
//       {/* Sidebar Navigation */}
//       <Sidebar
//         as={Menu}
//         animation="overlay"
//         inverted
//         vertical
//         visible
//         style={{ width: "20%", height: "100vh", paddingTop: "2rem", backdropFilter: "blur(10px)" }}
//       >
//         <Header as="h2" textAlign="center" style={{ color: "#00adb5", marginBottom: "20px" }}>
//           Balaji Pichchika
//         </Header>
//         <Menu.Item name="about" active={activePage === "about"} onClick={() => setActivePage("about")}>
//           About
//         </Menu.Item>
//         <Menu.Item name="education" active={activePage === "education"} onClick={() => setActivePage("education")}>
//           Education
//         </Menu.Item>
//         <Menu.Item name="internship" active={activePage === "internship"} onClick={() => setActivePage("internship")}>
//           Internship
//         </Menu.Item>
//         <Menu.Item name="projects" active={activePage === "projects"} onClick={() => setActivePage("projects")}>
//           Projects
//         </Menu.Item>
//       </Sidebar>

//       {/* Main Content */}
//       <Sidebar.Pusher style={{ marginLeft: "20%", padding: "2rem", minHeight: "100vh" }}>
//         {activePage === "about" && <Segment raised style={segmentStyle}><About /></Segment>}
//         {activePage === "education" && <Segment raised style={segmentStyle}><Education /></Segment>}
//         {activePage === "internship" && <Segment raised style={segmentStyle}><Internship /></Segment>}
//         {activePage === "projects" && <Segment raised style={segmentStyle}><Projects /></Segment>}
//       </Sidebar.Pusher>
//     </div>
//   );
// };

// const segmentStyle = {
//   background: "rgba(255, 255, 255, 0.1)",
//   color: "#eeeeee",
//   padding: "2rem",
//   borderRadius: "12px",
//   boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
//   backdropFilter: "blur(15px)",
//   width: "90%",
//   margin: "auto",
// };

// export default Portfolio;

import React, { useState, useEffect } from "react";
import { Segment, Sidebar, Menu, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Internship from "./components/Internship";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";

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
    <div style={styles.container}>
      {/* Mobile Navbar */}
      {isMobile && (
        // <Menu inverted attached="top" style={styles.mobileNav}>
        //   <Menu.Item onClick={() => setSidebarVisible(!sidebarVisible)}>
        //     <Icon name="bars" size="large" />
        //   </Menu.Item>
        //   <Menu.Item header style={styles.header}>Balaji Pichchika</Menu.Item>
        // </Menu>
        <div
          inverted
          attached="top"
          style={{
            ...styles.mobileNav,
            border: "none",
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
            fontSize:"24px"
          }}
        >
          <Menu.Item
            onClick={() => setSidebarVisible(!sidebarVisible)}
            style={{ display: "flex", alignItems: "center", border:"none", color:"#ffffff", height:"40px" }}
          >
            <Icon name="bars" style={{cursor: "pointer", fontSize:"1.5rem"}}/>
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              Balaji Pichchika
            </span>
          </Menu.Item>
        </div>
      )}

      {/* Sidebar for Desktop */}
      {!isMobile && (
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          vertical
          visible
          style={styles.sidebar}
        >
          <Header as="h2" textAlign="center" style={styles.header}>
            Balaji Pichchika
          </Header>
          <Menu.Item
            name="about"
            active={activePage === "about"}
            onClick={() => setActivePage("about")}
          >
            About
          </Menu.Item>
          <Menu.Item
            name="education"
            active={activePage === "education"}
            onClick={() => setActivePage("education")}
          >
            Education
          </Menu.Item>
          <Menu.Item
            name="internship"
            active={activePage === "internship"}
            onClick={() => setActivePage("internship")}
          >
            Internship
          </Menu.Item>
          <Menu.Item
            name="projects"
            active={activePage === "projects"}
            onClick={() => setActivePage("projects")}
          >
            Projects
          </Menu.Item>
        </Sidebar>
      )}

      {/* Sidebar for Mobile */}
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
            About
          </Menu.Item>
          <Menu.Item
            name="education"
            active={activePage === "education"}
            onClick={() => {
              setActivePage("education");
              setSidebarVisible(false);
            }}
          >
            Education
          </Menu.Item>
          <Menu.Item
            name="internship"
            active={activePage === "internship"}
            onClick={() => {
              setActivePage("internship");
              setSidebarVisible(false);
            }}
          >
            Internship
          </Menu.Item>
          <Menu.Item
            name="projects"
            active={activePage === "projects"}
            onClick={() => {
              setActivePage("projects");
              setSidebarVisible(false);
            }}
          >
            Projects
          </Menu.Item>
        </Sidebar>
      )}

      {/* Main Content */}
      <Sidebar.Pusher style={isMobile ? styles.mobileContent : styles.content}>
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
      </Sidebar.Pusher>
    </div>
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
  },
  mobileSidebar: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "50px",
    left: 0,
  },
  header: {
    color: "#00adb5",
  },
  content: {
    marginLeft: "20%",
    padding: "2rem",
    minHeight: "100vh",
  },
  mobileContent: {
    padding: "2rem",
    minHeight: "100vh",
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
};

export default Portfolio;
