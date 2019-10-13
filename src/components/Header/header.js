import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Header = ({ siteTitle = 'No title' }) => (
  <Container>
    <header>
      <div>
        <h1>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  </Container>
);

const Container = styled.div`
  header {
    background: rebeccapurple;
    margin-bottom: 1.45rem;

    div {
      margin: 0 auto;
      max-width: 960;
      padding: 1.45rem 1.0875rem;

      h1 {
        margin: 0;
      }
    }
  }
`;

export default Header;
