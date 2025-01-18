import '../App.css'
import NavigationBar from '../navbar.jsx'
import PallaviPicture from '../images/PallaviProfilePic.png'
function Home() {
  return (
    <>
    <div id = "content">
    <img id="homeImg" src={PallaviPicture} width='400' height='600'></img>
        <p id = "contentp">
        I’m Pallavi Saxena, a Cognitive Science and Economics student at Barnard College, Columbia University. I have a strong passion for research, marketing, public health, and community development. Through experiences like conducting research on maternal health and psychiatric disorders at Dartmouth and crafting market strategies for businesses, I’ve developed a skill set that blends analytical rigor with creative problem-solving. I hold a deep appreciation for integrating data-driven insights with a deep understanding of human behavior to better understand the world and its dysfunctions. Outside of academics, I am committed to fostering community and professional growth through leadership in organizations like Barnard Investment Group where I work to empower women in finance and enhance engagement on campus.
        </p>
    </div>
    
        
        
        
    </>
  )
}

export default Home