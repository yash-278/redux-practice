import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteResource } from "../../redux/jsonApi/jsonApi.actions";
import { useNavigate } from "react-router-dom";

const Table = (props) => {
  let navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteResource(props.item.id);

    navigate("/home");
  };

  return (
    <>
      <td className="border-2">{props.item.id}</td>
      <td className="border-2">{props.item.userId}</td>
      <td className="border-2">{props.item.title}</td>
      <td className="border-2">{props.item.body}</td>
      <td className="border-2">
        <button>
          <Link
            className="block cursor-pointer bg-gray-400 text-black rounded-md px-5 py-3 m-2"
            to="/update"
            state={{ item: props.item }}
          >
            Update Record
          </Link>
        </button>

        <button>
          <span
            className="block bg-gray-400 cursor-pointer text-black rounded-md px-5 py-3 m-2"
            onClick={(e) => handleDelete(e)}
          >
            Delete Record
          </span>
        </button>
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
