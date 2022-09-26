import React from "react";
import AccountDetails from "../Dashboard-Components/AccountDetails/AccountDetails";
import Dashbtn from "../Dashboard-Components/dash-btn";
import PersonalDetails from "../Dashboard-Components/PersonalDetails/PersonalDetails";
import ProfileCard from "../Dashboard-Components/ProfileCard/ProfileCard";
import Sidebar from "../Dashboard-Components/Sidebar/Sidebar";
import SummarryCard from "../Dashboard-Components/SummarryCard/SummarryCard";
import Topbar from "../Dashboard-Components/Topbar/Topbar";

const Profile = () => {
  return (
    <div className="dashboard">
      <Topbar />

      <div className="dash-container grid">
        <Sidebar />

        <div className="profile-main-dash grid">
          <div className="dash-header flex">
            <p className="dash-title">My profile</p>
          </div>

          <div className="profile-dash grid">
            <div className="profile-grid grid-box-center grid">
              <ProfileCard />
              <div className="profile-btn">
                <Dashbtn disabed={true} text="EDIT PROFILE" type="" link="" />
              </div>
            </div>

            <div className="profile-grid grid-box-center grid">
              <>
                <PersonalDetails title="Profile details" />
              </>

              <>
                <AccountDetails title="Account details" />
              </>
            </div>

            <div className="profile-grid grid-box-end">
              <SummarryCard title="My Application" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
