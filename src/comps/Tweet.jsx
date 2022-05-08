import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Tweet({ name, profile }) {
  const [addtweet, setAddtweet] = useState(null);
  const collectionAllTweetRef = collection(db, "allTweets");
  const uploadTweet = () => {
    if (addtweet) {
      addDoc(collectionAllTweetRef, {
        tweet: addtweet,
        createdAt: serverTimestamp(),
        name: name,
        profile: profile,
        like:0
      });
      setAddtweet(null);
      document.getElementById("floatingTextarea2").value = "";
    } else {
      console.log("enter something");
    }
  };
  return (
    <div
      className="py-5 d-flex justify-content-center "
      style={{ marginTop: "60px" }}
    >
      <img
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          marginRight: "5px",
        }}
        src={profile}
      />
      <div
        class="form-floating d-flex flex-column align-items-center "
        style={{ width: "70%" }}
      >
         <div
          className="d-flex justify-content-end w-100 "
          style={{ marginBottom: "-35px",zIndex:"9999",marginRight:"10px" }}
        >
          <div>
            <label
              className="mx-1 my-2"
              onClick={() => document.getElementById("img").click()}
              htmlFor="image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-image"
                viewBox="0 0 16 16"
              >
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
              </svg>
            </label>
            <input
            
              id="img"
              accept="image/png, image/jpeg"
              type="file"
              name="image"
              style={{ display: "none" }}
            />
          </div>
          <div>
            <label
              className="mx-1 my-2"
              onClick={() => document.getElementById("vid").click()}
              htmlFor="video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-camera-video-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
                />
              </svg>
            </label>
            <input
              className="mt-3"
              id="vid"
              accept="video/mp4, video/wmv,video/ogg,video/3gp"
              type="file"
              name="video"
              style={{ display: "none" }}
            />
          </div>
        </div>
        <textarea
          class="form-control px-4 "
          style={{ color: "grey" }}
          onChange={(e) => {
            e.target.value && setAddtweet(e.target.value);
          }}
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></textarea>
        <label
          for="floatingTextarea2"
          style={{ color: "grey" }}
          className="px-1 pt-4  fw-bold"
        >
          What do you think.....
        </label>
       
      </div>
      <div
        
        className="d-flex align-items-center mx-2"
      >
        <button className="btn btn-primary px-4" onClick={uploadTweet}>
          Post
        </button>
      </div>
    </div>
  );
}
