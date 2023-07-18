import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useClient } from 'sanity';

const OrderNumberIncrementer = ({ document }) => {
  const client = useClient();
  const [orderNumber, setOrderNumber] = useState('00001');

  useEffect(() => {
    setOrderNumber(document.orderNumber || '00001');
  }, [document.orderNumber]);

  const incrementOrderNumber = () => {
    const newOrderNumber = '0000' + (parseInt(orderNumber.slice(-5)) + 1);
    setOrderNumber(newOrderNumber);

    const patch = {
      id: document._id,
      set: { orderNumber: newOrderNumber },
    };

    client.patch(patch).then(() => {
      // Patch operation completed
    });
  };

  return (
    <div>
      <p>Order Number: {orderNumber}</p>
      <button onClick={incrementOrderNumber}>Increment Order Number</button>
    </div>
  );
};

OrderNumberIncrementer.propTypes = {
  document: PropTypes.object.isRequired,
};

export default OrderNumberIncrementer;


/* import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import client from 'part:@sanity/base/client';

const OrderNumberIncrementer = ({ document, set }) => {
  const [orderNumber, setOrderNumber] = useState('00001');

  useEffect(() => {
    setOrderNumber(document.orderNumber || '00001');
  }, [document.orderNumber]);

  const incrementOrderNumber = () => {
    const transaction = client.transaction();
    const query = '*[_type == "order"] | order(_createdAt asc) [0]._id';
    const incrementQuery = `{
      "orderNumber": {
        "set": "0000" + (parseInt(prev.result.orderNumber.slice(-5)) + 1)
      }
    }`;

    transaction
      .read(query)
      .then((result) => {
        const orderId = result[0];

        return transaction
          .patch(orderId)
          .setIfMissing({ orderNumber: '00001' })
          .transaction((prev) => [
            {
              ...prev,
              ...JSON.parse(incrementQuery),
            },
            { ...JSON.parse(query) },
          ]);
      })
      .then((result) => {
        setOrderNumber(result.orderNumber);
        set({ orderNumber: result.orderNumber });
      })
      .catch((error) => {
        console.error('Error incrementing order number:', error);
      })
      .finally(() => {
        transaction.commit();
      });
  };

  return (
    <div>
      <p>Order Number: {orderNumber}</p>
      <button onClick={incrementOrderNumber}>Increment Order Number</button>
    </div>
  );
};

OrderNumberIncrementer.propTypes = {
  document: PropTypes.object.isRequired,
  set: PropTypes.func.isRequired,
};

export default OrderNumberIncrementer; */

// dokumentace https://www.sanity.io/docs/studio-react-hooks

/* import {useMemoObservable} from 'react-rx'
import { useFormValue } from 'sanity'
import { useDocumentStore } from 'sanity'

 export function idOrder() {
  const docId = useFormValue(['_id']);
  const documentStore = useDocumentStore();
  const results = useMemoObservable(() => {
    return documentStore.listenQuery(
      `*[_type == 'order']`,
      {currentDoc: docId},
    )
  }, [documentStore, docId])
  
	return (
	  <div>{docId}</div>
	)
} */



