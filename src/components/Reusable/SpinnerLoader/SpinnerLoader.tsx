import React from 'react';

const SpinnerLoader = () => {
    return (
        <div className="flex justify-center items-center py-24">
    <div className="w-12 h-12 border-4 border-primary-10 border-t-transparent rounded-full animate-spin" />
  </div>
    );
};

export default SpinnerLoader;