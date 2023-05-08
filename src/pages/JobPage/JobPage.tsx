import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {LocationIcon, StarIcon} from '@assets';
import {Colors, DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT, Screens} from '@constants';
import {useBookmarks} from '@hooks';
import {Box, createStyles, Flex, Loader, Stack, Text} from '@mantine/core';
import {getVacancy} from '@services';
import {IVacancy} from '@types';
import {responsiveWidth} from '@utils';
import parse from 'html-react-parser';

import './styles.scss';

const JobPage = () => {
  const {vacancyID} = useParams();
  const {classes} = useStyles();
  const [vacancy, setVacancy] = useState<IVacancy | null>();
  const [isLoading, setIsLoading] = useState(false);
  const {addToBookmarks, removeFromBookmarks, checkBookmarks} = useBookmarks();

  const getVacancyFromServer = useCallback(async () => {
    try {
      setIsLoading(true);
      getVacancy(vacancyID!).then((data) => {
        setIsLoading(false);
        setVacancy(data);
      });
    } catch {
      setIsLoading(false);
    }
  }, [vacancyID]);

  useEffect(() => {
    getVacancyFromServer();
  }, [getVacancyFromServer]);

  return (
    <Flex justify="flex-start" align="center" direction="column" bg="gray.1" h={'100%'} mih={'100vh'}>
      {isLoading && (
        <Flex h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
          <Loader color="blue.4" />
        </Flex>
      )}
      {vacancy && (
        <Flex justify="flex-start" align="center" direction="column" gap={20} pb={51} pt={40}>
          <Flex justify="flex-start" align="center" className={classes.wrapper}>
            <Box
              className={classes.iconWrapper}
              onClick={() => {
                checkBookmarks(vacancy) ? removeFromBookmarks(vacancy) : addToBookmarks(vacancy);
              }}>
              <StarIcon
                color={checkBookmarks(vacancy) ? Colors.BLUE_4 : Colors.GRAY_4}
                fill={checkBookmarks(vacancy) ? Colors.BLUE_4 : 'none'}
              />
            </Box>
            <Stack spacing={12.5}>
              <Text size="l" pr={20} weight={600}>
                {vacancy.profession}
              </Text>
              <Flex gap={responsiveWidth(12)} justify="flex-start" align="center">
                <Text size="s" weight={600}>
                  з/п от {vacancy.payment_from} {vacancy.currency}
                </Text>
                <Text className={classes.circle}>•</Text>
                <Text size="s">{vacancy.type_of_work.title}</Text>
              </Flex>

              <Flex gap={responsiveWidth(8)} align="center">
                <LocationIcon />
                <Text size="xs">{vacancy.town.title}</Text>
              </Flex>
            </Stack>
          </Flex>
          <Flex justify="flex-start" align="flex-start" className={classes.wrapper} direction="column">
            {parse(vacancy.vacancyRichText.replace(/-/g, '•'))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: responsiveWidth(773),
    backgroundColor: theme.colors.gray[0],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray[2],
    padding: 24,
    position: 'relative',
    gap: 16,

    [`@media (max-width: ${Screens.TABLET}px)`]: {
      width: '100%',
      padding: 12,
    },
  },
  link: {
    fontWeight: 600,
    color: theme.colors.blue[4],
    cursor: 'pointer',
    lineHeight: '24px',
  },
  iconWrapper: {
    position: 'absolute',
    right: responsiveWidth(24),
    top: responsiveWidth(24),
    cursor: 'pointer',
  },
  circle: {
    fontFamily: 'Poppins',
    color: theme.colors.gray[5],
    fontSize: 20,
    lineHeight: '21px',
  },
}));

export default JobPage;
