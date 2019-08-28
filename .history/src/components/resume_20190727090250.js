import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import img from '../images/bg_1.jpg';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={img}
                alt="avatar"
                style={{ height: '200px', borderRadius: '10px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Muhammad Mudassir</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              I am a full MERN Stack developer with extensive experience in both front-end (ReactJs, React Native) and back-end (NodeJs, expressJs, ) server side technologies also by using NoSql databases (mongodb).
  
   I like to solve complex problems, related to development and bring new ideas to life, so I do my best to have work done, and always learn new technologies and languages.
  
   I have experience in UI / UX and I am capable of making my own conceptual design for each project, using Photoshop and then convert it into a fully functional pages.
   I provides effective, bug-free apps.
  
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>MOH. Islampura safia park, Jaranwala</p>
            <h5>Phone</h5>
            <p>+92-303-9839093</p>
            <h5>Email</h5>
            <p>Malikjrw147@gmail.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2020}
              schoolName="Virtual University pakistan"
              schoolDescription="The Virtual University, Pakistan’s first University based completely on modern Information and Communication Technologies, was established by the Government as a public sector, not-for-profit institution with a clear mission: to provide extremely affordable world class education to aspiring students all over the country. Pakistan’s first University based completely on modern Information and Communication Technologies Using free-to-air satellite television broadcasts and the Internet, the Virtual University allows students to follow its rigorous programs regardless of their physical locations. It thus aims at alleviating the lack of capacity in the existing universities while simultaneously tackling the acute shortage of qualified professors in the country. By identifying the top Professors of the country, regardless of their institutional affiliations, and requesting them to develop and deliver hand-crafted courses, the Virtual University aims at providing the very best courses to not only its own students but also to students of all other universities in the country.              "
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>

            <Experience
              startYear='Currently Working'
              jobName={<a href={'https://ranksol.com/'} target='_blank'>RankSol</a>}
              jobDescription="I am currently working there as a MERN Stack Developer "
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="Javascript"
              progress={80}
            />
            <Skills
              skill="Bootstrap"
              progress={80}
            />
              <Skills
              skill="React-mdl"
              progress={80}
            />
            <Skills
              skill="MongoDB"
              progress={ 75 }
            />
            <Skills
              skill="ExpressJs"
              progress={75}
            />
            <Skills
              skill="ReactJs"
              progress={75}
            />
            <Skills
              skill="NodeJs"
              progress={75}
            />
              <Skills
              skill="Digital Ocean"
              progress={50}
            />
              <Skills
              skill="Firebase"
              progress={50}
            />
              <Skills
              skill="Heroku"
              progress={50}
            />
            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
