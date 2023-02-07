import "./navbar.css";
import CartWidgets from "../CartWidgets/CartWidgets";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <div className="productos">
        <ul>
          <li>
            <a href="*" >Nosotros</a> 
          </li>
          <li>
            <a href="*">Alimento para perros</a>
          </li>
          <li>
            <a href="*">Alimento para gatos</a>
          </li>
          <li>
            <a href="*">Accesorios</a>
          </li>
        </ul>
      </div>
      <div>
        <CartWidgets />
      </div>
    </div>
  );
};

export default NavBar;
