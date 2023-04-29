import {ArrowIcon, CancelIcon} from '@assets';
import {Button, createStyles, Flex, Select, Text} from '@mantine/core';
import {responsiveWidth} from '@utils';

const Filters = () => {
  const {classes, cx} = useStyles();

  return (
    <Flex justify={'flex-start'} align={'flex-start'} direction="column" className={classes.wrapper}>
      <Flex justify="space-between" align="center" w={responsiveWidth(275)}>
        <Text className={classes.text} size="s">
          Фильтры
        </Text>
        <Button rightIcon={<CancelIcon />} variant="subtle" color="gray.5">
          Сбросить все
        </Button>
      </Flex>
      <Flex direction="column" gap={20}>
        <Flex direction="column" gap={8}>
          <Text className={classes.text}>Отрасль</Text>
          <Select
            size="sm"
            radius={8}
            className={classes.input}
            placeholder="Выберете отрасль"
            rightSection={<ArrowIcon />}
            rightSectionWidth={36}
            data={[
              {value: 'react', label: 'React'},
              {value: 'ng', label: 'Angular'},
              {value: 'svelte', label: 'Svelte'},
              {value: 'vue', label: 'Vue'},
            ]}
          />
        </Flex>

        <Flex direction="column" gap={8}>
          <Text className={classes.text}>Оклад</Text>
          <Select
            size="sm"
            radius={8}
            className={classes.input}
            placeholder="От"
            data={[
              {value: 'react', label: 'React'},
              {value: 'ng', label: 'Angular'},
              {value: 'svelte', label: 'Svelte'},
              {value: 'vue', label: 'Vue'},
            ]}
          />
          <Select
            size="sm"
            radius={8}
            placeholder="До"
            className={classes.input}
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
    gap: 32,
    width: responsiveWidth(315),
    backgroundColor: theme.colors.gray[0],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gray[2],
    padding: responsiveWidth(20),
  },
  text: {
    fontWeight: 700,
  },
  input: {
    width: responsiveWidth(275),
  },
}));

export default Filters;
