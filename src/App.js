import React from 'react'
import { Link , Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserList from './UserList';
import UserShow from './UserShow';



const App =(props)=>{

  return (
    <div>
      <h1>React Routing</h1> 
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>

      <Route path='/' component={Home} exact={true}/>
      <Route path = '/About' component={About} exact={true}/>
      <Route path='/Contact' component={Contact} exact={true} />
      <Route path='/users' component={UserList} exact={true}/>
      <Route path ="/users/:id" component={UserShow} />
    </div>
  )
}

export default App;
