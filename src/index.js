import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from './components/Card';
import Sdata from './components/Sdata';

ReactDOM.render(
  <>
  <h1 className="heading_style">List of top Netflix Series</h1>
   
 {Sdata.map((val) => {
 return(
  <Card 
  key={val.id}
  imgsrc={val.imgsrc}
  title={val.title} 
  sname={val.sname} 
  link={val.link} /> 
 );
 })
 }
 </>,
  document.getElementById('root')
);
