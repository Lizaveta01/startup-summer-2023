import {em, MantineThemeOverride, rem} from '@mantine/core';
import {responsiveWidth} from '@utils';

import {Colors} from './styles';

const {GRAY_0, GRAY_1, GRAY_2, GRAY_3, GRAY_4, GRAY_5, GRAY_6, BLUE_0, BLUE_1, BLUE_2, BLUE_3, BLUE_4, BLUE_5} = Colors;

export const theme: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  loader: 'dots',
  colorScheme: 'light',
  colors: {
    gray: [GRAY_0, GRAY_1, GRAY_2, GRAY_3, GRAY_4, GRAY_5, GRAY_6],
    blue: [BLUE_0, BLUE_1, BLUE_2, BLUE_3, BLUE_4, BLUE_5],
  },
  components: {
    Text: {
      sizes: {
        xs: () => ({
          root: {
            fontSize: em(16),
            lineHeight: '19px',
            fontWeight: 400,
            '@media (max-width: 576px)': {
              fontSize: rem(14),
              lineHeight: em(14),
            },
          },
        }),
        s: () => ({
          root: {
            fontSize: rem(20),
            lineHeight: em(20),
            '@media (max-width: 576px)': {
              fontSize: rem(16),
              lineHeight: em(14),
            },
          },
        }),
        m: () => ({
          root: {
            fontSize: em(24),
            '@media (max-width: 576px)': {
              fontSize: rem(18),
            },
          },
        }),
        l: () => ({
          root: {
            fontSize: em(28),
            lineHeight: em('140%'),
            '@media (max-width: 576px)': {
              fontSize: rem(20),
              lineHeight: em(24),
            },
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
  },
};
