import "./styles.css";
import img1 from "../img/img.png";
import img2 from "../img/icon-1.png";
import img3 from "../img/icon-2.png";
import img4 from "../img/icon-3.png";
import img5 from "../img/icon-4.png";
import img6 from "../img/icon-5.png";
import img7 from "../img/img-2.png";
import img8 from "../img/img-3.png";
import img9 from "../img/imf-4.png";
import img10 from "../img/icon.png";
import img11 from "../img/img-5.png";
import img12 from "../img/ins.png";
import img13 from "../img/facebook.png";

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">Castaway</div>
        <nav>
          <ul>
            <li>
              <a href="#" className="hom">
                Home
              </a>
            </li>
            <li>
              <a href="#1">Episodes</a>
            </li>
            <li>
              <a href="#2">About</a>
            </li>
            <li>
              <a href="#3">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hed-1">
        <div className="hed-b">
          <img className="img-1" src={img1} alt="Description of the image" />
        </div>
        <div className="hed-b1">
          <span className="p-1">
            Take your <br /> podcast to the
          </span>
          <span className="p-2">next</span>
          <span className="p-3">
            <b>level</b>
          </span>
          <br />
          <span className="p-33">Listen on</span>
          <br />
          <br />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>
      <section className="latest-blocks">
        <span className="lis" id="1">
          Latest episodes
        </span>
        <div className="block">
          <img src={img7} alt="" />
          <div className="block-text">
            <span className="gea">Gear</span>
            <p className="pg-1">
              Should you get <br /> outboard audio gear?
            </p>
            <p className="pg-2">
              Is hardware really worth it when it comes to podcasting? The
              answer is... it <br /> depends. Here are our reasons on why you
              might want to consider picking <br /> something up.
            </p>
            <a href="#" className="view-block-details">
              View Episode Details
            </a>
            <div className="view-all">
              <a href="#">View all episodes</a>
            </div>
          </div>
        </div>
      </section>

      <div className="block-2">
        <img src={img8} alt="" />
        <div className="text">
          <span className="gea">Tips & Tricks</span>
          <p className="pg-1">
            Mic tricks to take <br /> you to the next level
          </p>
          <p>
            Stop rolling with those default settings on your mic. These small
            tweaks will <br /> take you from sounding good to great.
          </p>
          <br />
          <br />
          <div className="inm">
            <a href="#">View all episodes</a>
          </div>
        </div>
      </div>

      <div className="block-3">
        <img src={img9} alt="" />
        <div className="text">
          <span className="gea">Gear</span>
          <p className="pg-1">
            The best microphone <br /> under \$200
          </p>
          <p>
            With so many microphones on the market, how are you supposed to know{" "}
            <br /> what's the best? Take a look at our top picks.
          </p>
          <br />
          <br />
          <div className="inm">
            <a href="#">View all episodes</a>
          </div>
        </div>
      </div>

      <div className="paul">
        <div className="pau-1">
          <img src={img10} alt="" />
          <span className="ps-1">Meet your host</span>
          <br />
          <br />
          <span className="ps-2" id="host-name">
            Jacob Paulaner
          </span>
          <p className="ps-3">
            Jacob has a background in audio engineering, and has <br /> been
            podcasting since the early days.
          </p>
          <br />
          <p className="ps-3">
            He's here to help you level up your game by sharing <br />{" "}
            everything he's learned along the way.
          </p>
        </div>
        <div className="pau-2">
          <img src={img11} alt="" />
        </div>
      </div>

      <div className="subrice" id="3">
        <div className="subscribe-container">
          <span>
            Subscribe <br /> for updates
          </span>
        </div>
        <div className="subrice-2">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      <div className="box">
        <div className="card">
          <div className="rating">★★★★★</div>
          <p className="parag">
            I can't recommend <br /> this podcast <br /> enough
          </p>
          <p className="author">Betty Lacey</p>
        </div>
        <div className="card">
          <div className="rating">★★★★★</div>
          <p className="parag">
            Jacob is the best <br /> in the business
          </p>
          <p className="author">Adam Driver</p>
        </div>
        <div className="card">
          <div className="rating">★★★★★</div>
          <p className="parag">
            A wealth of audio <br /> knowledge
          </p>
          <p className="author">Marcus Brown</p>
        </div>
        <div className="card">
          <div className="rating">★★★★★</div>
          <p className="parag">
            Every episode is a <br /> gem!
          </p>
          <p className="author">Jessica Knowl</p>
        </div>
        <div className="card">
          <div className="rating">★★★★★</div>
          <p className="parag">
            Whoa whoa, let me <br /> take some notes!
          </p>
          <p className="author">Scott Adams</p>
        </div>
        <div className="card">
          <div className="rating">★★★★★</div>
          <p className="parag">
            I've upped my <br /> game considerably <br /> since I started
          </p>
          <p className="author">Steven Blast</p>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <div className="logo-2">
            <h1>Castaway</h1>
            <div className="social-icons">
              <a href="#">
                <img src={img12} alt="" />
              </a>
              <a href="#">
                <img src={img13} alt="" />
              </a>
            </div>
          </div>
          <div className="footer-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Episodes</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Style Guide</a>
              </li>
              <li>
                <a href="#">Instructions</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Credit</a>
              </li>
              <li>
                <a href="#">Powered by Webflow</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
            </ul>
          </div>
          <div className="icons">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}
