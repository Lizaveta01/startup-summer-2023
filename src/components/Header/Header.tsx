import {useState} from 'react';
import {Link} from 'react-router-dom';

import {Logo} from '@assets';
import {Box, Burger, createStyles, Drawer, Flex, Text} from '@mantine/core';
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import {responsiveWidth} from '@utils';

enum Pages {
  SEARCH = 'Search',
  BOOKMARKS = 'Bookmarks',
}

const HeaderComponent = () => {
  const {classes, cx} = useStyles();
  const [mainPage, setMainPage] = useState<Pages>(Pages.SEARCH);
  const [opened, {toggle}] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 758px)');

  return (
    <Flex justify={'flex-start'} align={'center'} className={classes.wrapper}>
      <Box>
        <Logo />
      </Box>
      {isMobile ? (
        <Burger opened={opened} onClick={toggle} style={{position: 'absolute', right: 20}} />
      ) : (
        <Flex gap={60}>
          <Text
            component={Link}
            to="/"
            variant="link"
            className={cx(classes.link, {[classes.mainLink]: mainPage === Pages.SEARCH})}
            onClick={() => setMainPage(Pages.SEARCH)}>
            Поиск Вакансий
          </Text>
          <Text
            component={Link}
            to="/bookmarks"
            variant="link"
            className={cx(classes.link, {[classes.mainLink]: mainPage === Pages.BOOKMARKS})}
            onClick={() => setMainPage(Pages.BOOKMARKS)}>
            Избранное
          </Text>
        </Flex>
      )}
      <Drawer opened={opened} onClose={toggle} position="top">
        <Flex direction={'column'} gap={20} align={'center'}>
          <Text
            component={Link}
            to="/"
            variant="link"
            className={cx(classes.link, {[classes.mainLink]: mainPage === Pages.SEARCH})}
            onClick={() => {
              setMainPage(Pages.SEARCH);
              toggle();
            }}>
            Поиск Вакансий
          </Text>
          <Text
            component={Link}
            to="/bookmarks"
            variant="link"
            className={cx(classes.link, {[classes.mainLink]: mainPage === Pages.BOOKMARKS})}
            onClick={() => {
              setMainPage(Pages.BOOKMARKS);
              toggle();
            }}>
            Избранное
          </Text>
        </Flex>
      </Drawer>
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    gap: responsiveWidth(280),
    height: 84,
    paddingLeft: responsiveWidth(162),
    paddingRight: responsiveWidth(162),
    position: 'relative',
  },
  link: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 400,
    color: theme.colors.gray[6],
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colors.blue[4],
      textDecoration: 'none',
    },
  },
  mainLink: {
    color: theme.colors.blue[4],
    fontWeight: 500,
  },
}));

export default HeaderComponent;
