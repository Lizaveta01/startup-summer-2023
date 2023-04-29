import {useState} from 'react';
import {Link} from 'react-router-dom';

import {Button, createStyles, Flex, Input, Select, Text} from '@mantine/core';
import {responsiveWidth} from '@utils';

enum Pages {
  SEARCH = 'Search',
  BOOKMARKS = 'Bookmarks',
}

const Filters = () => {
  const {classes, cx} = useStyles();
  const [mainPage, setMainPage] = useState<Pages>(Pages.SEARCH);

  return (
    <Flex justify={'flex-start'} align={'center'} className={classes.wrapper}>
      <Flex>
        <Text
          component={Link}
          to="/bookmarks"
          variant="link"
          className={cx(classes.link, {[classes.mainLink]: mainPage === Pages.BOOKMARKS})}
          onClick={() => setMainPage(Pages.BOOKMARKS)}>
          Избранное
        </Text>
        <Button leftIcon={<></>}>Connect to database</Button>
      </Flex>
      <Flex gap={60}>
        <Flex>
          <Text
            component={Link}
            to="/bookmarks"
            variant="link"
            className={cx(classes.link, {[classes.mainLink]: mainPage === Pages.BOOKMARKS})}
            onClick={() => setMainPage(Pages.BOOKMARKS)}>
            Избранное
          </Text>
          <Input component="select" rightSection={<></>}>
            <option value="1">1</option>
            <option value="2">2</option>
          </Input>
        </Flex>

        <Flex>
          <Text
            component={Link}
            to="/bookmarks"
            variant="link"
            className={cx(classes.link, {[classes.mainLink]: mainPage === Pages.BOOKMARKS})}
            onClick={() => setMainPage(Pages.BOOKMARKS)}>
            Избранное
          </Text>
          <Select
            label="Your favorite framework/library"
            placeholder="Pick one"
            data={[
              {value: 'react', label: 'React'},
              {value: 'ng', label: 'Angular'},
              {value: 'svelte', label: 'Svelte'},
              {value: 'vue', label: 'Vue'},
            ]}
          />
          <Select
            label="Your favorite framework/library"
            placeholder="Pick one"
            data={[
              {value: 'react', label: 'React'},
              {value: 'ng', label: 'Angular'},
              {value: 'svelte', label: 'Svelte'},
              {value: 'vue', label: 'Vue'},
            ]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    gap: responsiveWidth(280),
    height: 84,
    paddingLeft: responsiveWidth(162),
    paddingRight: responsiveWidth(162),
  },
  link: {
    fontSize: 16,
    lineHeight: 20,
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

export default Filters;
