import logo from './logo.svg';
import './App.css';
import {Routes , Route } from 'react-router-dom';
import Menu from './components/menu';
const App = ()=>
{
  return (
	<>
	<Routes>
		<Route exact path="/" element ={<Menu/>}/>
		<Route path="back" element ={<Menu/>}/>
	</Routes>
	</>
    )
  }
export default App;
