import {Link} from 'react-router-dom';

import {LocationIcon, StarIcon} from '@assets';
import {Box, createStyles, Flex, Stack, Text} from '@mantine/core';
import {IVacancy} from '@types';
import {responsiveWidth} from '@utils';

type Props = {
  vacancy: IVacancy;
};

const VacancyItem: React.FC<Props> = ({vacancy}) => {
  const {classes, cx} = useStyles();

  return (
    <Flex justify={'flex-start'} align={'center'} className={classes.wrapper}>
      <Box className={classes.iconWrapper}>
        <StarIcon />
      </Box>
      <Stack spacing={12.5}>
        <Text component={Link} to={`vacancy/${vacancy.id}`} variant="link" className={classes.link} size="s">
          {vacancy.profession}
        </Text>
        <Flex gap={responsiveWidth(12)} justify={'flex-start'} align={'center'} w={responsiveWidth(339)}>
          <Text className={cx(classes.text, classes.textBold)}>
            з/п от {vacancy.payment} {vacancy.currency}
          </Text>
          <Text className={classes.circle}>•</Text>
          <Text className={classes.text}>{vacancy.type_of_work.title}</Text>
        </Flex>

        <Flex gap={responsiveWidth(8)}>
          <LocationIcon />
          <Text styles={classes.text}>{vacancy.town.title}</Text>
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
