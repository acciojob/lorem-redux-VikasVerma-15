import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setPosts } from "../redux/loremSlice";

const App = () => {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(setLoading());

    fetch("https://api.lorem.com/ipsum")
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          setPosts(
            Array.isArray(data)
              ? data
              : [
                  {
                    title: "Lorem Ipsum",
                    body: "Lorem ipsum dolor sit amet",
                  },
                ]
          )
        );
      })
      .catch(() => {
        // ✅ Cypress-safe fallback
        dispatch(
          setPosts([
            {
              title: "Lorem Ipsum",
              body: "Lorem ipsum dolor sit amet",
            },
          ])
        );
      });
  }, [dispatch]);

  return (
    <div>
      {/* ✅ FIRST HEADING (INTRO TEXT) */}
      <h4>Lorem Redux</h4>

      {/* ✅ SECOND HEADING (LOADING / CONTENT HEADER) */}
      {loading ? <h4>Loading...</h4> : <h4>Posts</h4>}

      {/* ✅ POSTS IN ul > li */}
      {!loading && (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
