import {useEffect, useState} from 'react';

import {Filters, SearchInput, VacancyItem} from '@components';
import {DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT} from '@constants';
import {useBookmarks} from '@hooks';
import {Flex, Pagination} from '@mantine/core';
import {getVacancies} from '@services';
import {IFilters, IVacancy} from '@types';
import {responsiveWidth} from '@utils';

const VACANCIES_ON_PAGE = 4;

const HomePage = () => {
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<IVacancy[] | null>(null);
  const [vacanciesAmount, setVacanciesAmount] = useState(0);
  const [search, setSearch] = useState('');
  const {addToBookmarks, removeFromBookmarks, checkBookmarks} = useBookmarks();
  const [filters, setFilters] = useState<IFilters | undefined>(undefined);

  const getVacanciesRequest = (filters?: IFilters, search?: string) => {
    try {
      getVacancies({search: search, ...filters}).then((data) => {
        setVacancies(data?.objects);
        setVacanciesAmount(data?.total);
      });
    } catch (e) {}
  };

  useEffect(() => {
    getVacanciesRequest(filters, search);
  }, [filters, search]);

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
          <SearchInput value={search} onChange={setSearch} handleSearch={getVacanciesRequest} />
          {vacancies &&
            vacancies
              .slice(0, 4)
              .map((item) => (
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
          total={vacanciesAmount / VACANCIES_ON_PAGE}
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
