import homeImage from '../../assets/home.png';

const Home = () => {
  return (
    <div className="content">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <img src={homeImage} alt="Home illustration" />
    </div>
  )
}

export default Home