import {LocationIcon, StarIcon} from '@assets';
import {DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT} from '@constants';
import {Box, createStyles, Flex, List, Stack, Text, Title} from '@mantine/core';
import {responsiveWidth} from '@utils';

const JobPage = () => {
  const {classes, cx} = useStyles();

  return (
    <Flex
      justify="flex-start"
      align="center"
      direction="column"
      gap={20}
      pt={40}
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      <Flex justify={'flex-start'} align={'center'} className={classes.wrapper} pos="relative" gap={16}>
        <Box className={classes.iconWrapper}>
          <StarIcon />
        </Box>
        <Stack spacing={12.5}>
          <Text className={classes.textBold} size="l">
            Менеджер-дизайнер
          </Text>
          <Flex gap={responsiveWidth(12)} justify={'flex-start'} align={'center'}>
            <Text className={cx(classes.title, classes.textBold)}>з/п от 700000 rub </Text>
            <Text className={classes.circle}>•</Text>
            <Text className={classes.title}>Полный рабочий день</Text>
          </Flex>

          <Flex gap={responsiveWidth(8)}>
            <LocationIcon />
            <Text styles={classes.text}>Новый Уренгой</Text>
          </Flex>
        </Stack>
      </Flex>

      <Flex justify={'flex-start'} align={'flex-start'} className={classes.wrapper} direction="column">
        <Flex gap={responsiveWidth(16)} direction="column">
          <Title size="s" className={classes.title}>
            Обязанности:
          </Title>

          <List>
            <List.Item>
              Разработка дизайн-макетов для наружной, интерьерной рекламы, полиграфии, сувенирной продукции.
            </List.Item>
            <List.Item>Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.</List.Item>
            <List.Item>Создание дизайна логотипов и брендбуков</List.Item>
            <List.Item>Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка</List.Item>
          </List>
        </Flex>
        <Flex gap={responsiveWidth(16)} direction="column">
          <Title size="s" className={classes.title}>
            Требования:
          </Title>
          <List>
            <List.Item>Собеседование – после успешного прохождения тестового задания</List.Item>
            <List.Item>Рассматриваются кандидаты только с опытом работы</List.Item>
            <List.Item>Обязательно - наличие портфолио</List.Item>
            <List.Item>
              Умение самостоятельно принимать решения, умение объективно оценивать свою работу, работать в режиме
              многозадачности и переключаться с одного задания к другому и планировать свой день. Соблюдать сроки.
            </List.Item>
            <List.Item>Ответственный, исполнительный, целеустремленный, большим плюсом будет опыт управления</List.Item>
          </List>
        </Flex>
        <Flex gap={responsiveWidth(16)} direction="column">
          <Title size="s" className={classes.title}>
            Условия:
          </Title>
          <List>
            <List.Item>Оформление по контракту</List.Item>
            <List.Item>Полный социальный пакет</List.Item>
            <List.Item>Премирование по результатам работы</List.Item>
          </List>
        </Flex>
      </Flex>
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
