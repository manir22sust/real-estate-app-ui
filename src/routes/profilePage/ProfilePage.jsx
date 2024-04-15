import { List } from "../../components/list/List";

import "./profilePage.scss";
export const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1> User Information</h1>
            <button> Update Profile </button>
          </div>
          <div className="info">
            <span>
              {" "}
              Avatar:
              <img src="/assets/profile.jpg" alt="" />
            </span>
            <span>
              {" "}
              Username: <b> John Doe </b>
            </span>
            <span>
              {" "}
              E-mail: <b> john@gmail.com </b>
            </span>
          </div>
          <div className="title">
            <h1> My List</h1>
            <button> Create New Post </button>
          </div>
          <List />
          <div className="title">
            <h1> Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper"></div>
      </div>
    </div>
  );
};
