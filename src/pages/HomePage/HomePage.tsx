import {useCallback, useEffect, useState} from 'react';

import {Filters, SearchInput, VacancyItem} from '@components';
import {DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT, MAX_API_VACANCIES, VACANCIES_COUNT_ON_PAGE} from '@constants';
import {useBookmarks} from '@hooks';
import {Flex, Pagination} from '@mantine/core';
import {getVacancies} from '@services';
import {IFilters, IVacancy} from '@types';
import {responsiveWidth} from '@utils';

const HomePage = () => {
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<IVacancy[] | null>(null);
  const [search, setSearch] = useState('');
  const {addToBookmarks, removeFromBookmarks, checkBookmarks} = useBookmarks();
  const [filters, setFilters] = useState<IFilters | undefined>(undefined);

  const getVacanciesRequest = useCallback(() => {
    try {
      getVacancies({search: search, page: activePage, ...filters}).then((data) => {
        setVacancies(data?.objects);
      });
    } catch (e) {}
  }, [activePage, filters, search]);

  useEffect(() => {
    getVacanciesRequest();
  }, [filters, search, activePage, getVacanciesRequest]);

  return (
    <Flex
      justify="center"
      align="flex-start"
      gap={responsiveWidth(28)}
      pt={40}
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      <Flex>
        <Filters onFilterChanged={setFilters} />
      </Flex>
      <Flex direction="column" justify="center" align="center" gap={40}>
        <Flex direction="column" gap={16}>
          <SearchInput value={search} onChange={setSearch} />
          {vacancies &&
            vacancies.map((item) => (
              <VacancyItem
                key={item.id}
                vacancy={item}
                onClickAdd={() => addToBookmarks(item)}
                onClickRemove={() => removeFromBookmarks(item)}
                isBookmarked={checkBookmarks(item)}
              />
            ))}
        </Flex>
        <Pagination
          total={MAX_API_VACANCIES / VACANCIES_COUNT_ON_PAGE}
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
