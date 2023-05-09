const Resume = () => (
  <section id='resume' className='resume'>
    <div className='container'>
      <div className='section-title'>
        <h2>Resume</h2>
        <p>
          Experienced software engineer with expertise in web development, React, Node.js, Java, and
          JavaScript. Skilled in web security and deploying apps to cloud platforms like Google
          Cloud. Experienced in DevOps role, including monitoring, troubleshooting, and automating
          processes.
        </p>
      </div>

      <div className='row'>
        <div className='col-lg-6' data-aos='fade-up'>
          <h3 className='resume-title'>Sumary</h3>
          <div className='resume-item pb-0'>
            <h4>Udhayaprakasha</h4>
            <p>
              <em>
                An innovative and deadline-driven software engineer with over 6 years of experience,
                I have a proven track record of designing and developing user-centered applications
                from initial concept to final, polished deliverable.
              </em>
            </p>
            <ul>
              <li>Chennai,Tamil Nadu, India</li>
              <li>9940020612</li>
              <li>udhayaprakasha@icloud.com</li>
            </ul>
          </div>

          <h3 className='resume-title'>Education</h3>
          <div className='resume-item'>
            <h4>Bachelor Of Engineering in Computer Science and Engineering </h4>
            <h5>2012 - 2016</h5>
            <p>
              <em>Dhaanish Ahmed College Of Engineering, Chennai, Tamil Nadu</em>
            </p>
          </div>
        </div>
        <div className='col-lg-6' data-aos='fade-up' data-aos-delay='100'>
          <h3 className='resume-title'>Professional Experience</h3>
          <div className='resume-item'>
            <h4>Software Engineer</h4>
            <h5>2017 - Present</h5>
            <p>
              <em>Full Creative Private Limited, Chennai, Tamil Nadu</em>
            </p>
            <ul>
              <li>
                Designed and developed MicroFrontEnds using Module Federation for electron
                applications to improve user experience.
              </li>
              <li>
                Separated microservices from monolithic applications to improve scalability and
                maintainability.
              </li>
              <li>
                Implemented security headers to protect websites against common attacks and ensure
                data security.
              </li>
              <li>
                Developed React server-side rendering applications with a robust CI/CD process for
                efficient deployment and continuous improvement.
              </li>
              <li>
                Designed schemas and built backends for front frameworks to provide seamless user
                experiences and optimize performance.
              </li>
              <li>
                Collaborated with cross-functional teams to meet project deadlines and exceed
                expectations, using agile methodologies to ensure smooth communication and
                collaboration.
              </li>
            </ul>
          </div>
          <div className='resume-item'>
            <h4>Junior Support Engineer</h4>
            <h5>2016 - 2017</h5>
            <p>
              <em>Full Creative Private Limited, Chennai, Tamil Nadu</em>
            </p>
            <ul>
              <li>
                Excellent communication skills, both verbal and written, to effectively interact
                with customers and developers.
              </li>
              <li>
                Strong problem-solving skills to diagnose and troubleshoot technical issues reported
                by customers.
              </li>
              <li>
                Ability to multitask and handle a high volume of customer inquiries via phone,
                email, or chat.
              </li>
              <li>
                Good understanding of software development concepts and technologies to effectively
                communicate with developers and understand the root cause of issues.
              </li>
              <li>
                Attention to detail and ability to follow up with customers and developers to ensure
                issues are resolved in a timely manner.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
