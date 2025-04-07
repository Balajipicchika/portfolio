import React, { useEffect, useState } from "react";
import { Divider, Grid, Header } from "semantic-ui-react";

const Education = () => {

  const [fontSize, setFontSize] = useState("18px");

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? "12px" : "18px");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "GMR Institute of Technology, Rajam",
      score: "8.8 CGPA",
      duration: "2021 – 2025",
    },
    {
      degree: "Intermediate – 12th",
      institution: "APMS & Junior College, Tamavada",
      score: "895 Marks",
      duration: "2019 – 2021",
    },
    {
      degree: "Secondary School",
      institution: "MJPAPBCWR School, Ampolu",
      score: "9.0 CGPA",
      duration: "2018 – 2019",
    },
  ];

  return (
    <div>
      {/* <h2>Academics</h2> */}
      <Header as="h2" style={{ color: "#ffffff", fontSize: "2.5rem", textAlign: "center" }}>
        Academics
      </Header>
      <Divider style={{ borderColor: "orange", width: "50px", margin: "0 auto" }} />
      <Divider />
      <Grid style={{ fontSize: fontSize }}>
        {educationData.map((edu, index) => (
          <Grid.Row key={index} columns={2}>
            <Grid.Column>
              <p style={{color: "orange"}}>
                <strong>{edu.degree}</strong>
              </p>
            </Grid.Column>
            <Grid.Column>
              <p style={{ float: "right" }}>{edu.duration}</p>
            </Grid.Column>
            <Grid.Column>
              <p>{edu.institution}</p>
            </Grid.Column>
            <Grid.Column>
              <p style={{ float: "right" }}>{edu.score}</p>
            </Grid.Column>
            <Grid.Column width={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </div>
  );
};

export default Education;
