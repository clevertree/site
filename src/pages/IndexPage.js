import PageTemplate from "../template/PageTemplate";
import { IoIosContact } from 'react-icons/io';

import { SiGooglemessages } from 'react-icons/si';
import { GrLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { CgWebsite} from 'react-icons/cg';
import { AiOutlinePhone, AiFillGithub } from 'react-icons/ai';
import ProfilePicture from "./assets/ari.jpg"

import ASLogo from "./assets/images/as-logo192.png";
import PTLogo from "./assets/images/pt-logo192.png";
import FFLogo from "./assets/images/ff-logo192.png";

import './assets/IndexPage.css';

class IndexPage extends PageTemplate {

  renderBody() {
    return <div className="content columns">


      <section className="break">
        <h1>Ari Asulin - Software Engineer</h1>
        <div className="experience">
          <img src={ProfilePicture} className="profile-picture"/>
          <div className="contact-info">
            <IoIosContact/>
            Ari Raphael Asulin
          </div>
          <div className="contact-info">
            <GrLocation />
            Mesa, AZ
          </div>
          <div className="contact-info">
            <SiGooglemessages />
            <a href="tel:602-492-7768" target="_blank">
              602-492-7768
            </a>
          </div>
          <div className="contact-info">
            <MdEmail />
            <a href="mailto:ari.asulin@gmail.com" target="_blank">
              ari.asulin@gmail.com
            </a>
          </div>
          <div className="contact-info">
            <CgWebsite />
            <a href="https://github.com/clevertree" target="_blank">
              github.com/clevertree
            </a>
          </div>
          <div className="contact-info">
            <CgWebsite />
            <a href="https://linkedin.com/in/ariasulin" target="_blank">
              linkedin.com/in/ariasulin
            </a>
          </div>
        </div>
      </section>

      <section>
        <h1>Skills and Technologies</h1>
        <div className="experience skills">
          <h2>Programming</h2>
          <p>
            React Native,
            ReactJS,
            HTML5,
            CSS3,
            SQL,
            Android Development,
            iOS Development,
            Javascript & jQuery,
            PHP,
            C#,
            .NET,
            Continuous Integration,
            Encryption,
            Application Programming Interfaces,
            REST & GraphQL
          </p>

          <h2>Stack</h2>
          <p>
            NodeJS (Server) + React* (Client),
            LAMP (or nginx)
          </p>

          <h2>Media</h2>
          <p>
            Video Editing,
            Image Creation,
            Music Production,
            HTML & CSS Content
          </p>

          <h2>Administration</h2>
          <p>
            Linux System Administration,
            Nginx,
            Apache,
            SSL Certificates
            Debian
          </p>

          <h2>Tools</h2>
          <p>
            git,
            ssh,
            bash,
            PHPStorm,
            Visual Studio,
            Gimp,
            Kdenlive,
            ObsStudio
          </p>

          <h2>Other</h2>
          <p>
            Juggling, Martial Arts, Historic Investigation
          </p>
        </div>
      </section>

      <section>
        <h1>Projects</h1>

        <div className="experience project">
          <a className="logo" href="https://audiosource.io" target="_blank">
            <img src={ASLogo} alt="Audio Source Logo" />
          </a>
          <div className="duration">2018 - 2021</div>
          <h2 className="name">
            <a className="logo" href="https://audiosource.io" target="_blank">
              Audio Source Composer
            </a>
          </h2>
          <div className="subname">Web-based Digital Audio Workstation</div>
          <p className="description">
            The Audio Source Composer is an Open-Source Digital Audio Workstation (DAW) built on the WebAudio API written in NodeJS with ReactJS for browsers and ReactNative for mobile.
            The main goal of the AudioSource Project is to provide an easy <strong>all-platform music composer</strong> pre-loaded with as many free sample libraries we can compile,
            allowing aficionados of all music to not only listen, but explore the 'source' of the music they love, and hopefully be inspired to write music of their own.
          </p>
          <a className="source-link" href="https://github.com/clevertree/audio-source-composer" target="_blank">
            <AiFillGithub alt="Github.com" />
          </a>
        </div>

        <div className="experience project">
          <a className="logo" href="https://paradigmthreat.net/history/timeline" target="_blank">
            <img src={PTLogo} alt="Paradigm Threat Logo" />
          </a>
          <div className="duration">2019 - 2021</div>
          <h2 className="name">
            <a className="logo" href="https://audiosource.io" target="_blank">
              Alternate Cosmology Timeline
            </a>
          </h2>
          <div className="subname">Investigation Repository Website</div>
          <p className="description">
            The objective of this timeline is to compile an alternate history of Earth based on <em>ancient testimony</em> as an accessible sequence of events from the first memory to modern day.
            I'm hoping this project helps others navigate the dissonance of consensus, and be able to visualize the creation of our world and solar system.
            My investigation repository has survived numerous
            <a href="https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/" target="_blank"> DDoS attacks </a>
            and hacking attempts by being written in ReactJS and having no database ;)
          </p>
          <a className="source-link" href="https://github.com/clevertree/paradigm-threat" target="_blank">
            <AiFillGithub alt="Github.com" />
          </a>
        </div>


        <div className="experience project">
          <a className="logo" href="https://ffga.me" target="_blank">
            <img src={FFLogo} alt="Forgotten Future Logo" />
          </a>
          <div className="duration">2008 - 2021</div>
          <h2 className="name">
            <a className="logo" href="https://ffga.me" target="_blank">
              Forgotten Future
            </a>
          </h2>
          <div className="subname">WebGL based video game</div>
          <p className="description">
            Forgotten Future is a web-based video game project still in the planning stages.
            This open-source parallax scrolling game will be available on all platforms.
            Right now the website features a <a href="https://ffga.me/demo.html" target="_blank">webGL demo</a> as well as
            <a href="https://soundcloud.com/ari-asulin/forgotten-future-desolation-title-theme" target="_blank"> music </a>
            composed by Ari Asulin.
            The next phase of this project will involve finding a cross-platform GL solution
            allowing video games to be written <em>once</em> and be playable <em>anywhere</em>.
          </p>
          <a className="source-link" href="https://github.com/clevertree/forgotten-future" target="_blank">
            <AiFillGithub alt="Github.com" />
          </a>
        </div>

      </section>

      <section>
        <h1>Education</h1>

        <div className="experience education">
          <div className="location">Tempe, Arizona</div>
          <div className="duration">2002 - 2008</div>
          <h2 className="school">Arizona State University</h2>
          <div className="degree">B.S. in Computer Science</div>
          <p className="description">
            I taught martial arts at the Rec Center for over 3 years.
            Not the best school for learning programming or anything serious.
          </p>
        </div>

        <div className="experience education">
          <div className="location">Tucson, Arizona</div>
          <div className="duration">2001 - 2002</div>
          <h2 className="school">University of Arizona</h2>
          <div className="degree">B.S. in Computer Science</div>
          <p className="description">
            Nicer school than ASU with better programming courses.
          </p>
        </div>
      </section>


      <section>
        <h1>Work Experience</h1>
        <div className="experience work">
          <div className="location">Scottsdale, Arizona</div>
          <div className="duration">2017 to present</div>
          <h2 className="company">Harkins Theatres</h2>
          <div className="position">Software Contractor</div>
          <p className="description">
            I was hired via odesk.com to maintain the Harkins.com website and application in PHP and ReactNative,
            which were languages the IT team had limited practice with.
            I helped them keep their software humming through hacker attacks, power outages, and all the rest.
            After the theatres closed due to the plandemic, my hours were reduced.
            As things aren't getting back to normal, I'm looking for new work.
            It was an amazing experience with amazing people ;D
          </p>
          <div className="contact">
            <a href="mailto:DavePeep@harkins.com"><MdEmail /></a>
            Dave Peep (IT Manager)
          </div>
          <div className="contact">
            <a href="mailto:AronBarr@harkins.com"><MdEmail /></a>
            Aron Barr (Hiring Manager)
          </div>
        </div>

        <div className="experience work">
          <div className="location">Florida, United States</div>
          <div className="duration">Aug 2016 – Dec 2018</div>
          <h2 className="company">Simon Payments</h2>
          <div className="position">Software Contractor</div>
          <p className="description">
            I rescued an East Coast payment processor who lost their programmer. I was able to fix their bank integration.
            Then I redesigned their entire payment processor in PHP.
            I integrated a few more bank APIs for Simon Payments and then eventually they let me go as the software was humming along beautifully.
          </p>

          <div className="contact">
            <a href="mailto:tony@simonpayments.com"><MdEmail /></a>
            Tony Garay
          </div>
        </div>

        <div className="experience work">
          <div className="location">San Francisco Bay Area</div>
          <div className="duration">Aug 2013 – Dec 2014</div>
          <h2 className="company">Originate and NewAer</h2>
          <div className="position">Originator and Software Engineer</div>
          <p className="description">
            I was an Originator for the Originate and NewAer software companies in San Francisco which operated out of the same offices.
            I was tasked with building Apps for Android, iOS, WinRT, Windows 8 desktop, as well as proximity­-based social networking.
            I then joined NewAer for the next 6 months and left after they realized Windows RT can't do bluetooth networking.
          </p>
          <div className="contact">
            <a href="mailto:rob.mallery@originate.com"><MdEmail /></a>
            Rob Mallery
          </div>
          <div className="contact">
            <a href="mailto:dave@newaer.com"><MdEmail /></a>
            Dave Matthews
          </div>
        </div>


        <div className="experience work">
          <div className="location">Scottsdale, Arizona</div>
          <div className="duration">Feb 2012 – Apr 2013</div>
          <h2 className="company">Blue Global Media</h2>
          <div className="position">Integration Specialist, and System Administrator</div>
          <p className="description">
            I built APIs for lender applications and financial reporting as well as maintained linux servers.
          </p>
          <div className="contact">
            <a href="mailto:eric@blueglobalmedia.com"><MdEmail /></a>
            Eric Cumberworth
          </div>
        </div>


        <div className="experience work">
          <div className="location">Scottsdale, Arizona</div>
          <div className="duration">May 2005 – Oct 2012</div>
          <h2 className="company">Etelegate</h2>
          <div className="position">Head Of Information Technology</div>
          <div className="description">
            I was head of IT for Etelegate - a payment processor of high-risk websites.
            <ul>
              <li>Lead Developer, Project Manager, Content & Design Management</li>
              <li>Developed and maintained website over a 6 year period</li>
              <li>Developed all modules including payment, payout, & financial systems</li>
              <li>Maintained payment info storage, encryption, scheduling, and automation</li>
              <li>Direct integration with world banking, as well as thousands of websites for
                customer password storage and real time data management</li>
            </ul>
          </div>
          <div className="contact">
            <a href="mailto:Gppardy@etelegate.com"><MdEmail /></a>
            Gordon Pardy
          </div>
        </div>
      </section>

    </div>
  }

}

export default IndexPage;
