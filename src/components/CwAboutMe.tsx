import React, {StatelessComponent} from 'react';
import './CwAboutMe.scss';

export const CwAboutMe: StatelessComponent<void> = () => (
  <div>
    <div className="cw-about-me--grid">

      <div className="cw-about-me--gridItem">
        <div className="cw-about-me--panel">
          <h2>About Me</h2>
          <p>
            I work for MHR in Nottingham, UK as a Senior Web Application Developer and have done since 2015. I
            enjoy programming and love open source software. I try to contribute to projects on GitHub when possible.
          </p>
          <p>
            In my spare time, I watch Formula 1 as I am a huge fan, including the night races (live!) I also enjoy
            photography and like to play guitar and piano.
          </p>
        </div>

        <div className="cw-about-me--panel">
          <h2>My Skills</h2>
          <p>
            Primarily, I am a front-end developer. I work with JavaScript on a daily basis, particularly using AngularJS
            or Angular. My CSS and HTML skills are also very good and I take pride in the aesthetics of my projects.
          </p>
          <p>
            I tend to use Gulp for my build processes and NPM as a package manager.
          </p>
          <p>
            Despite my front-end background, I have a lot of experience as a back-end developer, working with Node.js,
            Java, C++, PHP, Python, Ruby as well as many databases (mostly MySQL and MongoDB).
          </p>
          <p>
            I have skill relating to deploying apps as well, as I run VPSs and use automatic deployment with my
            projects. I usually work with Linux servers and am capable of setting up environments from the command line.
          </p>
          <p>
            For version control I prefer Git and use it for all my projects and am quite proficient in its use.
          </p>
        </div>
      </div>

    </div>
  </div>
);
