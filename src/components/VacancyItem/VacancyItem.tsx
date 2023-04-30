import {Link} from 'react-router-dom';

import {LocationIcon, StarIcon} from '@assets';
import {Box, createStyles, Flex, Stack, Text} from '@mantine/core';
import {responsiveWidth} from '@utils';

const VacancyItem = () => {
  const {classes, cx} = useStyles();

  return (
    <Flex justify={'flex-start'} align={'center'} className={classes.wrapper}>
      <Box className={classes.iconWrapper}>
        <StarIcon />
      </Box>
      <Stack spacing={12.5}>
        <Text component={Link} to="/" variant="link" className={classes.link} size="s">
          Поиск Вакансий
        </Text>
        <Flex gap={responsiveWidth(12)} justify={'flex-start'} align={'center'} w={responsiveWidth(339)}>
          <Text className={cx(classes.text, classes.textBold)}>з/п от 700000 rub </Text>
          <Text className={classes.circle}>•</Text>
          <Text className={classes.text}>Полный рабочий день</Text>
        </Flex>

        <Flex gap={responsiveWidth(8)}>
          <LocationIcon />
          <Text styles={classes.text}>Новый Уренгой</Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    gap: 12,
    width: responsiveWidth(773),
    backgroundColor: theme.colors.gray[0],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray[2],
    padding: 24,
    position: 'relative',
    height: 137,
  },
  link: {
    fontWeight: 600,
    color: theme.colors.blue[4],
    cursor: 'pointer',
    lineHeight: '24.2px',
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '19px',
  },
  textBold: {
    fontWeight: 600,
  },
  circle: {
    fontFamily: 'Poppins',
    color: theme.colors.gray[5],
    fontSize: 20,
    lineHeight: '21px',
  },
  iconWrapper: {
    position: 'absolute',
    right: responsiveWidth(24),
    top: responsiveWidth(24),
    cursor: 'pointer',
  },
}));

export default VacancyItem;
