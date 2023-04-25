import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {BookmarksPage, HomePage, JobPage} from '@pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vacancy/:vacancyID" element={<JobPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Routes>
    </>
  );
};

export default App;
