import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import realestate from "../../Assets/Projects/realestate.png";
import s1 from "../../Assets/Projects/s1.jpg";
import s2 from "../../Assets/Projects/s2.jpg";
import S3 from "../../Assets/Projects/S3.png";
import s4 from "../../Assets/Projects/s4.png";
import snake from "../../Assets/Projects/snake.png";
import todo from "../../Assets/Projects/todo.png";

import car from "../../Assets/Projects/car.png";
import emotion from "../../Assets/Projects/emotion.png";
import movie from "../../Assets/Projects/movie.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="Real-Estate-Frontend"
              description=" Developed responsive and user-friendly interfaces for real estate websites using HTML,CSS,Javascript and ReactJs."
              ghLink="https://github.com/verma3shubham/SSA-Real-Estate-Frontend"
              demoLink="https://frontend-project-cg6.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="Creating a simple Snake game using HTML, CSS, and JavaScript."
              ghLink="https://github.com/verma3shubham/Snake-game"
              demoLink="https://snake-game-eta-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO_List"
              description="Developed a responsive todo list application using ReactJS"
              ghLink="https://github.com/verma3shubham/TODO_LIST"
              demoLink="https://todo-list-azure-iota.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie_Recommendation_System"
              description="Utilized Python, Pandas, NumPy, and Sklearn to recommendate movie based on 
“cast”,”crew”,”genre” and “keyword ”using tmdb_5000 Datasets"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Animation"
              description="Creating a Car Animation using HTML, CSS, and JavaScript"
              ghLink="https://github.com/verma3shubham/car-animated"
               demoLink="https://car-animated-dun.vercel.app/" 
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Food Service Website"
              description="Food Service Website June 2024 -July 2024 – Developed a fully functional Food Service Website using HTML, CSS, NodeJs, ExpressJs, and MongoDB, enabling 
CRUD operations on food services. – Implemented authentication functionality for website security and created an admin dashboard for management of food 
services"
              ghLink1="https://github.com/verma3shubham/SSA-foodapp-server"
              ghLink2="https://github.com/verma3shubham/SSA-foodseva-client"

               demoLink="https://food-app-frontend-seven-sooty.vercel.app/"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s1}
              isBlog={false}
              title="Rock_Scissor_Papper"
              description="Developing Simple Rock_Scissor_Papper game using Python"

              ghLink="https://github.com/verma3shubham/PYthon-game"
              

              // demoLink="https://food-app-frontend-seven-sooty.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s2}
              isBlog={false}
              title="Anti Sleep Alarm For Drivers"
              
              description="Designed and implemented a comprehensive safety system for vehicles aimed at detecting driver drowsiness and enhancing vehicle security. The system utilized infrared technology interfaced with relay modules to trigger specific actions based on driver conditions."

              
              ghLink="https://github.com/verma3shubham/Anti_Sleep_Alaram/tree/main"

               
            />

           
            
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={S3}
              isBlog={false}
              title="Automatic toll gate using Arduino"

              
              description="An automatic toll gate is an innovative solution that is widely used to reduce traffic congestion and increase the efficiency of toll collection. The system allows vehicles to pass through the gate without any manual intervention, and the toll fee is automatically deducted from the vehicle owner's account. Arduino, a popular open-source electronics platform, can be used to design and implement an automatic toll gate system.."

              
              ghLink="https://github.com/verma3shubham/Automatic_Toll_Gate/tree/main"

               
            />

           
            
          </Col>


                <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s4}
              isBlog={false}
              title="PORTFOLIO"

              
              description="Developed a responsive PORTFOLIO application using ReactJS"

              
              ghLink="https://github.com/verma3shubham/Portfolio"
              demoLink="https://portfolioshubham-psi.vercel.app/"         


               
            />

           
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
