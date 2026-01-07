import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, setLoremData } from "../redux/loremSlice";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(startLoading());

    fetch("https://api.lorem.com/ipsum")
      .then((res) => res.json())
      .then((result) => {
        dispatch(setLoremData(result));
      });
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
  <div>
    <h1>A short Naration of Lorem Ipsum</h1>

    {loading && <p>Loading...</p>}

    {!loading && data && (
      <p>
        <strong>{data.title}</strong>
        <br />
        {data.body}
      </p>
    )}
  </div>
);
};

export default App;
