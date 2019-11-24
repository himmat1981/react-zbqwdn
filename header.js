import React, { Component } from 'react';
import 'tachyons';
import './style.css'
const Header = (props) =>  {
   return (
    <header className='bg tc pv4 pv5-ns'>
      <h1 className='f5 f4-ns fw6 mid-gray'>Jasper Whitehouse</h1>
      <h2 className='f6 gray fw2 ttu tracked'>Los Angeles</h2>
   </header>
  );

}
export default Header;
