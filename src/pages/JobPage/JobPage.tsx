import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {LocationIcon, StarIcon} from '@assets';
import {DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT} from '@constants';
import {Box, createStyles, Flex, List, Stack, Text, Title} from '@mantine/core';
import {IVacancy} from '@types';
import {responsiveWidth} from '@utils';

const JobPage = () => {
  const {vacancyID} = useParams();
  const {classes, cx} = useStyles();
  const [vacancy, setVacancy] = useState<IVacancy | null>();

  const getItems = (itemsType: string) =>
    itemsType
      .split('\n')
      .filter((line) => line.startsWith('• '))
      .map((item, index) => <List.Item key={index}>{item.slice(2)}</List.Item>);

  useEffect(() => {}, []);
  return (
    <Flex
      justify="flex-start"
      align="center"
      direction="column"
      gap={20}
      pt={40}
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      {vacancy && (
        <>
          <Flex justify={'flex-start'} align={'center'} className={classes.wrapper} pos="relative" gap={16}>
            <Box className={classes.iconWrapper}>
              <StarIcon />
            </Box>
            <Stack spacing={12.5}>
              <Text className={classes.textBold} size="l">
                {vacancy.profession}
              </Text>
              <Flex gap={responsiveWidth(12)} justify={'flex-start'} align={'center'}>
                <Text className={cx(classes.title, classes.textBold)}>
                  з/п от {vacancy.payment} {vacancy.currency}
                </Text>
                <Text className={classes.circle}>•</Text>
                <Text className={classes.title}>{vacancy.type_of_work.title}</Text>
              </Flex>

              <Flex gap={responsiveWidth(8)}>
                <LocationIcon />
                <Text styles={classes.text}>{vacancy.town.title}</Text>
              </Flex>
            </Stack>
          </Flex>
          <Flex justify={'flex-start'} align={'flex-start'} className={classes.wrapper} direction="column">
            <Flex gap={responsiveWidth(16)} direction="column">
              <Title size="s" className={classes.title}>
                Обязанности:
              </Title>
              <List>{getItems(vacancy.work)}</List>
            </Flex>
            <Flex gap={responsiveWidth(16)} direction="column">
              <Title size="s" className={classes.title}>
                Требования:
              </Title>
              <List>{getItems(vacancy.candidat)}</List>
            </Flex>
            <Flex gap={responsiveWidth(16)} direction="column">
              <Title size="s" className={classes.title}>
                Условия:
              </Title>
              <List>{getItems(vacancy.compensation)}</List>
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    gap: 20,
    width: responsiveWidth(773),
    backgroundColor: theme.colors.gray[0],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray[2],
    padding: 24,
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
  title: {
    fontSize: 20,
    lineHeight: '20px',
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
