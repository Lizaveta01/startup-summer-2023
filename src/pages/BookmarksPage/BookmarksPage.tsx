import {useState} from 'react';

import {VacancyItem} from '@components';
import {DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT} from '@constants';
import {Flex, Pagination} from '@mantine/core';
import {responsiveWidth} from '@utils';

const BookmarksPage = () => {
  const [activePage, setPage] = useState(1);
  return (
    <Flex
      justify="center"
      align="flex-start"
      gap={responsiveWidth(28)}
      pt={40}
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      <Flex direction="column" justify="center" align="center" gap={104}>
        <Flex direction="column" gap={16}>
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

export default BookmarksPage;
