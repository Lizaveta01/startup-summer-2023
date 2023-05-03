import {useEffect, useState} from 'react';

import {IVacancy} from '@types';

export const useBookmarks = () => {
  const storedBookmarks = localStorage.getItem('bookmarks');
  const bookmarksFromStorage: IVacancy[] = storedBookmarks ? JSON.parse(storedBookmarks) : [];
  const [bookmarks, setBookmarks] = useState<IVacancy[]>(bookmarksFromStorage);

  const addToBookmarks = (vacancy: IVacancy) => {
    setBookmarks((prev) => [...prev, vacancy]);
    localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, vacancy]));
  };

  const removeFromBookmarks = (vacancy: IVacancy) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== vacancy.id));
  };

  const checkBookmarks = (vacancy: IVacancy) => !!bookmarks.filter((item) => item.id === vacancy.id).length;

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  return {addToBookmarks, removeFromBookmarks, checkBookmarks, bookmarks};
};
