import React from "react";

function AboutCard() {
  return (
    <div className="card mb-3" id="aboutMe">
      <div className="row no-gutters">
        <div className="col-md-6">
          <img
            className="card-img"
            src="./assets/images/office.jpg"
            alt="Office"
            width="50%"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body text-justify">
            <p className="card-text">
              My name is <strong>Rigo A Pinell</strong>. I specialize in
              building applications for desktop, web, and mobile devices. I am
              currently enrolled in the
              <strong>Flex Stack Coding Boot Camp</strong> at
              <strong>Kansas University</strong> where I am learning to develop,
              test, and deploy web and mobile applications using HTML, CSS,
              JavaScript, Bootstrap, Tailwind CSS, JQuery, Node.JS, Express.JS,
              Sequelize, MySQL, JawsDB, Express Handlebars, and other frameworks
              and libraries including Inquirer, Jest, Dotenv, Express Session,
              Connect Session Sequelize, Bcrypt, DayJS, Google Fonts, and Font
              Awesome.
            </p>
            <p className="card-text">
              On my spare time, I enjoy reading business, science, and
              technology books, playing chess and basketball with family and
              friends, and, of course, playing and having fun with my wife and
              my two kids. I have no pets as these little ones keep me busy
              already.
            </p>
            <p className="card-text">
              Would you like to know more about the <em>cool</em> projects I am
              building? Check them out <a href="#projects">here</a>. Want to
              connect, follow, or contact me to talk about my professional
              career? Click <a href="#contact">here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
