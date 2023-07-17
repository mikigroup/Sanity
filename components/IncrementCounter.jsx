import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const IncrementCounter = ({ document, set, source }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(document.counter || 0);
  }, [document.counter]);

  const incrementCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    set({ counter: newCounter });
  };

  // Check if the order was created through the API
  const isApiOrder = source === 'api';

  return (
    <div>
      {isApiOrder && (
        <div>
          <p>Counter: {counter}</p>
          <button onClick={incrementCounter}>Increment Counter</button>
        </div>
      )}
      {!isApiOrder && <p>Counter can only be incremented for API-created orders.</p>}
    </div>
  );
};

IncrementCounter.propTypes = {
  document: PropTypes.object.isRequired,
  set: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
};

export default IncrementCounter;