import React, { useEffect, useState } from "react";
import { Divider, Header, Icon } from "semantic-ui-react";
import image from '../images/img-3.jpeg'

const About = () => {

  const [fontSize, setFontSize] = useState("18px");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? "12px" : "18px");
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div >
      <Header as="h2" style={{ color: "#ffffff", fontSize: "2.5rem", textAlign: "center" }}>
        About Me
      </Header>
      <Divider style={{ borderColor: "orange", width: "50px", margin: "0 auto" }} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        {isMobile && <img
          src={image}
          alt="animation"
          style={{
            borderRadius: "50%",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            width: "100px",
            height: "100px",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />}
        <p
          style={{
            fontSize: fontSize,
            maxWidth: "800px",
            textAlign: "justify",
            lineHeight: 1.7,
            color: "#eeeeee",
            margin: "0 auto",
          }}
        >
          Hi, I'm <span style={{ color: "orange", fontWeight: "bold" }}>Balaji Pichchika</span>, a passionate Computer Science Engineering student with a solid foundation in algorithms, data structures, and web development. My curiosity drives me to explore and stay updated on emerging trends in technology, particularly in artificial intelligence and machine learning. I enjoy building efficient and user-friendly solutions, and I am eager to apply my knowledge in real-world scenarios to gain hands-on experience in software development.
          <br />
          <br />
          Dedicated to continuous learning, I strive to contribute to meaningful projects that solve real-world problems and have a lasting impact.
        </p>
      </div>

      <Divider style={{ borderColor: "orange", marginTop: "2rem" }} />

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Header as="h3" style={{ color: "orange" }}>
          Let's Connect!
        </Header>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="https://www.linkedin.com/in/balaji-pichchika-78110b264/" target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" color = "orange" size="large" link />
          </a>
          <a href="https://github.com/Balajipicchika" target="_blank" rel="noopener noreferrer">
            <Icon name="github" color = "orange" size="large" link />
          </a>
          <a href="mailto:balajipicchika02@gmail.com">
            <Icon name="mail" color = "orange" size="large" link />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;