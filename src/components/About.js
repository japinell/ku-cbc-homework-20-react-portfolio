//
import React from "react";
//
// Render the about section
//
function About({ handlePageChange }) {
  return (
    <div className="container-fluid about" id="about">
      <div className="container">
        <img
          src="./assets/images/picture.jpg"
          alt="Portrait of Jose A. Pinell"
          className="profile-image"
        />
        <h2>About Me</h2>
        <div className="card-body text-justify">
          <p className="card-text">
            My name is <strong>Jose A Pinell</strong>. I specialize in building
            applications for desktop, web, and mobile devices. I completed the
            <strong> Flex Stack Coding Boot Camp </strong> at
            <strong> Kansas University</strong> where I learned to develop,
            test, and deploy web and mobile applications using HTML, CSS,
            JavaScript, Bootstrap, Tailwind, Material UI, JQuery, Node.JS,
            Express.JS, Sequelize, MySQL, JawsDB, Express Handlebars, MongoDb,
            MERN, GraphQL, React, Redux, PWA, and many other frameworks and
            libraries including Inquirer, Jest, Dotenv, Express Session, Connect
            Session Sequelize, Bcrypt, DayJS, Google Fonts, and Font Awesome.
          </p>
          <p className="card-text">
            On my spare time, I enjoy reading business, science, and technology
            books, playing chess and basketball with family and friends, and, of
            course, playing and having fun with my wife and my two kids. I have
            no pets as these little ones keep me busy already.
          </p>
          <p className="card-text">
            Would you like to know more about the <em>cool</em> projects I am
            building? Check them out{" "}
            <a href="#projects" onClick={() => handlePageChange("Projects")}>
              here
            </a>
            . Want to connect, follow, or contact me to talk about my
            professional career? Click{" "}
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
