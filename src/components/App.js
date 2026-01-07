import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../redux/loremSlice";

const App = () => {
  const dispatch = useDispatch();

  const { loading, data } = useSelector((state) => state.lorem);
  const post = data && data[0] ? data[0] : {};

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      {/* FIRST HEADING */}
      <h1>Lorem Redux</h1>

      {/* SECOND HEADING */}
      <h4>A short Naration of Lorem Ipsum</h4>

      <ul>
        <li>
          <p className="title">
            {loading
              ? "Title :Loading titles"
              : `Title :${post.title}`}
          </p>

          <p className="body">
            {loading
              ? "Body :Loading Body"
              : `Body :${post.body}`}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default App;
