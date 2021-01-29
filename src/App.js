import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import injectContext from './store/appContext';
import NotFound from "./views/notfound";
import Home from './views/home';
import { Navbar } from "./components/navbar"
import { Character } from "./views/characters"
import { Planets } from './views/planets';
import { Naves } from './views/naves';
import { Favoritos } from './views/misfavoritos';
import {Footer} from "./components/footer"



const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container h-100">
      <Switch>
        <Route exact path="/misfavoritos" component={Favoritos} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/naves" component={Naves} />
        <Route exact path="/characters" component={Character} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      </div>  
        <Footer />        
    </BrowserRouter>
  )
}

export default injectContext(App);