import React, { useState, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';

// Create a context to manage the active item
const ActiveItemContext = createContext();

const ListItem = ({ to, item }) => {
  const { activeItem, setActiveItem } = useContext(ActiveItemContext);

  const handleClick = () => {
    setActiveItem(item);
  };

  return (
    <li>
      <Link
        to={to}
        className={activeItem === item ? 'active-blog' : ''}
        onClick={handleClick}
      >
        {item.toUpperCase()}
      </Link>
    </li>
  );
};

const BlogNav = () => {
  const [activeItem, setActiveItem] = useState('business');

  return (
    <ActiveItemContext.Provider value={{ activeItem, setActiveItem }}>
      <ul>
        <ListItem to="/blog" item="blog" />
        <ListItem to="/business" item="business" />
        <ListItem to="/market" item="market" />
        <ListItem to="/consulting" item="consulting" />
        <ListItem to="/lifestyle" item="lifestyle" />
      </ul>
    </ActiveItemContext.Provider>
  );
};

export default BlogNav;
