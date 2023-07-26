// dokumentace https://www.sanity.io/docs/studio-react-hooks

import {useMemoObservable} from 'react-rx'
import { useFormValue } from 'sanity'
import { useDocumentStore } from 'sanity'

export function orderNumber() {
  const docId = useFormValue(['orderNumber']);
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
} 
// /components/MyCustomStringInput.jsx
/* import {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'

export const orderNumber = (props) => {
  const {elementProps, onChange, value = ''} = props

  const handleChange = useCallback((event) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
	}, [onChange])

  return (
    <Stack space={2}>
      <TextInput
        {...elementProps}
        onChange={handleChange}
        value={value}
      />
      <Text>Characters: {value.length}</Text>
    </Stack>
  )
} */
/* 
import { useState, useEffect } from 'react';
import { Stack, TextInput } from '@sanity/ui';
import sanityClient from 'part:@sanity/base/client';


const client = sanityClient.withConfig({ apiVersion: '2023-03-25' });

export const oderNumber = (props) => {
  const { type, value, onChange, onBlur, onFocus } = props;
  const [orderNumber, setOrderNumber] = useState(value);

  useEffect(() => {
    const fetchLastOrderNumber = async () => {
      const query = '*[_type == "order"] | order(orderNumber desc)[0]{orderNumber}';
      const result = await client.fetch(query);
      if(result && result.orderNumber) {
        setOrderNumber(result.orderNumber + 1);
      }
    }
    
    if(!value) {
      fetchLastOrderNumber();
    }
  }, [value]);

  const handleBlur = () => {
    onChange(set(orderNumber));
    onBlur();
  }

  return (
    <Stack space={2}>
      <TextInput 
        value={orderNumber || ''} 
        readOnly
        onBlur={handleBlur}
        onFocus={onFocus}
      />
    </Stack>
  );
}
 */


 
/* import { useState, useEffect } from 'react';
import { useClient } from 'sanity';
import { useFormValue } from 'sanity';
import { useDocumentStore } from 'sanity';
import { useMemoObservable } from 'react-rx'; */

/* export function orderNumber() {
  const [orderNumber, setOrderNumber] = useState(null);
  const docId = useFormValue(['_id']);
  const documentStore = useDocumentStore();
  const client = useClient({ apiVersion: '2023-01-01' });
  const results = useMemoObservable(() => {
    return documentStore.listenQuery(
      `*[_type == 'order']`,
      {currentDoc: docId},
    )
  }, [documentStore, docId]);
  
  useEffect(() => {
    async function fetchLastOrderNumber() {
      const lastOrder = await client.fetch(`*[_type == 'order'] | order(_createdAt desc) [0]`);
      setOrderNumber((lastOrder?.orderNumber || 0) + 1);
    }
    
    fetchLastOrderNumber();
  }, []);
  
  return (
    <div>{orderNumber}</div>
  )
}
 */
/* export function orderNumber() {
  const [orderNumber, setOrderNumber] = useState(null);
  const docId = useFormValue(['_id']);
  const documentStore = useDocumentStore();
  const client = useClient({ apiVersion: '2023-01-01' });
  const results = useMemoObservable(() => {
    return documentStore.listenQuery(
      `*[_type == 'order' && _id == $currentDoc]`,
      {currentDoc: docId},
    )
  }, [documentStore, docId]);
  
  useEffect(() => {
    async function fetchLastOrderNumber() {
      const lastOrder = await client.fetch(`*[_type == 'order'] | order(_createdAt desc) [0]`);
      const currentTime = new Date();
      // Assuming the document is new if it was created in the last 5 seconds
      if (lastOrder && new Date(lastOrder._createdAt).getTime() > currentTime.getTime() - 5000) {
        setOrderNumber((lastOrder.orderNumber || 0) + 1);
      } else {
        setOrderNumber(lastOrder.orderNumber);
      }
    }
    
    fetchLastOrderNumber();
  }, []);
  
  return (
    <div>{orderNumber}</div>
  )
} */

 /* export function orderNumber() {
  const [orderNumber, setOrderNumber] = useState(null);
  const docId = useFormValue(['_id']);
  const client = useClient({ apiVersion: '2023-01-01' });

  useEffect(() => {
    async function fetchLastOrderNumber() {
      // Fetch the last order and increment the orderNumber
      const lastOrder = await client.fetch(`*[_type == 'order'] | order(_createdAt desc) [0]`);
      setOrderNumber((lastOrder?.orderNumber || 0) + 1);
    }

    fetchLastOrderNumber();
  }, []);

  return (
    <div>{orderNumber}</div>
  )
} */

/* export function orderNumber() {
  const [orderNumber, setOrderNumber] = useState(null);
  const docId = useFormValue(['_id']);
  const client = useClient({ apiVersion: '2023-01-01' });

  useEffect(() => {
    const subscription = client.listen(`*[_type == "order"]`).subscribe(async (update) => {
      if (update.transition === 'appear' || update.transition === 'update') {
        // Fetch the last order and increment the orderNumber
        const lastOrder = await client.fetch(`*[_type == 'order'] | order(_createdAt desc) [0]`);
        setOrderNumber((lastOrder?.orderNumber || 0) + 1);
      }
    });

    return () => {
      // Unsubscribe when the component is unmounted
      subscription.unsubscribe();
    }
  }, []);

  return (
    <div>{orderNumber}</div>
  )
} */

/* export function orderNumber(orderData) {
  const client = useClient({ apiVersion: '2023-01-01' });

  // Fetch the last order's orderNumber
  const lastOrder = client.fetch(`*[_type == 'order'] | order(_createdAt desc) [0]`);
  const newOrderNumber = (lastOrder?.orderNumber || 0) + 1;

  // Create a new order document
  const newOrder = {
    ...orderData, // The data for the new order
    _type: 'order',
    orderNumber: newOrderNumber
  };

  // Use the Sanity client to create the new document
  const result = await client.create(newOrder);

  return result;
} */

