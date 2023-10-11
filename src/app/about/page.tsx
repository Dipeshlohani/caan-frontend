import React from "react";
import "../styles.module.css"

const AboutUs = () => {
  return (
    <>
    <TopMessage />
      <div className="grid-container">
        <div className="text-field-container">
          <div className="text-field">
            <div className="text-content">Your title text goes here</div>
            <div className="text-content">
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
            </div>
          </div>
        </div>
        <div className="text-field-container">
          <div className="text-field">
            <div className="text-content">Your title text goes here</div>
            <div className="text-content">
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
            </div>
          </div>
        </div>
        <div className="text-field-container">
          <div className="text-field">
            <div className="text-content">Your title text goes here</div>
            <div className="text-content">
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
            </div>
          </div>
        </div>
      </div>
      <ChairmanMsg />
      <TeamField />
    </>
  );
};

const TeamField = () => {
  const teamMembers = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <>
    <div className="App">Our Team</div>
    <div className="team-container">
      {teamMembers.map((member) => (
        <div className="team-field-container" key={member}>
          <div className="team-field">
            <div className="team-image">
              <img src={`/rowwdy.jpg`} alt={`Team Member ${member}`} />
            </div>
            <div className="text-name">Your</div>
            <div className="text-post">CEO</div>
          </div>
        </div>
      ))}
      </div>
    
    </>
  );
};

const TopMessage = () => {
return(
  <div>
    <div className="whole-container">
      <div className="image-cont">
        <img src="/rowwdy.jpg" alt="image" />
      </div>
      <div className="right-field">
      <div className="top-title">
        title
      </div>
      <div className="top-desc">
      Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.  Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
      </div>
      </div>
    </div>
  </div>

);
};

const ChairmanMsg = () => {
  return(
    <div>
      <div className="complete-container">
      <div className="msg-container">
      
      
      <div className="msg-title">
        title
      </div>
      <div className="msg-desc">
      Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.  Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
              Your description text goes here. Your description text goes here.
      </div>
      <div className="chairman-name">
      name
      </div>
      </div>
      <div className="chairman-image">
        <img src="/rowwdy.jpg" alt="image" />
      </div>
    </div>
    </div>
  );
  
  };


export default AboutUs;
