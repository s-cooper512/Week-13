// src/App.jsx

//import './src/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Project from './components/Project';

const projectsList = [
  {
    img: "https://via.placeholder.com/300x200",
    imgAlt: "Project 1",
    projectName: "Project 1",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    img: "https://via.placeholder.com/300x200",
    imgAlt: "Project 2",
    projectName: "Project 2",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    img: "https://via.placeholder.com/300x200",
    imgAlt: "Project 3",
    projectName: "Project 3",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wait... This just clicked and react is kind of cool AF"
  },
  {
    img: "https://static.wikia.nocookie.net/nickelodeon/images/d/d9/DoodleBob.png",
    imgAlt: "DoodleBob",
    projectName: "Project DoodleBob",
    projectDescription: "Me hoy minoy!"
  }
];

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Section id="hero">
          <div className="hero">
            <div className="hero-content">
              <h1>Welcome to My Portfolio</h1>
              <p>Explore my work and skills.</p>
              <button>Learn More</button>
            </div>
          </div>
        </Section>
        
        <Section id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Hi, I'm Stephen Cooper and I'm doing homework.</p>
              <p>With a keen eye for technically meeting the requirements for my assignments, I strive to turn them in.</p>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/300x200" alt="About Image" />
            </div>
          </div>
        </Section>

        <Section id="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            {
              projectsList.map((unit, index) => (
                <Project
                key = {index}
                img = {unit.img}
                imgAlt = {unit.imgAlt}
                projectName = {unit.projectName}
                projectDescription = {unit.projectDescription}
                />
              ))
            }
          </div>
        </Section>
      </main>

      <Aside />

      <Footer />
    </>
  );
}

export default App;
