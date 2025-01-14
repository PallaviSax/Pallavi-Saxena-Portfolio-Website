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
					               <li><a href="#/Works">Works</a></li>
					               <li><a href="#/Fun">Fun</a></li>
					          </ul>
					     </div>
					    </nav>
           </>
    )
}

export default NavigationBar