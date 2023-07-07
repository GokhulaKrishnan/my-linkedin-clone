import React, { useEffect } from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/Counter";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Widgets from "./Widgets";

// We have to log in when we refresh.
// For that we are using onAuthStateChanged.
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // [login and logout]
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // If there exist a user, it shoud be logged in
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user logged out.
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        // {/* App body */}
        <div className="app__body">
          {/* -Side bar */}
          <Sidebar />
          {/* -Feed */}
          <Feed />
          {/* -Widget */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
