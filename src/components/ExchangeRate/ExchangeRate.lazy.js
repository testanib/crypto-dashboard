import React, { lazy, Suspense } from 'react';

const LazyExchangeRate = lazy(() => import('./ExchangeRate'));

const ExchangeRate = props => (
  <Suspense fallback={null}>
    <LazyExchangeRate {...props} />
  </Suspense>
);

export default ExchangeRate;
