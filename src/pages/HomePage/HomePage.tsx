import React from 'react';

import {NotFoundComponent} from '@components';
import {createStyles, Flex, Text} from '@mantine/core';
import {responsiveWidth} from '@utils';

const HomePage = () => {
  const {classes} = useStyles();
  return (
    <Flex justify="center" align="center" bg="gray.1" h={`${100 - (84 / 900) * 100}vh`}>
      <NotFoundComponent />
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: theme.colors.gray[1],
  },
}));

export default HomePage;
