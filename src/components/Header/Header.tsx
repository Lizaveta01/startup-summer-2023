import {useState} from 'react';
import {Link} from 'react-router-dom';

import {Logo} from '@assets';
import {Box, Burger, createStyles, Drawer, Flex} from '@mantine/core';
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import {responsiveWidth} from '@utils';

import Menu from './Menu';

export enum Pages {
  SEARCH = 'Search',
  BOOKMARKS = 'Bookmarks',
}

const HeaderComponent = () => {
  const {classes} = useStyles();
  const [opened, {toggle}] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 758px)');
  const [mainPage, setMainPage] = useState<Pages>(Pages.SEARCH);

  return (
    <Flex justify={'flex-start'} align={'center'} className={classes.wrapper}>
      <Box
        component={Link}
        to="/"
        sx={{cursor: 'pointer'}}
        onClick={() => {
          setMainPage(Pages.SEARCH);
        }}>
        <Logo />
      </Box>
      {isMobile ? (
        <Burger opened={opened} onClick={toggle} style={{position: 'absolute', right: 20}} />
      ) : (
        <Flex gap={60}>
          <Menu mainPage={mainPage} setMainPage={setMainPage} />
        </Flex>
      )}
      <Drawer opened={opened} onClose={toggle} position="top">
        <Flex direction="column" gap={20} align="center">
          <Menu toggle={toggle} mainPage={mainPage} setMainPage={setMainPage} />
        </Flex>
      </Drawer>
    </Flex>
  );
};

const useStyles = createStyles(() => ({
  wrapper: {
    gap: responsiveWidth(280),
    height: 84,
    padding: `0 ${responsiveWidth(162)}`,
    position: 'relative',
  },
}));

export default HeaderComponent;
