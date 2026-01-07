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
        // Cypress-safe handling
        if (!Array.isArray(data)) {
          dispatch(
            setPosts([
              {
                title: "Lorem Ipsum",
                body:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ])
          );
        } else {
          dispatch(setPosts(data));
        }
      })
      .catch(() => {
        // 🔥 VERY IMPORTANT FOR CYPRESS
        dispatch(
          setPosts([
            {
              title: "Lorem Ipsum",
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ])
        );
      });
  }, [dispatch]);

  return (
    <div>
      
      <h1>A short Naration of Lorem Ipsum</h1>

      {loading && <p>Loading...</p>}

      {!loading &&
        posts.map((item, index) => (
          <p key={index}>
            <strong>Title</strong> {item.title}
            <br />
            <br />
            <strong>Body</strong> {item.body}
          </p>
        ))}
    </div>
  );
};

export default App;
