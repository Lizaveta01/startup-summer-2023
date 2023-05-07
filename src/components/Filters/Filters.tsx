import {useEffect, useState} from 'react';

import {ArrowIcon, ArrowsIcon, CancelIcon} from '@assets';
import {Button, createStyles, Flex, Select, Text} from '@mantine/core';
import {getCatalogues} from '@services';
import {IFilters} from '@types';
import {responsiveWidth} from '@utils';

interface IICatalogueItem {
  value: string;
  label: string;
}
type Props = {
  onFilterChanged: (filters: IFilters) => void;
};

const Filters: React.FC<Props> = ({onFilterChanged}) => {
  const {classes} = useStyles();
  const [category, setCategory] = useState<string | null>(null);
  const [paymentFrom, setPaymentFrom] = useState<string | null>(null);
  const [paymentTo, setPaymentTo] = useState<string | null>(null);
  const [categories, setCategories] = useState<IICatalogueItem[]>([]);

  const reset = () => {
    setCategory(null);
    setPaymentFrom(null);
    setPaymentTo(null);
  };

  const getCategories = async () => {
    try {
      await getCatalogues().then((catalogues) => {
        setCategories(
          catalogues.map((item) => ({
            value: item.key + '',
            label: item.title,
          })),
        );
      });
    } catch (err) {}
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handlerSubmit = () => {
    onFilterChanged({
      payment_from: paymentFrom ? paymentFrom : '',
      payment_to: paymentTo ? paymentTo : '',
      catalogues: category ? category : '',
    });
  };

  return (
    <Flex justify={'flex-start'} align={'flex-start'} direction="column" className={classes.wrapper}>
      <Flex justify="space-between" align="center" w={responsiveWidth(275)}>
        <Text className={classes.text} size="s">
          Фильтры
        </Text>
        <Button
          rightIcon={<CancelIcon />}
          variant="subtle"
          color="gray.5"
          style={{fontWeight: 500, padding: 0, height: 20}}
          onClick={reset}
          compact>
          Сбросить все
        </Button>
      </Flex>
      <Flex direction="column" gap={20}>
        <Flex direction="column" gap={8}>
          <Text className={classes.text}>Отрасль</Text>
          <Select
            data-elem="industry-select"
            size="md"
            radius={8}
            className={classes.input}
            placeholder="Выберете отрасль"
            rightSection={<ArrowIcon />}
            rightSectionWidth={48}
            value={category}
            onChange={setCategory}
            data={categories}
          />
        </Flex>

        <Flex direction="column" gap={8}>
          <Text className={classes.text}>Оклад</Text>
          <Select
            data-elem="salary-from-input"
            size="md"
            radius={8}
            className={classes.input}
            placeholder="От"
            rightSection={<ArrowsIcon />}
            rightSectionWidth={36}
            value={paymentFrom}
            onChange={setPaymentFrom}
            data={[
              {value: '30000', label: '30 000'},
              {value: '50000', label: '50 000'},
              {value: '100000', label: '100 000'},
              {value: '150000', label: '150 000'},
              {value: '200000', label: '200 000'},
            ]}
          />
          <Select
            data-elem="salary-to-input"
            size="md"
            radius={8}
            placeholder="До"
            className={classes.input}
            rightSection={<ArrowsIcon />}
            rightSectionWidth={36}
            value={paymentTo}
            onChange={setPaymentTo}
            data={[
              {value: '30000', label: '30 000'},
              {value: '50000', label: '50 000'},
              {value: '100000', label: '100 000'},
              {value: '150000', label: '150 000'},
              {value: '200000', label: '200 000'},
            ]}
          />
        </Flex>
        <Button
          data-elem="search-button"
          variant="filled"
          bg="blue.4"
          style={{fontWeight: 500, fontSize: 14, height: 40}}
          radius={8}
          onClick={handlerSubmit}>
          Применить
        </Button>
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
    lineHeight: '1.1875rem',
  },
  input: {
    width: responsiveWidth(275),
  },
}));

export default Filters;
