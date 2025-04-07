import React, { useEffect, useState } from "react";
import { Divider, Grid, Modal, Icon, Header } from "semantic-ui-react";

const internships = [
  {
    role: "Full Stack Developer",
    company: "IIPE (Indian Institute of Petroleum & Energy)",
    duration: "Aug 05 - Nov 23, 2024",
    location: "Visakhapatnam, AP",
    description:
      "Worked as a Full Stack Developer to develop a Faculty Recruitment Portal for IIPE using the PERN stack (PostgreSQL, Express.js, React, Node.js). Collaborated on backend and frontend development to build an efficient, user-friendly application tailored for faculty recruitment."
  }
];

const Internship = () => {
  const [open, setOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const handleOpen = (internship) => {
    setSelectedInternship(internship);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedInternship(null);
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
      <Header as="h2" style={{ color: "#ffffff", fontSize: "2.5rem", textAlign: "center" }}>
        Internships
      </Header>
      <Divider style={{ borderColor: "orange", width: "50px", margin: "0 auto" }} />
      <Divider />
      <Grid style={{ fontSize: fontSize }}>
        {internships.map((internship, index) => (
          <Grid.Row
            key={index}
            columns={2}
            style={{ cursor: "pointer" }}
            onClick={() => handleOpen(internship)}
          >
            <Grid.Column>
              <p style={{color: "orange"}}>
                <strong>{internship.role}</strong>
              </p>
            </Grid.Column>
            <Grid.Column>
              <p style={{ float: "right" }}>{internship.duration}</p>
            </Grid.Column>
            <Grid.Column>
              <p>{internship.company}</p>
            </Grid.Column>
            <Grid.Column>
              <p style={{ float: "right" }}>{internship.location}</p>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose} size="small">
        <Modal.Header>
          {selectedInternship?.role} - {selectedInternship?.company}
          <Icon
            name="close"
            style={{ float: "right", cursor: "pointer" }}
            onClick={handleClose}
          />
        </Modal.Header>
        <Modal.Content>
          <p style={{ textAlign: "justify", lineHeight: 1.2, fontSize: "15px" }}>
            {selectedInternship?.description}
          </p>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Internship;
