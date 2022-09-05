import React from "react";

const Table = ({ item }) => {
  return (
    <>
      <td className="border-2">{item.id}</td>
      <td className="border-2">{item.userId}</td>
      <td className="border-2">{item.title}</td>
      <td className="border-2">{item.body}</td>
    </>
  );
};

export default Table;
