import React, { useEffect } from 'react';

const RunOnce = () => {
  useEffect(() => {
    console.log('Component mounted');

    // Cleanup (like componentWillUnmount)
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty array means this effect runs only once

  return <div>Check the console log for mount/unmount messages</div>;
};

export default RunOnce;

// To run the effect only once (when the component mounts), you provide
//  an empty dependency array []. This is similar to componentDidMount in class components.