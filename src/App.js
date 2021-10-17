import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Management from './components/Management'
import Principal from './components/Principal'
import Adp from './components/Adp'
import Facilities from './components/Facilities'
import Team from './components/Team'
import GalleryPhoto from './components/GalleryPhoto'
import Contact from './components/Contact'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Director from "./components/Director"
import Manu from './components/Manu'


function App() {
    return (
        <div>
         <BrowserRouter>
        <Switch>
        <Route exact path="/School" component={Home} />
        <Route exact path="/gallery" component={GalleryPhoto} />
         
          <Route exact path="/contact" component={Contact} />
         
        
          <Route exact path="/principal" component={ Principal} />
          <Route exact path="/management" component={Management} />
          <Route exact path="/about" component={About} />
          <Route exact path="/adp" component={Adp} />
          <Route exact path="/director" component={Director} />
          <Route exact path="/facilities" component={Facilities} />
          <Route exact path="/team" component={Team} />
        </Switch>
      </BrowserRouter> 
     

        </div>
    )
}

export default App
