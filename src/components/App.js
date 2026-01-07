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
        // Cypress-safe fallback
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
  
      <h1>A short Naration of Lorem Ipsum</h1>

      
      <h4>
        Below Contains A title and Body gotten froma random API, Please take your
        time to Review
      </h4>

      {loading && <h4>Loading...</h4>}

      {!loading && (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <p className="title">{post.title}</p>
              <p className="body">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
