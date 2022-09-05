import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { POSTS_URL } from "../../constants/constants";
import { saveApiData } from "../../redux/jsonApi/jsonApi.actions";
import Table from "../table/table.component";

const Home = (props) => {
  useEffect(() => {
    axios
      .get(POSTS_URL)
      .then(function (response) {
        props.saveApiData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {props.jsonData.length > 0 ? (
        <table className="table-fixed rounded-lg mx-auto border-2">
          <thead>
            <tr>
              <th className="w-20">PostID</th>
              <th className="w-20">UserID</th>
              <th className="w-96">Title</th>
              <th className="w-96">Body</th>
            </tr>
          </thead>
          <tbody>
            {props.jsonData.slice(0, 15).map((item) => (
              <tr key={item.id}>
                <Table item={item} />
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
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
