const Services = () => (
  <section id='services' className='services'>
    <div className='container'>
      <div className='section-title'>
        <h2>Services</h2>
        <p>I offer a range of services based on my extensive experience and expertise.</p>
      </div>

      <div className='row'>
        <div className='col-lg-4 col-md-6 icon-box' data-aos='fade-up'>
          <div className='icon'>
            <i className='bi bi-briefcase'></i>
          </div>
          <h4 className='title'>
            <a href=''>Web development</a>
          </h4>
          <p className='description'>
            Web development using technologies like React, Node.js, Java, GQL, and JavaScript
          </p>
        </div>
        <div className='col-lg-4 col-md-6 icon-box' data-aos='fade-up' data-aos-delay='100'>
          <div className='icon'>
            <i className='bi bi-card-checklist'></i>
          </div>
          <h4 className='title'>
            <a href=''>Web Security</a>
          </h4>
          <p className='description'>Implementation of web security measures</p>
        </div>
        <div className='col-lg-4 col-md-6 icon-box' data-aos='fade-up' data-aos-delay='200'>
          <div className='icon'>
            <i className='bi bi-bar-chart'></i>
          </div>
          <h4 className='title'>
            <a href=''>Develop Microservices</a>
          </h4>
          <p className='description'>Design and development of microservices architecture</p>
        </div>
        <div className='col-lg-4 col-md-6 icon-box' data-aos='fade-up' data-aos-delay='300'>
          <div className='icon'>
            <i className='bi bi-binoculars'></i>
          </div>
          <h4 className='title'>
            <a href=''>SSR</a>
          </h4>
          <p className='description'>
            Development of React server-side rendering applications with a robust CI/CD process for
            efficient deployment
          </p>
        </div>
        <div className='col-lg-4 col-md-6 icon-box' data-aos='fade-up' data-aos-delay='400'>
          <div className='icon'>
            <i className='bi bi-brightness-high'></i>
          </div>
          <h4 className='title'>
            <a href=''>Communication & Collaboration</a>
          </h4>
          <p className='description'>
            Collaborating with team members to meet project deadlines and exceed expectations
          </p>
        </div>
        <div className='col-lg-4 col-md-6 icon-box' data-aos='fade-up' data-aos-delay='500'>
          <div className='icon'>
            <i className='bi bi-calendar4-week'></i>
          </div>
          <h4 className='title'>
            <a href=''>DevOps</a>
          </h4>
          <p className='description'>
            Experience in deploying & monitoring applications to the Google Cloud Platform.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
