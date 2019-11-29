import React from 'react';
import './index.css';

export default function() {
  return (
    <ul className='NavBar'>
      <li><NavBarLink url='' text='Proxies' /></li>
      <li><NavBarLink url='https://github.com/OpenZeppelin/proxy-explorer' text='GitHub' /></li>
    </ul>
  );
}

function NavBarLink({ url, text }) {
  return (
    <a target='_blank' rel='noopener noreferrer' href={url}>{text}</a>
  );
}
