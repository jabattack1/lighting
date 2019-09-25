import React from 'react';
import { Provider } from 'rendition';
import styled, { createGlobalStyle } from 'styled-components';
import { ArcSlider, Box, Checkbox, Flex, Table, Txt } from 'rendition';

import { Nav } from './components/Nav';
import Devices from './components/Devices';

const GlobalStyle = createGlobalStyle([], {
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    minHeight: '100%',
  },
  body: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
  '#root': {
    minHeight: '100vh',
  },
});

const FullHeightProvider = styled(Provider)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin: 0 auto;
  margin-top: 20px;
`;

const SAMPLE_DATA = [
  {
    id: 1,
    name: 'Balcony',
    active: false,
    brightness: 0,
    brightOn: 0,
    selected: false,
  },
  {
    id: 2,
    name: 'Bedroom 01',
    active: false,
    brightness: 0,
    brightOn: 0,
    selected: false,
  },
  {
    id: 3,
    name: 'Bedroom 02',
    active: false,
    brightness: 0,
    brightOn: 0,
    selected: false,
  },
];

export const App = () => {
  return (
    <FullHeightProvider>
      <GlobalStyle />
      <Nav />
      <Heading>ROOM ILLUMINATOR</Heading>

      <Devices data={SAMPLE_DATA} />
    </FullHeightProvider>
  );
};
