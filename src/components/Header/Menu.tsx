import {useState} from 'react';
import {Link} from 'react-router-dom';

import {createStyles, Text} from '@mantine/core';

enum Pages {
  SEARCH = 'Search',
  BOOKMARKS = 'Bookmarks',
}

type Props = {
  toggle?: () => void;
};

const Menu: React.FC<Props> = ({toggle}) => {
  const {classes, cx} = useStyles();
  const [mainPage, setMainPage] = useState<Pages>(Pages.SEARCH);

  return (
    <>
      <Text
        component={Link}
        to="/"
        variant="link"
        className={cx(classes.link, {[classes.mainLink]: mainPage === Pages.SEARCH})}
        onClick={() => {
          setMainPage(Pages.SEARCH);
          toggle && toggle();
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
          toggle && toggle();
        }}>
        Избранное
      </Text>
    </>
  );
};

const useStyles = createStyles((theme) => ({
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

export default Menu;
