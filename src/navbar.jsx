import './navbar.css'

function NavigationBar(){
    return(
           <>
	           <nav>
					     <h1 id= "name">
					         Pallavi Saxena
					     </h1>
					     <div>
					          <ul id = "navbar">
					               <li><a href="#/Home">Home</a> </li>
					               <li><a href="#/Experience">Experience</a></li>
					               <li><a href="#/Interests">Interests</a></li>
					          </ul>
					     </div>
				</nav>
           </>
    )
}

export default NavigationBar