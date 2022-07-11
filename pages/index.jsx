import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//typewritter component effect to make sure the heading(top of page) auto types itself
import TypewriterComponent from "typewriter-effect";
import { faAddressBook, faUserGraduate, faFutbol, faHouse, faUser, faWrench, faPaperPlane, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faHtml5, faCss3, faJs, faGit, faGithub, faBootstrap, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const brandIcons = [{ media: "Twitter", icon: faTwitter, color: "blue", link: "https://twitter.com/MandlaN07?t=uiYNNolOcp-OYzDs3ZN1Q&s=09" }, { media: "LinkedIn", icon: faLinkedin, color: "blue", link: "https://www.linkedin.com/in/mandlenkosi-m-b08357218/" }, { media: "Facebook", icon: faFacebook, color: "blue", link: "https://www.facebook.com/profile.php?id=100062043014647" }, { media: "Email", icon: faPaperPlane, color: "white", link: "mailto: georgemarwanqana@gmail.com" }];
const techStackIcons = [{ icon: faHtml5, color: "red" }, { icon: faCss3, color: "blue" }, { icon: faJs, color: "yellow" }, { icon: faGit, color: "red" }, { icon: faGithub, color: "white" }, { icon: faBootstrap, color: "purple" }, { icon: faReact, color: "blue" }, { icon: faNodeJs, color: "green" }, { icon: faDatabase, color: "white" }];

const Mainsection = () => {

    return (
        <main id="main-content">
            <nav>
                <ul id='navigation'>
                    <li className="nav-list-item"><Link href="#main-content"><a><FontAwesomeIcon icon={faHouse} style={{ color: "#ffa500;", height: "20px" }} /></a></Link></li>
                    <li className="nav-list-item"><Link href="#about-section"><a><FontAwesomeIcon icon={faUser} style={{ color: "#ffa500;", height: "20px" }} /></a></Link></li>
                    <li className="nav-list-item"><Link href="#projects-section"><a><FontAwesomeIcon icon={faWrench} style={{ color: "#ffa500;", height: "20px" }} /></a></Link></li>
                    <li className="nav-list-item"><Link href="#contact-section"><a><FontAwesomeIcon icon={faAddressBook} style={{ color: "#ffa500;", height: "20px" }} /></a></Link></li>
                </ul>
            </nav>
            <section id="intro-section">
                <h1 className="name">
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter.typeString("HI, I'M MANDLA.")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("FullStack-Developer from South Africa...")
                                .start();

                        }
                        }
                    />
                </h1>

                <br />
                <br />
                <div id="image-show">
                    <img src="/static/Mandla.jpg" alt="my-img" />
                </div>
            </section>

            <section id="tech-stack">
                <ul className="stack-list">
                    {techStackIcons.map((icon, key) => {
                        return <li className="stack-list-item" key={key}><FontAwesomeIcon icon={icon.icon} style={{ color: icon.color, height: "27px" }} /></li>
                    })}
                </ul>
            </section>

            <section id="about-section">
                <h2>About</h2>
                <div className="about-container">
                    <div className="about-contents my-description">
                        <div className=" about icon"><FontAwesomeIcon icon={faUser} style={{ color: "purple", height: "27px" }} /></div>
                        <div className="about description">
                            <p>Mandla is a young, profoundly passionate FullStack-Developer, who is always eager to learn and imporve, not just in the tech industry, but everything that influences and surrounds the industry</p>
                            <p>Looking into a growing tech industry, more problems also arise, and coming up with solutions to solve these problems is of great significance to me.</p>
                        </div>
                    </div>

                    <div className="about-contents educational-history">
                        <div className=" about icon"><FontAwesomeIcon icon={faUserGraduate} style={{ color: "orange", height: "27px" }} /></div>
                        <div className="about description">
                            <p>I'm a HyperionDev graduate, specialising in the all Javascript MERN stack(MongoDB, ExpressJS, React, NodeJS) </p>
                            <p>My core fundamentals come from self-teaching myself the basics of programming in High School. Learning technologies such as : HTML5 , CSS3, JAVASCRIPT.</p>
                        </div>
                    </div>

                    <div className="about-contents passions ">
                        <div className=" about icon"><FontAwesomeIcon icon={faFutbol} style={{ color: "blue", height: "27px" }} /></div>
                        <div className="about description">
                            <p>As a passionate individual, my goals lie in, not just Fullstack-Development, but the growing industries surrounding the blockchain network and technology.</p>
                            <p>With the rise of the metaverse, I plan to apply my skills to build software that solves problems that are not just surrounding the current climate of the tech industry, but that which might arise in the metaverse or blockchain as time goes by.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects-section">
                <h2>Projects</h2>
                <div className="projects">
                    <div className="project-1 image">
                        <img className="proj1-img" src="/static/E-Commerce.png" alt="my-img" />
                        <div className="overlay">
                            <div className="project-info">
                                <p>E-Commerce website:</p>
                                <button><Link href="https://github.com/fanatII1/Online-Store"><a>View Code(Github):</a></Link></button>
                                <br />
                                <button><Link href="https://react-memmory-game.herokuapp.com/"><a>View Project</a></Link></button>
                            </div>
                        </div>
                    </div>

                    <div className="project-2 image">
                        <img className="proj2-img" src="/static/Content-Search.png" alt="my-img" />
                        <div className="overlay">
                            <div className="project-info">
                                <p>Itunes-Content-Search-App:</p>
                                <button><Link href="https://github.com/fanatII1/Itunes-Content-Search-App"><a>View Code(Github):</a></Link></button>
                                <br />
                                <button><Link href="https://react-memmory-game.herokuapp.com/"><a>View Project</a></Link></button>
                            </div>
                        </div>
                    </div>

                    <div className="project-3 image">
                        <img className="proj3-img" src="/static/Game.png" alt="my-img" />
                        <div className="overlay">
                            <div className="project-info">
                                <p>Memmory Game:</p>
                                <button><Link href="https://github.com/fanatII1/react-game"><a>View Code(Github):</a></Link></button>
                            </div>
                        </div>
                    </div>

                    <div className="project-4 image">
                        <img className="proj4-img" src="/static/Weather.png" alt="my-img" />
                        <div className="overlay">
                            <div className="project-info">
                                <p>Weather-App:</p>
                                <button><Link href="https://github.com/fanatII1/reac-weather-app"><a>View Code(Github):</a></Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-section">
                <h2>Contact Me</h2>
                <ul className="contact-list">
                    {brandIcons.map((icon, key) => {
                        return (
                            <li className={`contact-list-item`} key={key}><Link href={icon.link}><a>{icon.media}: <FontAwesomeIcon icon={icon.icon} style={{ color: icon.color, height: "27px" }} /></a></Link></li>
                        )
                    })}
                </ul>
            </section>

            <style jsx>
                {`
                
            nav{
                position: fixed;
                top: 50%;
                left: 1%;
                transform: translateY(-50%);
                background: #464646;
                border: 2px solid #ffa500;;
                border-radius: 10px;
                padding: 1%;
                z-index: 2;
            }    

            #navigation{
                list-style-type: none
            }

            .nav-list-item{
                margin-top: 35%;
                text-align: center;
                transition: .2s;
            }

            .nav-list-item:hover{
                transform: scale(1.2);
            }


            .stack-list{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                list-style-type: none;
            }

            .stack-list .stack-list-item{
                margin: 0 2%;
                transition: .2s;
            }

            .stack-list .stack-list-item:hover{
                transform: scale(1.2);
            }

            main{
                width: 90%;
                margin: 0 auto;
                animation: myAnimation .8s linear;
            }

            @keyframes myAnimation{
                0%{
                    
                    transform: translateY(-100%);
                }
                100%{
                    transform: translateY(0);
                }
            }
            
          
            section{
                margin-top: 2%;
            }

            .name{
                text-align: center;
                color: #fff;
            }

            .dev-title{
                text-align: center;
                color: white;
            }

            img{
                display: block;
                width: 100%;
                height: auto;
                border-radius: 25px;
            }

            #image-show{
                max-width: 360px;
                max-height: 360px;
                margin: 0 auto;
                overflow: hidden;
                border-radius: 50%;
            }

            .about-container{
                display: flex;
                margin: 0 auto;
                max-width: 835px;
            }

            @media screen and (max-width: 840px){
                .about-container{
                    display: block;
                }

                .about-contents{
                    position: relative;
                    left: 50%;
                    transform: translate(-50%);
                }
            }

             
            h2{
                text-align: center;
                color: #fff;
                margin-bottom: 2%;
            }

            .about-contents{
                max-width: 700px;
                width: 60%;
                min-width: 250px;
                margin: 1.5%;
                text-align: center;
                background: #ffffffeb;
                border-radius: 25px;
                color: #000;
                padding: 0.8%;
                
            }

            .about{
                margin-right: 2%;
            }

            .icon{
                margin-bottom: 2%;
            }

           
            .projects{  
                display: grid;
                grid-template-columns: auto auto;
                grid-column-gap: 1%;
                max-width: 855px;
                margin: 0 auto;
                font-size: 1.3em;
            }

            .image{
                position:relative;
                margin-top: 2%
            }
            
            .overlay{
                height: 0;
                position: absolute;
                bottom: 100%;
                width: 100%;
                background: #ffa50087;
                overflow: hidden;
                border-radius: 25px;
                transition: .4s;
            }

            .image:hover .overlay {
                height: 100%;
                bottom: 0;
            }

            a{
                color: white;
            }

            a:visited{
                color: white;
            }

            button{
                background: #000000b5;
                padding: 1.7% 6%;
                border: 2px solid white;
                border-radius: 10px;
            }
            
            button:hover{
                background: #000000d1;
            }

            .project-info{
                position: absolute;
                top: 50%;
                text-align: center;
                transform: translateY(-50%);
                width: 100%;
                color: white;
            }

            #contact-section{
                padding: 3%;
            }

            #contacts{
                background: #000;
                color: #fff;
            }

            .contact-list{
                list-style-type: none;
                text-decoration: none;
                text-transform: uppercase;
                text-align: center;
            }

            .contact-list .contact-list-item{
                display: inline-block;
                margin: 0 2%;
            }

            `}
            </style>

            <style global jsx>
                {`
            @import url('https://fonts.googleapis.com/css2?family=Fresca&display=swap');
 
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: fresca;
            }

            html,body{
                height: 100%;
                scroll-behavior: smooth;
                background: linear-gradient(0deg,#b11e1e 0%,#ffb100 100%);
                background-attachment: fixed;
            }
            
            `}
            </style>
        </main>
    )
}

export default Mainsection;