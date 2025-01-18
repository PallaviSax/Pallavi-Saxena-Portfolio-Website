import '../App.css';
import NavigationBar from '../navbar.jsx';
import AcapellaPic from '../images/PallaviAcapella.png';

function Home() {
  return (
    <>
      <div id="icontent">
        <img id="iImg" src={AcapellaPic} alt="Pallavi Acapella" />
        <p id="icontentp">
          In my free time on campus, I sing and perform with Barnard's Acapella group, <a href="https://bacchantae.com/">Bacchantae</a>, and volunteer with Columbia's <a href="https://www.brainexerciseinitiative.com/">Brain Exercise Initiative</a>, helping Alzheimer's patients with memory retention through exercises. In general, I love singing all genres of music from classical to pop and recently began experimenting with remixing music and making my own for fun. I also enjoy reading books that dive deep into human behavior and societal issues like "Talking to Strangers" by Malcolm Gladwell.
        </p>
        <iframe id="vid" width="560" height="315" src="https://www.youtube.com/embed/p3IKc3Y6n-U?si=f5nLnHeYho107WYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}

export default Home;
