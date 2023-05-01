import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {App} from '@app';
import {em, MantineProvider} from '@mantine/core';

import {responsiveWidth} from './utils/responsiveWidth';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Inter, sans-serif',
          loader: 'dots',
          colorScheme: 'light',
          colors: {
            gray: ['#FFFFFF', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88', '#232134'],
            blue: ['#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#3B7CD3'],
          },
          components: {
            Text: {
              sizes: {
                xs: () => ({
                  root: {
                    lineHeight: em(20),
                    fontSize: em(14),
                  },
                }),
                s: () => ({
                  root: {
                    lineHeight: em(20),
                    fontSize: em(20),
                  },
                }),
                m: () => ({
                  root: {
                    lineHeight: em('140%'),
                    fontSize: em(16),
                  },
                }),
                l: () => ({
                  root: {
                    lineHeight: em('140%'),
                    fontSize: em(28),
                  },
                }),
              },
            },
            Button: {
              sizes: {
                s: () => ({
                  root: {
                    padding: `${responsiveWidth(9.5)} ${responsiveWidth(20)}`,
                  },
                }),

                m: (theme) => ({
                  root: {
                    fontSize: '1.75rem',
                    height: '5rem',
                    padding: theme.spacing.xl,
                  },
                }),
              },
            },
            Input: {
              styles: (theme) => ({
                input: {
                  borderColor: theme.colors.gray[2],
                  fontSize: 14,
                  lineHeight: 21,
                  color: theme.colors.gray[5],
                  '&:focus': {
                    borderColor: theme.colors.blue[5],
                  },
                },
              }),
            },
            List: {
              styles: () => ({
                item: {
                  lineHeight: '140%',
                  fontSize: 16,
                  paddingLeft: 9,
                  paddingRight: 24,
                },
              }),
            },
          },
        }}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
