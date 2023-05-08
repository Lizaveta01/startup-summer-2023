import {useCallback, useEffect, useState} from 'react';

import {FiltersIcon} from '@assets';
import {Filters, NotFoundComponent, SearchInput, VacancyItem} from '@components';
import {
  DESIGN_EXAMPLE_WINDOW_HEIGHT,
  HEADER_HEIGHT,
  MAX_API_VACANCIES,
  Screens,
  VACANCIES_COUNT_ON_PAGE,
} from '@constants';
import {useBookmarks} from '@hooks';
import {ActionIcon, Drawer, Flex, Loader, Pagination} from '@mantine/core';
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import {getVacancies} from '@services';
import {IFilters, IVacancy} from '@types';
import {responsiveWidth} from '@utils';

const TOTAL_PAGES = MAX_API_VACANCIES / VACANCIES_COUNT_ON_PAGE;

const HomePage = () => {
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<IVacancy[] | null>(null);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(TOTAL_PAGES);
  const {addToBookmarks, removeFromBookmarks, checkBookmarks} = useBookmarks();
  const [filters, setFilters] = useState<IFilters | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [opened, {toggle}] = useDisclosure(false);
  const isTablet = useMediaQuery(`(max-width: ${Screens.TABLET}px)`);

  const getVacanciesRequest = useCallback(() => {
    try {
      setIsLoading(true);
      getVacancies({search: search, page: activePage, ...filters}).then((data) => {
        setVacancies(data?.objects);
        data.total / VACANCIES_COUNT_ON_PAGE > MAX_API_VACANCIES
          ? setTotal(TOTAL_PAGES)
          : setTotal(data.total / VACANCIES_COUNT_ON_PAGE);
        setIsLoading(false);
      });
    } catch (e) {
      setIsLoading(false);
    }
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
      <Flex>{!isTablet && <Filters onFilterChanged={setFilters} />}</Flex>
      <Flex direction="column" justify="center" align="center" gap={40} pr={isTablet ? 10 : 0}>
        <Flex direction="column" gap={16} justify="center" align="center" miw={'90vw'}>
          <Flex justify="center" align="center" gap={10} w={'100%'}>
            <SearchInput value={search} onChange={setSearch} />
            {isTablet && (
              <ActionIcon variant="filled" onClick={toggle} bg={'blue.4'}>
                <FiltersIcon />
              </ActionIcon>
            )}
          </Flex>

          {isLoading ? (
            <Flex h={596}>
              <Loader color="blue.4" />
            </Flex>
          ) : vacancies?.length ? (
            <>
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
            </>
          ) : (
            <Flex align="center" justify="center" h={596}>
              <NotFoundComponent />
            </Flex>
          )}
        </Flex>
        {isLoading ? null : vacancies?.length ? (
          <Pagination
            total={total}
            siblings={0}
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
        ) : null}
      </Flex>
      <Drawer opened={opened} onClose={toggle} position="top">
        <Flex justify="center">
          <Filters onFilterChanged={setFilters} />
        </Flex>
      </Drawer>
    </Flex>
  );
};

export default HomePage;
