import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Info from './component/Info';
import About from './component/About';
import Footer from './component/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='body'>
<Info/>
<About/>
<Footer/>
 </div>
);



