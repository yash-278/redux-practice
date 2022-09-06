import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteResource } from "../../redux/jsonApi/jsonApi.actions";

const Table = ({ item }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(item.id);
    console.log("====================================");
    deleteResource(item.id);
  };

  return (
    <>
      <td className="border-2">{item.id}</td>
      <td className="border-2">{item.userId}</td>
      <td className="border-2">{item.title}</td>
      <td className="border-2">{item.body}</td>
      <td className="border-2">
        <Link
          to="/update"
          state={{ item: item }}
          className="cursor-pointer bg-gray-400 text-black rounded-md px-5 py-3 mx-2"
        >
          Update Record
        </Link>
        <span
          onClick={(e) => handleDelete(e)}
          className="bg-gray-400 cursor-pointer text-black rounded-md px-5 py-3 mx-2"
        >
          Delete Record
        </span>
      </td>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteResource: (props) => dispatch(deleteResource(props)),
  };
};

export default connect(null, mapDispatchToProps)(Table);
