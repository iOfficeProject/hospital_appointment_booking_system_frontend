import React from "react";
import "./MainSection.css";

const users = [
  {
    name: "abc",
    address: "abc street",
    mobile: 1234567890,
  },
  {
    name: "def",
    address: "abc street abc",
    mobile: 1234567899,
  },
];

const MainSection = () => {
  return (
    <div>
      <section className="main">
        <h3>List of doctors</h3>
        <div className="grid">
            {users.map((user) => {
                return (
                    <div className="column">
                        <p>{user.name}</p>
                        <p>{user.address}</p>
                        <p>{user.mobile}</p>
                    </div>
                )
            })}
        </div>
      </section>
    </div>
  );
};

export default MainSection;
