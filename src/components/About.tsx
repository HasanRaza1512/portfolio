import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Results-driven Frontend Developer with expertise in HTML, CSS,
          JavaScript, WordPress, and Shopify. Proven experience in payment
          gateway integration, server management, and responsive web design.
          Strong problem-solving skills with a focus on performance
          optimization, scalability, and delivering user-centric solutions.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <h3 className="title">Education</h3>
          <p className="para" style={{ fontSize: "1.2rem", fontWeight: "400" }}>
            APTECH - Diploma in Software Engineering
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
