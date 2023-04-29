import {Link} from 'react-router-dom';

import {createStyles, Flex, Stack, Text} from '@mantine/core';
import {responsiveWidth} from '@utils';

const VacancyItem = () => {
  const {classes} = useStyles();

  return (
    <Flex justify={'flex-start'} align={'center'} className={classes.wrapper}>
      <Stack>
        <Text component={Link} to="/" variant="link" styles={classes.link} size="m">
          Поиск Вакансий
        </Text>
        <Flex>
          <Text styles={[classes.text, classes.textBold]}>з/п от 70000 rub</Text>
          <Text styles={classes.circle}>•</Text>
          <Text styles={classes.text}>Полный рабочий день</Text>
        </Flex>

        <Flex>
          <Text styles={classes.text}>Новый Уренгой</Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    gap: responsiveWidth(12),
    width: responsiveWidth(733),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray[2],
    padding: responsiveWidth(24),
  },
  link: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 400,
    color: theme.colors.blue[4],
    cursor: 'pointer',
  },
  text: {
    fontWeight: 400,
    lineHeight: 20,
    fontSize: 16,
  },
  textBold: {
    fontWeight: 600,
  },
  circle: {
    backgroundColor: theme.colors.gray[6],
    fontSize: 16,
    lineHeight: 20,
  },
}));

export default VacancyItem;
