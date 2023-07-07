import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Posts from "./Posts";
import { db } from "./firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  // Redux storage
  const user = useSelector(selectUser);

  // Creating useState for posts
  const [posts, setPost] = useState([]);

  // Creating useState for capturing input field
  const [input, setInput] = useState("");

  // Now we are going to use useEffect hook for connecting with the firebase.
  // onSnapshot will give the snapshot of the posts. When posts get deleted or added it will provide the snapshot.
  // snapshot argument is the row time listenr.
  // [db]

  // This is for setPost by getting a real time snapshot from the db
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  // Onbutton click on input
  // For adding the collected input to the db
  const sendPost = (e) => {
    e.preventDefault();

    // Sending post to the database on click / enter [db]
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      // timestamp is used to synchronize different timezone
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      {/* We are actually destructuring [db] */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
