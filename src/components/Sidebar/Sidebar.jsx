import React from 'react';
import CurrentUserBlock from '../CurrentUserBlock/CurrentUserBlock';
import Navigation from '../Navigation/Navigation';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import UsersIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LockIcon from '@mui/icons-material/LockOpenOutlined';
import TextIcon from '@mui/icons-material/TextFieldsOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import SupportIcon from '@mui/icons-material/ContactSupportOutlined';
import './Sidebar.sass';

const mainRoutes = [
  {
    path: "/",
    icon: DashboardIcon,
    title: "Dashboard"
  },
  {
    path: "/users",
    icon: UsersIcon,
    title: "Users"
  },
  {
    path: "/products",
    icon: ShoppingIcon,
    title: "Products"
  },
  {
    path: "/authentication",
    icon: LockIcon,
    title: "Authentication"
  },
  {
    path: "/typography",
    icon: TextIcon,
    title: "Typography"
  },
  {
    path: "/images",
    icon: ImageIcon,
    title: "Icons & images"
  },
];

const supportRoutes = [
  {
    path: "/support",
    icon: SupportIcon,
    title: "Support"
  }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <CurrentUserBlock />
      <Navigation routes={mainRoutes} />
      <Navigation routes={supportRoutes} title={'Support'} />
    </aside>
  );
};

export default Sidebar;