import { Link, useNavigate } from 'react-router-dom';
import {Menu, Button} from '/src/core/kendo';
import { useTranslation } from 'react-i18next';
import Language from './Language';
import { useAuth } from '../../redux/AuthContext';


function Header() {
  const {user, isConnected, logout} = useAuth();
  const navigate = useNavigate();
  const {t} = useTranslation();
  const menuItems = [
    { text: t('home'), render:() => <Link to="/">{t('home')}</Link> },
    { text: t('brand'), render:() => <Link to="/brands/list">{t('brand')}</Link> },
    { text: t('cars'),
      'items': [{ text: t('add'), render:() => <Link to="/cars/add">{t('add')}</Link> },
              { text: t('list'), render:() => <Link to="/cars/list">{t('list')}</Link> }] }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div style={{padding: '10px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Menu 
        style={{ width: '100%' }}
        items={menuItems} />
        <div>
          {isConnected ? 
          (<>
          <span>{t('welcome', {name: user.name})}</span>
          <Button themeColor={'primary'} onClick={handleLogout }>{t('logout')}</Button>
          </>) :
          (<Link to="/login">Se connecter</Link>)}
        </div>
        <Language />
    </div>
  );
}

export default Header;