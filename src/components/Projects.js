import React, { useEffect, useState } from "react";
import { Card, Image, Modal, Button, Icon, Grid, Header, Divider } from "semantic-ui-react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

const projects = [
  {
    title: "Restaurant Management System",
    image: project1,
    link: "https://restaurent-react-five.vercel.app/",
    description:
      "Developed a front-end restaurant management system using React.js. Designed user-friendly interfaces, ensured responsive design, and applied modern front-end development practices.",
  },
  {
    title: "Faculty Recruitment Portal",
    image: project2,
    link: "https://recruitment.iipe.ac.in/",
    description:
      "Developed a Faculty Recruitment Portal for IIPE using the PERN stack (PostgreSQL, Express, React, Node.js). Designed intuitive UI and ensured a scalable application.",
  },
  {
    title: "Oral Disease Classification",
    image: project3,
    link: "https://oral-disease-classification.onrender.com/",
    description:
      "Developed an oral disease classification model using EfficientNetB0 and CBAM to analyze dental images. Achieved 94% accuracy across five disease types, enhancing detection effectiveness.",
  },
  {
    title: "Country Explorer",
    image: project4,
    link: "https://country-search-omega-silk.vercel.app/",
    description:
      "Built a full-stack Country Explorer app using REST APIs to fetch real-time country data. Implemented advanced search, filters, and a chatbot using React (frontend) and Node.js (backend). Enabled dynamic data visualization and improved user experience with interactive UI components.",
  }
  

];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const [fontSize, setFontSize] = useState("18px");

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? "12px" : "18px");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Projects</h2> */}
      <Header as="h2" style={{ color: "#ffffff", fontSize: "2.5rem", textAlign: "center" }}>
        Projects
      </Header>
      <Divider style={{ borderColor: "orange", width: "50px", margin: "0 auto" }} />
      <Grid columns={2} stackable centered style={{marginTop: "20px"}}>
        {projects.map((project, index) => (
          <Grid.Column key={index}>
            <Card fluid raised onClick={() => handleOpen(project)}>
              <Image src={project.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header style={{fontSize: fontSize}}>{project.title}</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>

      {/* Modal for Project Details */}
      <Modal open={open} onClose={() => setOpen(false)} size="small">
        <Modal.Header>
          {selectedProject?.title}
          <Icon
            name="close"
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => setOpen(false)}
          />
        </Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={selectedProject?.image} wrapped />
          <Modal.Description>
            <p>{selectedProject?.description}</p>
            <Button
              color="teal"
              as="a"
              href={selectedProject?.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="external alternate" /> Visit Project
            </Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Projects;
