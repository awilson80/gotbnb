import logo from '../img/logo.png';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='gotbnb logo' className='navbar-logo' />
    </nav>
  );
}
