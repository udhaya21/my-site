const About = () => (
  <section id='about' className='about'>
    <div className='container'>
      <div className='section-title'>
        <h2>About</h2>
        <p>
          Welcome to my website! My name is Udhayaprakasha, and I'm a passionate software engineer
          with a knack for creating innovative solutions.
        </p>
      </div>

      <div className='row'>
        <div className='col-lg-4' data-aos='fade-right'>
          <img src='assets/img/profile-img.jpg' className='img-fluid' alt='' />
        </div>
        <div className='col-lg-8 pt-4 pt-lg-0 content' data-aos='fade-left'>
          <h3>Software Engineer.</h3>
          <p className='fst-italic'>
            My expertise lies in web development, and I'm proficient in several technologies
            including React, Node.js, Java, and JavaScript. I also have hands-on experience with web
            security, having worked on implementing security headers for a website to protect it
            against common attacks.
          </p>
          <div className='row'>
            <div className='col-lg-6'>
              <ul>
                <li>
                  <i className='bi bi-chevron-right'></i> <strong>Website:</strong>{' '}
                  <span>www.udhayaprakasha.com</span>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i> <strong>Phone:</strong>{' '}
                  <span>+91 99400 20612</span>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i> <strong>City:</strong>{' '}
                  <span>Tamil Nadu, India</span>
                </li>
              </ul>
            </div>
            <div className='col-lg-6'>
              <ul>
                <li>
                  <i className='bi bi-chevron-right'></i> <strong>Age:</strong> <span>27</span>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i> <strong>Degree:</strong>{' '}
                  <span>Bachelor Of Computer Science and Engineering</span>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i> <strong>PhEmailone:</strong>{' '}
                  <span>udhayaprakasha@icloud.com</span>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i> <strong>Freelance:</strong>{' '}
                  <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            In addition to my development skills, I've also worked on schema design and backend for
            front frameworks, which has allowed me to create seamless user experiences for web
            applications. When I'm not coding, you can find me playing cricket and reading books.
            These activities help me unwind and stay motivated to tackle new challenges. Thank you
            for taking the time to learn more about me. Please feel free to contact me if you have
            any questions or if you'd like to discuss a potential project!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
