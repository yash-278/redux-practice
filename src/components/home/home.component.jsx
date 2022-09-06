import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { POSTS_URL } from "../../constants/constants";
import { saveApiData } from "../../redux/jsonApi/jsonApi.actions";
import ButtonGroup from "../buttonGroup/buttonGroup.component";
import Table from "../table/table.component";

const Home = (props) => {
  (() => {
    if (props.jsonData.length > 0) {
      return;
    } else {
      axios
        .get(POSTS_URL)
        .then(function (response) {
          props.saveApiData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  })();

  return localStorage.getItem("isAuthenticated") === "true" ? (
    <>
      {props.jsonData.length > 0 ? (
        <>
          <ButtonGroup />
          <table className="table-fixed rounded-lg mx-auto border-2">
            <thead>
              <tr>
                <th className="w-20">PostID</th>
                <th className="w-20">UserID</th>
                <th className="w-96">Title</th>
                <th className="w-96">Body</th>
                <th className="w-96">Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.jsonData.map((item) => (
                <tr key={item.id} className="py-10">
                  <Table item={item} />
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  ) : (
    <Navigate to="/" />
  );
};

const mapStateToProps = (state) => {
  return {
    jsonData: state.jsonApi.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveApiData: (props) => dispatch(saveApiData(props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
