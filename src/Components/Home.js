import { useEffect, useState } from "react";
import { Component } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
const Home = ({ responses }) => {
  const [stories, setStories] = useState(0);
  const [metoo, setMeToo] = useState(43);

  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };

    getUsers();
  }, []);

  return (
    <div id="home-container">
      <div className="metoo-info">
        <h1 id="stories-shared">Stories Shared</h1>
        <h2 id="number-stories">{stories}</h2>
        <button className="metoo-btn" onClick={() => setMeToo(metoo + 1)}>
          #MeToo: {metoo}
        </button>
      </div>
      <div className="responses-div">
        {posts.map((post) => (
          <div className="each-response">
            <p>{post.grade}</p>
            <p>{post.description}</p>
            <p>{post.date_time.toDate().toDateString()}</p>
            {post.visible ? <h1>h</h1> : <h1>p</h1>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
