import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getRandomArbitrary } from "../../constants/constants";
import { createResource } from "../../redux/jsonApi/jsonApi.actions";

const CreateModal = (props) => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createResource({
      id: getRandomArbitrary(100, 1000),
      title: e.target.title.value,
      body: e.target.body.value,
      userId: getRandomArbitrary(1, 10),
    });
    navigate("home");
  };

  return localStorage.getItem("isAuthenticated") === "true" ? (
    <div className="absolute w-full bg-slate-900 max-h-full">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
              Create Post
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Title"
                />
              </div>
              <div>
                <label htmlFor="body" className="sr-only">
                  Body
                </label>
                <textarea
                  name="body"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Body"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createResource: (props) => dispatch(createResource(props)),
  };
};

export default connect(null, mapDispatchToProps)(CreateModal);
