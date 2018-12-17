import Head from 'next/head'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  render() {
    return (
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="/static/css/style.css"/>
				<script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-NW83JTW');`}} />
			</Head>
    );
  }
}

export default Header;
