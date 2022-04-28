import logo from './logo.svg';
import './Assets/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import { useEffect } from 'react';
import Auditorium from './Components/Auditorium';
import Articles from "./Pages/Articles"
import Article from "./Pages/ArticlePage"


import Programmepage from './Pages/Programmepage';
import Workshops from './Components/Workshops';
import Navbar from './Components/Navbar';

import Inscription from './Pages/Contact'
import Stand from './Components/Stand'
// import BlogEditor from './Pages/BlogEditor';
import BlogDelete from './Pages/BlogDelete';

function App() {
  useEffect(() => {
    showLoader();
    addClass();
  }, []);
const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader");
const addClass = () => loader.classList.add("loader-hide");
  return (
  <>
   
   <Router>
   <Navbar/>
        <Switch>
          
          <Route exact path="/"><Home/></Route>

          <Route exact path="/programme"><Programmepage/></Route>
          <Route exact path="/Workshop"><Workshops/></Route>
          <Route exact path="/Stand"><Stand/></Route>
          <Route exact path="/articles"><Articles/></Route>
          <Route exact path="/articles/:articleId"><Article/></Route>



          <Route exact path="/inscription"><Inscription/></Route>

       

          {/* <Route exact path="/ejeBLog"><BlogEditor/></Route> */}
          <Route exact path="/ejeDelete"><BlogDelete/></Route>
  
          <Route exact path="/auditorium"><Auditorium/></Route>

        </Switch>
      </Router> 
  </>
  );
}

export default App;
