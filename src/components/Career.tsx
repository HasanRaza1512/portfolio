import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Call Center Representative</h4>
                <h5>Nexus Bpo Solution</h5>
              </div>
              <h3>2020-2021</h3>
            </div>
            <p>
              Provided customer support and managed communications in a fast-paced BPO environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front End Developer</h4>
                <h5>Virtue Xolutions</h5>
              </div>
              <h3>2024-PRESENT</h3>
            </div>
            <p>
              Developed and maintained custom CMS websites tailored to client requirements. 
              Managed servers, handled backups, and performed security audits. 
              Successfully deployed multiple websites ensuring stability and uptime. 
              Collaborated with teams for seamless integration and resolved critical issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
