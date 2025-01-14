import '../App.css'
import NavigationBar from '../navbar.jsx'
import PallaviPicture from '../images/PallaviProfilePic.png'
function Home() {
  return (
    <>
        <p>
          This is a paragraph. HOMMMMME.
        </p>
        <p>
          This is used for another paragraph.
        </p>
        <img src={PallaviPicture} width='200' height='300'></img>
        <a href= "https://www.shellybhowmik.com/blog/modeling-healthy-habits-for-your-team"> Article </a>
    </>
  )
}

export default Home