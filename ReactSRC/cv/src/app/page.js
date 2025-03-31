'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../com/header.js";
import Body from "../com/body.js";
import Section from "../com/section.js";
import SectionLine from "../com/sectionLine.js";
import Bar from "../com/Bar.js";
import { FaRegIdBadge, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa"; 


export default function Home() {
  return (
      <div className={styles.page} >
          <Header>
                <div><h2><FaRegIdBadge /></h2></div>
                <div><h2>Andrew Humphreys</h2></div>
                <div><h2><FaMapMarkerAlt /></h2></div>
                <div><h2>Columbus, OH, USA</h2></div>
                <div><h4><FaGithub /></h4></div>
                <div><h4><a href="https://github.com/andresh3">Github.com/andresh3</a></h4></div>
                <div><h4><FaLinkedin /></h4></div>
                <div><h4><a href="www.linkedin.com/in/andrew-hmphreys">Linkedin.com/in/andrew-hmphreys</a></h4></div>
          </Header>
          <Body>

            <Section label={"About (Why should you hire me?)"}>
                <ul>
                    <li>
                    Current Computer Science and Statistics undergraduate at BGSU. I am currently looking for
                    an internship in Software Development, Data Science or Analytics, IT, or other adjacent fields.
                    </li>
                    <li>
                    I have a strong academic background, independent experience with many 
                    languages and frameworks, and prior leadership exposure.
                    </li>
                    <li>
                    I pick up new tools and frameworks quickly, I am an excellent worker
                    and I will contribute substantially to any team.
                    </li>
                </ul>
            </Section>

            <Section label={"Projects"}>
                <SectionLine title="BGSU Computer Science Capstone" date="Jan 2025 - May 2025" >
                </SectionLine>
                <ul>
                    <li>Collaborated with a small team to continue development of an inventory management suite for BGSU School of Nursing.</li>

                    <li>Leading project direction, design,, and UI wireframing and a substantial role in client communication</li>
                    <li>
                        Redesigned 90%+ code to meet customer needs for:
                        <ul>
                            <li>Robustness and long product life</li>
                            <li>mobile-first design</li>
                            <li>user-friendly UI</li>
                        </ul>
                    </li>
                    <li>
                     We are not permitted to release source code, so I compiled a <a href="https://docs.google.com/presentation/d/1Zpxa168wUgUxnirPJpBW3Z8J_WJym69w358FsmFOWnM/edit?usp=sharing">Static Demo</a>.
                    </li>
                </ul>

                <SectionLine title="Machine Learning" />

                <ul>
                    <li>
                        Academic team project: involved scraping internet users posts and classifying content using a transformer model. Our model was relatively succesful, but we found that simpler models offered similar efficacy. Our report details our understanding of Transformer models, and acknowledging limitations.
                    </li>
                    <li>
                        Demonstrates my ability to use and adapt to a variety of models. This paper demonstrates how I am able to use a variety of tools, and work with data.
                    </li> 
                    <li>
                        View the report <a href="https://drive.google.com/file/d/1kFgjoc1DUgBZUFdbIDIQF9qPW-uLS3xo/view?usp=sharing">here</a>
                    </li>
                </ul>



                <SectionLine title="Other" />
                <p>Below is a short list of some smaller projects I would also like to share:</p>
                <ul>
                <li>
                    <b>React Calendar</b> (<a href="https://codepen.io/SlicesOfPi/pen/ZYEKQgX">Demo</a>)
                    This is a date-picker applet developed as part of a larger (incomplete) project. It showcases my competence with ReactJS as well as with CSS to produce visually appealing and a well-aligned output.
                </li>
                <li>
                    <b>Pagination-Lite.js</b> 
                    &nbsp;(<a href="https://github.com/andresh3/pagination-lite.js">Github</a>, 
                    <a href="https://codepen.io/SlicesOfPi/pen/bNGpqmQ">Demo</a>)
                    This is a lightweight pagination engine; that is, given a list of indexes it returns an abbreviated list that the user can use to navigate. While it is not much to look at, it demonstrates critical thinking and problem solving skills.
                </li>
                </ul>
                
            </Section>

            <Section label="Activities and Awards">
            <SectionLine title="Econ Games 2025" />
            <ul>
            <li>Co-leading statistical analysis of data</li>
            <li>Working in a team of six to represent BGSU at the 2025 <i>Econ Games</i></li>
            </ul>
            <SectionLine title="Academic Honors" />
            <ul>
            <li>Dean's List every semester Fall 2022 onwards</li>
            </ul>
            </Section>

            <Section label="Work Experience">
            <SectionLine title="Zoombezi Bay" details="Security" date="May - August 2023" />
            <ul>
                <li>Enforced security and safety protocols.</li>
                <li>Operated <i>Evolved Weapons Detection System</i>.</li>
                <li>Negotiated difficult, stressful, and emotionally charged situations</li>
            </ul>
            <SectionLine title="Whit's Frozen Custard" details="Shift Manager" date="Jan 2021 - Jun 2022" />
            <ul>
            <li>
                Lead 2-4 team members through daily operations.
            </li>
            </ul>
            </Section>

            <Section label="Education">
            <SectionLine title="Bowling Green State University" details="Bowling Green, OH" date="Exp. Grad: May 2026" />
            <ul>
                <li>Majors: Computer Science Statistics</li>
                <li><span style={{display:"flex",alignItems:"center"}}>GPA: 3.845 / 4.0 &nbsp; <Bar fill="3.845" total='4' /></span></li>
            </ul>

            <SectionLine title="Jacksonville University" details="Jacksonville, FL" date="Fall 2022" />
            <ul>
                <li>Major: Computer Science </li>
                <li><span style={{display:"flex",alignItems:"center"}}>GPA: 4.0 / 4.0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Bar fill="4.0" total='4' /></span></li>
            </ul>
            </Section>
          </Body>
      </div>
  );
}
