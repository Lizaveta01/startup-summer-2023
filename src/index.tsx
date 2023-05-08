import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {App} from '@app';
import {theme} from '@constants';
import {MantineProvider} from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
