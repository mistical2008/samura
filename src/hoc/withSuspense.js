import React, { Suspense } from 'react'
import Preloader from "../components/Preloader/Preloader";

const withSuspense = (WrappedComponent) => {
  return (props) => (
    <Suspense fallback={<Preloader />}>
        <WrappedComponent {...props} />
    </Suspense>
  );
};

export default withSuspense;
