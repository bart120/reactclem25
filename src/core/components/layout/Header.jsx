import {Menu, Button} from '/src/core/kendo';

const menuItems = [
  { text: 'Home', url: '/' },
  { text: 'Marque', url: '/brands/list' },
  { text: 'Voiture',
    'items': [{ text: 'Ajouter', url: '/cars/add' },{ text: 'Lister', url: '/cars/list' }] }
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