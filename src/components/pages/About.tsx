import aboutImage from '../../assets/About.png';

const About = () => {
  return (
    <div className="content">
    <h1>About Page</h1>
    <p>Learn more about us on this page.</p>
    <img src={aboutImage} alt="About illustration" />
  </div>
  )
}

export default About