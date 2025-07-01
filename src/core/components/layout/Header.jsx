import { Link } from 'react-router-dom';
import {Menu, Button} from '/src/core/kendo';

const menuItems = [
  { text: 'Home', render:() => <Link to="/">Home</Link> },
  { text: 'Marque', render:() => <Link to="/brands/list">Marque</Link> },
  { text: 'Voiture',
    'items': [{ text: 'Ajouter', render:() => <Link to="/cars/add">Ajouter</Link> },
            { text: 'Lister', render:() => <Link to="/cars/list">Lister</Link> }] }
];


function Header() {
  return (
    <div style={{padding: '10px', backgroundColor: '#f5f5f5'}}>
        <Menu 
        style={{ width: '100%' }}
        items={menuItems} />
        
    </div>
  );
}

export default Header;