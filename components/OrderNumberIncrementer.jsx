import { useClient } from "sanity";
import React, { useEffect, useState } from "react";

const useOrderNumber = () => {
  const client = useClient();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const fetchLastOrderNumber = async () => {
      const query = '*[_type == "order"] | order(orderNumber desc) [0]';
      const result = await client.fetch(query);

      if (result && result.length > 0) {
        const lastOrderNumber = result[0].orderNumber;
        const nextOrderNumber =
          "2023" +
          (parseInt(lastOrderNumber.slice(-6)) + 1).toString().padStart(6, "0");
        setOrderNumber(nextOrderNumber);
      } else {
        // If no documents with orderNumber exist, set the initial order number to "202300000001"
        setOrderNumber("202300000001");
      }
    };

    fetchLastOrderNumber();
  }, [client]);

  const incrementOrderNumber = () => {
    const newOrderNumber =
      "2023" +
      (parseInt(orderNumber.slice(-6)) + 1).toString().padStart(6, "0");
    setOrderNumber(newOrderNumber);
  };

  return { orderNumber, incrementOrderNumber };
};

export function orderNumberIncrementer() {
  const { orderNumber } = useOrderNumber(); // Using the custom hook

  return (
    <div>
      <div>Order Number: {orderNumber}</div>
    </div>
  );
}