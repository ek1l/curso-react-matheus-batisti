/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    console.log('Buscando items do DB... ');
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      {myItems &&
        myItems.map((item) => {
          return <p key={item}>{item}</p>;
        })}
    </div>
  );
};

export default List;
