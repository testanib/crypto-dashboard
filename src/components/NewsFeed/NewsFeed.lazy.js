import React, { lazy, Suspense } from 'react';

const LazyNewsFeed = lazy(() => import('./NewsFeed'));

const NewsFeed = props => (
  <Suspense fallback={null}>
    <LazyNewsFeed {...props} />
  </Suspense>
);

export default NewsFeed;
