import {useState} from 'react';

import {NotFoundComponent, VacancyItem} from '@components';
import {DESIGN_EXAMPLE_WINDOW_HEIGHT, HEADER_HEIGHT} from '@constants';
import {useBookmarks} from '@hooks';
import {Flex, Pagination} from '@mantine/core';
import {responsiveWidth} from '@utils';

const BookmarksPage = () => {
  const [activePage, setPage] = useState(1);
  const {addToBookmarks, removeFromBookmarks, bookmarks} = useBookmarks();

  return (
    <Flex
      justify="center"
      gap={responsiveWidth(28)}
      pt={40}
      bg="gray.1"
      h={`${100 - (HEADER_HEIGHT / DESIGN_EXAMPLE_WINDOW_HEIGHT) * 100}vh`}>
      {bookmarks.length > 0 ? (
        <Flex direction="column" justify="flex-start" align="center" gap={104}>
          <Flex direction="column" gap={16}>
            {bookmarks.map((item) => (
              <VacancyItem
                key={item.id}
                vacancy={item}
                isBookmarked={true}
                onClickAdd={() => addToBookmarks(item)}
                onClickRemove={() => removeFromBookmarks(item)}
              />
            ))}
          </Flex>
          {bookmarks.length > 4 && (
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
          )}
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
