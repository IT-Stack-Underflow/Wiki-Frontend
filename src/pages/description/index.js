import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

export default function Description() {
  return (
    <>
      <Helmet>
        <title>Project Description</title>
      </Helmet>
      <dl>
        <dt>This Project is..</dt>
        <dd>Stack unerflow WIKI project!</dd>
      </dl>
      <Link to="/">Home</Link>
    </>
  );
}
