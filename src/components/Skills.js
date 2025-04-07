import React from "react";
import { Grid, Card, Icon, Header, Divider } from "semantic-ui-react";

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Semantic UI"],
    icon: "code",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    icon: "server",
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "VS Code"],
    icon: "cogs",
  },
  {
    category: "Languages",
    skills: ["C", "Python", "Java"],
    icon: "keyboard outline",
  },
];

const Skills = () => {
  return (
    <div>
      <Header as="h2" style={{ color: "#ffffff", fontSize: "2.5rem", textAlign: "center" }}>
        Skills
      </Header>
      <Divider style={{ borderColor: "orange", width: "50px", margin: "0 auto" }} />

      <Grid columns={2} stackable centered style={{ marginTop: "20px" }} divided="vertically" equal>
        <Grid.Row>
          {skillsData.map((skillCategory, index) => (
            <Grid.Column key={index}>
              <Card fluid raised style={{ backgroundColor: "#2f2f2f", color: "#ffffff", height: "100%" }}>
                <Card.Content>
                  <Card.Header style={{ color: "orange", fontSize: "1.5rem" }}>
                    <Icon name={skillCategory.icon} /> {skillCategory.category}
                  </Card.Header>
                  <Card.Description>
                    <ul style={{ paddingLeft: "1.2em", marginTop: "1em" }}>
                      {skillCategory.skills.map((skill, i) => (
                        <li key={i} style={{ color: "#ffffff", marginBottom: "0.5em" }}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Skills;
