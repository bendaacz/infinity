import { slide as Menu } from 'react-burger-menu';
import "./index.css";

export default MobileNav => {
  return (
    <Menu>
      <a className="text-white" href="/">
        Home
      </a>
      <a className="menu-item" href="/mobile/contact">
        about
      </a>
      <a className="menu-item" href="/mobile/about">
        Pizzas
      </a>
      <a className="menu-item" href="/mobile/sign-up">
        Desserts
      </a>
      <a className="menu-item" href="/mobile/sign-in">
        Desserts
      </a>
    </Menu>
  );
};