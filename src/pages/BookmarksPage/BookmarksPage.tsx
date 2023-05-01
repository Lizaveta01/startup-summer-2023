import {useEffect, useState} from 'react';

import {NotFoundComponent, VacancyItem} from '@components';
import {DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT} from '@constants';
import {Flex, Pagination} from '@mantine/core';
import {IVacancy} from '@types';
import {responsiveWidth} from '@utils';

const BookmarksPage = () => {
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<IVacancy[] | null>(null);

  useEffect(() => {
    const bookmarks = localStorage.getItem('vacancies');
  }, []);

  return (
    <Flex
      justify="center"
      gap={responsiveWidth(28)}
      pt={40}
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      {vacancies ? (
        <Flex direction="column" justify="center" align="center" gap={104}>
          <Flex direction="column" gap={16}>
            {vacancies.map((item) => (
              <VacancyItem key={item.id} vacancy={item} />
            ))}
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
      ) : (
        <Flex align={'center'}>
          <NotFoundComponent />
        </Flex>
      )}
    </Flex>
  );
};

export default BookmarksPage;
