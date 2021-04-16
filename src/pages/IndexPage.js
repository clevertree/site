import PageTemplate from "../template/PageTemplate";
import { IoIosContact } from 'react-icons/io';

import { SiGooglemessages } from 'react-icons/si';
import { GrLocation } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { CgWebsite} from 'react-icons/cg';
import { AiFillGithub } from 'react-icons/ai';
import ProfilePicture from "./assets/ari.jpg"

import ASLogo from "./assets/images/as-logo192.png";
import PTLogo from "./assets/images/pt-logo192.png";
import FFLogo from "./assets/images/ff-logo192.png";

import './assets/IndexPage.css';

class IndexPage extends PageTemplate {

  renderBody() {
    return <div className="content columns">


      <section>
        <h1>Ari Asulin - Software Engineer</h1>
        <div className="experience">
          <img src={ProfilePicture} className="profile-picture" alt="Profile"/>
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
            <a href="tel:602-492-7768" {...remoteAttr}>
              602-492-7768
            </a>
          </div>
          <div className="contact-info">
            <MdEmail />
            <a href="mailto:ari.asulin@gmail.com" {...remoteAttr}>
              ari.asulin@gmail.com
            </a>
          </div>
          <div className="contact-info">
            <CgWebsite />
            <a href="https://github.com/clevertree" {...remoteAttr}>
              github.com/clevertree
            </a>
          </div>
          <div className="contact-info">
            <CgWebsite />
            <a href="https://linkedin.com/in/ariasulin" {...remoteAttr}>
              linkedin.com/in/ariasulin
            </a>
          </div>
          <br/>
          <p>
            I'm a full-stack developer with 15 years of industrial experience.
            I consider programming to be a form of art requiring an artistic mind.
            I work well with teams and just as well autonomously.

            My ambitions include designing an open-source
            <a className="logo" href="https://audiosource.io" {...remoteAttr}> Digital Audio Workstation (DAW) </a>
            and a series of video games.
            I refuse to work for any public (i.e. trades on NYSE), or international corporations.
            <strong> American-owned only!</strong>
          </p>
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
            ASU's Comp Sci degree heavily focused on project team management and .NET.
            I taught martial arts at the Rec Center for over 3 years.
          </p>
        </div>

        <div className="experience education">
          <div className="location">Tucson, Arizona</div>
          <div className="duration">2001 - 2002</div>
          <h2 className="school">University of Arizona</h2>
          <div className="degree">B.S. in Computer Science</div>
          <p className="description">
            UofA was a nicer college than ASU with better programming courses.
          </p>
        </div>
      </section>

      <div className="section-container">
        <section>
          <h1>Skills and Technologies</h1>
          <div className="experience skills">
            <h2>Programming</h2>
            <p>
              <strong>JavaScript</strong>,
              TypeScript,
              ReactJS,
              React Native,
              HTML5 && CSS3,
              PHP,
              .NET & C#,
              SQL & NoSQL,
              Android Development,
              iOS Development,
              Continuous Integration,
              Encryption,
              Application Programming Interfaces,
              REST & GraphQL
            </p>

            <h2>Stack</h2>
            <p>
              <strong>NodeJS (Server) + React* (Client),</strong>
              LAMP (or nginx)
            </p>

            <h2>Media</h2>
            <p>
              Video Editing,
              Image Creation,
              Music Production,
              HTML & CSS Content,
              Broadcasting
            </p>

            <h2>Administration</h2>
            <p>
              Linux System Administration,
              Debian Server,
              Nginx,
              Apache,
              SSL Certificates
            </p>

            <h2>Tools</h2>
            <p>
              git,
              ssh,
              bash,
              nodejs & npm,
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
          <h1>Personal  Projects</h1>

          <div className="experience project">
            <a className="logo" href="https://audiosource.io" {...remoteAttr}>
              <img src={ASLogo} alt="Audio Source Logo" />
            </a>
            <div className="duration">2018 - 2021</div>
            <h2 className="name">
              <a className="logo" href="https://audiosource.io" {...remoteAttr}>
                Audio Source Composer
              </a>
            </h2>
            <div className="subname">Web-based Digital Audio Workstation</div>
            <p className="description">
              The Audio Source Composer is an Open-Source Digital Audio Workstation (DAW) built on the WebAudio API written in NodeJS with ReactJS for browsers and ReactNative for mobile.
              The main goal of the AudioSource Project is to provide an easy <strong>all-platform music composer</strong> pre-loaded with as many free sample libraries we can compile,
              allowing aficionados of all music to not only listen, but explore the 'source' of the music they love, and hopefully be inspired to write music of their own.
            </p>
            <a className="source-link" href="https://github.com/clevertree/audio-source-composer" {...remoteAttr}>
              <AiFillGithub alt="Github.com" />
            </a>
          </div>

          <div className="print-break" />

          <div className="experience project">
            <a className="logo" href="https://paradigmthreat.net/history/timeline" {...remoteAttr}>
              <img src={PTLogo} alt="Paradigm Threat Logo" />
            </a>
            <div className="duration">2019 - 2021</div>
            <h2 className="name">
              <a className="logo" href="https://github.com/clevertree/paradigm-threat" {...remoteAttr}>
                Paradigm Threat CMS
              </a>
            </h2>
            <div className="subname">Investigation Repository</div>
            <p className="description">
              The Paradigm Threat CMS is written in ReactJS (NodeJS) making use of
              <a href="https://www.markdownguide.org/" {...remoteAttr}> Markdown </a>
              syntax.
              All site content is managed through a shared git-repository
              which provides deployment, version control, and user access
              without needing a database service.
              This makes the CMS invulnerable to
              <a href="https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/" {...remoteAttr}> DDoS attacks </a>
              and hacking attempts.
              The objective of the timeline project is to compile an alternate history of Earth based on <em>ancient testimony</em> as an accessible sequence of events from the first memory to modern day.
              The CMS has been used to gather contributing documents for our team investigations.
            </p>
            <a className="source-link" href="https://github.com/clevertree/paradigm-threat" {...remoteAttr}>
              <AiFillGithub alt="Github.com" />
            </a>
          </div>


          <div className="experience project">
            <a className="logo" href="https://ffga.me" {...remoteAttr}>
              <img src={FFLogo} alt="Forgotten Future Logo" />
            </a>
            <div className="duration">2008 - 2021</div>
            <h2 className="name">
              <a className="logo" href="https://ffga.me" {...remoteAttr}>
                Forgotten Future
              </a>
            </h2>
            <div className="subname">WebGL based video game</div>
            <p className="description">
              Forgotten Future is a web-based video game project still in the planning stages.
              This open-source parallax scrolling game will be available on all platforms.
              Right now the website features a <a href="https://ffga.me/demo.html" {...remoteAttr}>webGL demo</a> as well as
              <a href="https://soundcloud.com/ari-asulin/forgotten-future-desolation-title-theme" {...remoteAttr}> music </a>
              composed by Ari Asulin.
              The next phase of this project will involve finding a cross-platform GL solution
              allowing video games to be written <em>once</em> and be playable <em>anywhere</em>.
            </p>
            <a className="source-link" href="https://github.com/clevertree/forgotten-future" {...remoteAttr}>
              <AiFillGithub alt="Github.com" />
            </a>
          </div>

        </section>
      </div>


      <section>
        <h1>Work Experience</h1>
        <div className="experience work">
          <div className="location">Scottsdale, Arizona</div>
          <div className="duration">2017 to present</div>
          <h2 className="company">Harkins Theatres</h2>
          <div className="position">Software Contractor</div>
          <p className="description">
            I was hired to develop the Harkins.com website and store apps.
            It was an amazing experience with amazing people and I got to delve heavily into the
            NodeJS (npm), Android, and iOS ecosystems.
            My responsibilities included:
            <ul>
              <li>Implementing new website features using PHP, MySQL, jQuery, and REST</li>
              <li>Migrating from Windows to LAMP</li>
              <li>Maintaining uptime during crashes,  attacks</li>
              <li>Implementing new app features using React Native and REST</li>
              <li>Resolving CI compilation issues related to npm libraries</li>
              <li>Deploying to the Play and Apple stores</li>
            </ul>
          </p>
          <div className="contact">
            <a href="mailto:DavePeep@harkins.com" {...remoteAttr}><MdEmail /></a>
            Dave Peep (IT Manager)
          </div>
          <div className="contact">
            <a href="mailto:DirkEllsworth@harkins.com" {...remoteAttr}><MdEmail /></a>
            Dirk Ellsworth
          </div>
        </div>

        <div className="experience work">
          <div className="location">Florida, United States</div>
          <div className="duration">Aug 2016 – Dec 2018</div>
          <h2 className="company">Simon Payments</h2>
          <div className="position">Software Contractor</div>
          <p className="description">
            I rescued an East Coast payment processor who lost their programmer. I was able to fix their bank integration.
            Then I redesigned their entire payment processor in PHP, including a front-end UI that generated forms on the fly.
            I integrated a few more bank APIs for Simon Payments and then eventually they let me go as the software was humming along beautifully.
            My responsibilities eventually included:
            <ul>
              <li>Lead Developer, Project Manager, Content & Design Management</li>
              <li>Developed and maintained website over a 6 year period</li>
              <li>Developed all modules including payment, payout, & financial systems</li>
              <li>Maintained payment info storage, encryption, scheduling, and automation</li>
            </ul>
          </p>

          <div className="contact">
            <a href="mailto:tony@simonpayments.com" {...remoteAttr}><MdEmail /></a>
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
            I was tasked with building Apps for Android, iOS, WinRT, Windows 8 desktop, as well as investigating proximity-based social networking.
            I then joined NewAer for the next 6 months and left after the company scaled down - they had realized Windows RT couldn't do bluetooth networking.
          </p>
          <div className="contact">
            <a href="mailto:rob.mallery@originate.com" {...remoteAttr}><MdEmail /></a>
            Rob Mallery
          </div>
          <div className="contact">
            <a href="mailto:dave@newaer.com" {...remoteAttr}><MdEmail /></a>
            Dave Matthews
          </div>
        </div>

        <div className="print-break" />

        <div className="experience work">
          <div className="location">Scottsdale, Arizona</div>
          <div className="duration">Feb 2012 – Apr 2013</div>
          <h2 className="company">Blue Global Media</h2>
          <div className="position">Integration Specialist, and System Administrator</div>
          <p className="description">
            I integrated bank APIs for home and auto lender applications as well as maintained linux servers.
            I was hired for my experience integrating APIs in PHP.
          </p>
          <div className="contact">
            <a href="mailto:eric@blueglobalmedia.com" {...remoteAttr}><MdEmail /></a>
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
            I learned a great deal of industry-standard languages like PHP and Javascript on the job while also attending ASU.
            My responsibilities eventually included:
            <ul>
              <li>Lead Developer, Project Manager, Content & Design Management</li>
              <li>Developed and maintained website over a 6 year period</li>
              <li>Developed all modules including payment, payout, & financial systems</li>
              <li>Maintained payment info storage, encryption, scheduling, and automation</li>
              <li>API integration for processing bank transactions, as well as htpasswd password management for client websites</li>
            </ul>
          </div>
          <div className="contact">
            <a href="mailto:Gppardy@etelegate.com" {...remoteAttr}><MdEmail /></a>
            Gordon Pardy
          </div>
        </div>
      </section>

    </div>
  }

}

export default IndexPage;


const remoteAttr = {
  target:   '_blank',
  rel:      'noreferer',
}