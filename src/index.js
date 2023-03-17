import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
	margin: 0;
 }
 * {
	box-sizing: border-box;
 }
 li {
	list-style: none;
 }
 p,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
	margin: 0px;
 }
 ul {
	margin: 0;
	padding-left: 0;
 }
 img {
	display: block;
	width: 100%;
	height: auto;
 }
 font-family: Montserrat;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<GlobalStyles/>
    <App />
  </React.StrictMode>
);
