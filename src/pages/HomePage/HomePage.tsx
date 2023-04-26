import React from 'react';

import {createStyles, Text} from '@mantine/core';

const HomePage = () => {
  const {classes} = useStyles();
  return (
    <div className={classes.wrapper}>
      <Text className="title">Home Page</Text>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.gray[1],
  },
}));

export default HomePage;
