import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setPosts } from "../redux/loremSlice";
// const One = "1";
const App = () => {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(setLoading());

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => dispatch(setPosts(data.slice(0, 5))));
  }, [dispatch]);

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>
        Below Contains A title and Body gotten froma random API, Please take your
        time to Review
      </h4>

      <ul>
       <li>
           // <One>1</One>
           {!loading && 1}
    <p className="title">
      {loading
        ? "Title :Loading tiltes"
        : `Title :${posts[0]?.title}`}
    </p>

    <p className="body">
      {loading
        ? "Body :Loading Body"
        : `Body :${posts[0]?.body}`}
    </p>
  </li>
      </ul>
    </div>
  );
};

export default App;
