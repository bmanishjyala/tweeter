import ShowAll from "./comps/ShowAll";
import Tweet from "./comps/Tweet";
import "./index.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import { useState } from "react";
 

function App() {
  const [name, setName] = useState(null);
  const [profile, setProfile] = useState(null);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setName(result.user.displayName);
      setProfile(result.user.photoURL);
    });
  };

  return (
    <div className="containers  d-flex flex-column align-items-center">
      <nav
        className="navbar navRespon d-flex shadow-sm navbar-light fixed-top"
        style={{ padding: "20px 20%", background: "white" }}
      >
        <a
          className="navbar-brand"
          className="d-flex align-items-center text-decoration-none"
          style={{ fontFamily: "'popins', cursive", letterSpacing: "4px",marginTop:"-12px" }}
         
        >
          <svg
            style={{marginRight:"5px"}}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-chat-dots-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
           Tweeter
        </a>

        {name ? (
          <div className="d-flex">
            {" "}
            <p className="pt-2 ">{name}</p>
            <img
              className="rounded-circle "
              style={{ width: "40px", height: "40px", marginLeft: "5px" }}
              src={profile}
            />
          </div>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="btn btn-outline-primary"
          >
            Sign In With Google
          </button>
        )}
      </nav>
      {name && (
        <div className="border outro" style={{ width: "60%" }}>
          <Tweet name={name} profile={profile} />
          <ShowAll name={name}/>
        </div>
      )}
    </div>
  );
}
export default App;
