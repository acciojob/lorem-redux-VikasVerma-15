import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setPosts } from "../redux/loremSlice";

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
        {/*  LOADING STATE WITH REQUIRED .title */}
        {loading && (
          <li>
            <p className="title">Title :Loading tiltes</p>
          </li>
        )}

        {!loading &&
          posts.map((post) => (
            <li key={post.id}>
              <p className="title">Title :{post.title}</p>
              <p className="body">{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
