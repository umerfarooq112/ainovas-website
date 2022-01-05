
import {  Route, Switch } from 'react-router';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About/index';
import Solution from '../Pages/Solutions/index';
import Contact from '../Pages/Contact/index';
import Project from '../Pages/Projects/index';
import Blogs from '../Pages/HomePage/Blogs';




const NavRoutes = () => {

    return ( 
        <Switch>
             
             <Route path='/blogs'  exact  component={ Blogs} ></Route> 
             <Route path='/project'  exact  component={ Project} ></Route> 
             <Route path='/contact'  exact  component={ Contact} ></Route> 
             <Route path='/solution'  exact  component={ Solution} ></Route> 
             <Route path='/about'  exact  component={ About} ></Route> 
             <Route path='/'  exact  component={ HomePage} ></Route> 
        </Switch>
     );
}
 
export default (NavRoutes);