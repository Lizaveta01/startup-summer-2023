import {useState} from 'react';

import {Filters, SearchInput, VacancyItem} from '@components';
import {DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT} from '@constants';
import {Flex, Pagination} from '@mantine/core';
import {responsiveWidth} from '@utils';

const HomePage = () => {
  const [activePage, setPage] = useState(1);
  return (
    <Flex
      justify="center"
      align="flex-start"
      gap={responsiveWidth(28)}
      pt={40}
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      <Flex>
        <Filters />
      </Flex>
      <Flex direction="column" justify="center" align="center" gap={40}>
        <Flex direction="column" gap={16}>
          <SearchInput />
          <VacancyItem />
          <VacancyItem />
          <VacancyItem />
          <VacancyItem />
        </Flex>
        <Pagination
          total={3}
          value={activePage}
          onChange={setPage}
          color="blue.4"
          styles={(theme) => ({
            control: {
              '&[data-active]': {
                backgroundImage: theme.colors.blue[2],
              },
            },
          })}
        />
      </Flex>
    </Flex>
  );
};

export default HomePage;
