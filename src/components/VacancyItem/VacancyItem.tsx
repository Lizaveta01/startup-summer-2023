import {Link} from 'react-router-dom';

import {LocationIcon, StarIcon} from '@assets';
import {Colors, Screens} from '@constants';
import {Box, createStyles, Flex, Text} from '@mantine/core';
import {IVacancy} from '@types';
import {responsiveWidth} from '@utils';

type Props = {
  vacancy: IVacancy;
  onClickAdd: () => void;
  onClickRemove: () => void;
  isBookmarked: boolean;
};

const VacancyItem: React.FC<Props> = ({vacancy, isBookmarked, onClickAdd, onClickRemove}) => {
  const {classes} = useStyles();

  return (
    <Flex justify="flex-start" align="center" className={classes.wrapper} data-elem={`vacancy-${vacancy.id}`}>
      <Box
        className={classes.iconWrapper}
        onClick={isBookmarked ? onClickRemove : onClickAdd}
        data-elem={`vacancy-${vacancy.id}-shortlist-button`}>
        <StarIcon color={isBookmarked ? Colors.BLUE_4 : Colors.GRAY_4} fill={isBookmarked ? Colors.BLUE_4 : 'none'} />
      </Box>
      <Flex gap={12} direction="column">
        <Text component={Link} to={`/vacancy/${vacancy.id}`} variant="link" className={classes.link} size="s">
          {vacancy.profession}
        </Text>
        <Flex gap={responsiveWidth(12)} justify="flex-start" align="center">
          <Text size="xs" weight={600}>
            з/п от {vacancy.payment_from} {vacancy.currency}
          </Text>
          <Text className={classes.circle}>•</Text>
          <Text size="xs">{vacancy.type_of_work.title}</Text>
        </Flex>

        <Flex gap={responsiveWidth(8)} align="center">
          <LocationIcon />
          <Text size="xs">{vacancy.town.title}</Text>
        </Flex>
      </Flex>
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

    [`@media (max-width: ${Screens.TABLET}px)`]: {
      width: '90vw',
      padding: 12,
    },
  },
  link: {
    fontWeight: 600,
    color: theme.colors.blue[4],
    cursor: 'pointer',
    lineHeight: '24px',
    width: responsiveWidth(670),
    [`@media (max-width: ${Screens.TABLET}px)`]: {
      width: '90%',
    },
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
