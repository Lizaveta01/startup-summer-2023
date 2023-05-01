import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import {HeaderComponent} from '@components';
import {BookmarksPage, HomePage, JobPage} from '@pages';
import {AuthService} from '@services';

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      AuthService.checkAuth();
    }
  }, []);

  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vacancy/:vacancyID" element={<JobPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Routes>
    </>
  );
};

export default App;
