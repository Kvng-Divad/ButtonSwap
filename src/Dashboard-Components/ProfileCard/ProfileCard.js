<<<<<<< HEAD
import React from "react";
import "./ProfileCard.css";
import profile from "../../Assets/profile.svg";
import male from "../../Assets/male-avatar.png";
import { useUserContext } from "../../App";

const ProfileCard = () => {
  const { user } = useUserContext();

  return (
    <div className="application-details">
      <div className="profile-card grid">
        <div className="profile-img">
          <img src={user?.gender === "male" ? male : profile} alt="" />
        </div>

        <div className="profile-details grid">
          <div className="profile-card-id flex">
            <p>ID:</p>
            <p>{user?.id}</p>
          </div>

          <div className="profile-card-name">
            <h3>{user?.full_name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
=======
import React from "react";
import "./ProfileCard.css";
import profile from "../../Assets/profile.svg";
import male from "../../Assets/male-avatar.png";
import { useUserContext } from "../../App";

const ProfileCard = () => {
  const { user } = useUserContext();

  return (
    <div className="application-details">
      <div className="profile-card grid">
        <div className="profile-img">
          <img src={user?.gender === "male" ? male : profile} alt="" />
        </div>

        <div className="profile-details grid">
          <div className="profile-card-id flex">
            <p>ID:</p>
            <p>{user?.id}</p>
          </div>

          <div className="profile-card-name">
            <h3>{user?.full_name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
