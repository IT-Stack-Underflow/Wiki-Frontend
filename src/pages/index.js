import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>cra-react to gatsby</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <h1>Hello Gatsby!</h1>
      <Link to="/description"> This Project is...</Link>
    </>
  );
}
