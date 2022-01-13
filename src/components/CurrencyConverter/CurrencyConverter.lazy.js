import React, { lazy, Suspense } from 'react';

const LazyCurrencyConverter = lazy(() => import('./CurrencyConverter'));

const CurrencyConverter = props => (
  <Suspense fallback={null}>
    <LazyCurrencyConverter {...props} />
  </Suspense>
);

export default CurrencyConverter;
