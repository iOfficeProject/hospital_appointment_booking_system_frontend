// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./AddDoctor.css";

// const AddRole = () => {
//   const [role, setRole] = useState("");
//   const [roleName, setRoleName] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch role names from the API
//     fetch("https://localhost:7264/api/roles")
//       .then((response) => response.json())
//       .then((data) => {
//         // Extract role names from the array of objects
//         const names = data.map((item) => item.roleName);
//         setRoleName(names);
//       })
//       .catch((error) => {
//         console.error("Error fetching role names:", error);
//       });
//   }, []);

//   const onRoleChangeHandler = (e) => {
//     setRole(e.target.value);
//   };

//   const backBtnHandler = () => {
//     navigate("/");
//   };

//    const addRoleHandler = async(e)=>{
//     e.preventDefault()
//     const post ={
//         roleName
//     }
//     try{
//         const res = await axios.post("https://localhost:7264/api/roles",post)
//         console.log(res);
//     }catch(err){
//         console.error(`Error: ${err}`);
//     }
//     navigate("/role");
//    };

// //   const onSubmitClickHandler = (e) => {
// //     e.preventDefault();
// //     console.log(role);
// //     const _role =
// //       localStorage.getItem("role") && localStorage.getItem("role").length > 0
// //         ? JSON.parse(localStorage.getItem("role"))
// //         : [];

// //     localStorage.setItem("role", JSON.stringify([..._role, { role }]));

// //     navigate("/");
// //   };

//   return (
//     // <div className="form-container">
//     //     <div>
//     //         <h3 className="heading">Add Role Form</h3>
//     //     </div>
//     //     <form onSubmit={onSubmitClickHandler}>
//     //         <label htmlFor="dropdown">Select your role:</label>
//     //         <input id="dropdown" value={role} onChange={onRoleChangeHandler}>
//     //             <option value="">-- Select --</option>
//     //             {roleNames.map((name, index) => (
//     //                 <option key={index} value={name}>
//     //                     {name}
//     //                 </option>
//     //             ))}
//     //         </input>
//     //         <br />
//     //         <input
//     //             type="button"
//     //             className="back-btn"
//     //             value="Back"
//     //             onClick={backBtnHandler}
//     //         />
//     //         <input type="submit" className="btn" value="Submit" />
//     //     </form>
//     // </div>

//     <div className="form-container">
//       <div>
//         <h3 className="heading">Add Role Form</h3>
//       </div>

//       <form onSubmit={addRoleHandler}>
//         <label htmlFor="dropdown">Select your role:</label>

//         <input
//           type="text"
//           placeholder="Add Role"
//           value={roleName}
//           onChange={onRoleChangeHandler}
//           required
//         />

//         <br />

//         <input
//           type="button"
//           className="back-btn"
//           value="Back"
//           onClick={backBtnHandler}
//         />

//         <input type="submit" className="btn" value="Submit" />
//       </form>
//     </div>
//   );
// };

// export default AddRole;

import axios from "axios";

import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "./AddDoctor.css";

const AddRole = () => {
  //   const [role, setRole] = useState("");

  const [roleName, setRoleName] = useState("");

  const navigate = useNavigate();

  const url = "https://localhost:7264/api/roles";

  //   useEffect(() => {

  //     // Fetch role names from the API

  //     fetch("https://localhost:7264/api/roles")

  //       .then((response) => response.json())

  //       .then((data) => {

  //         // Extract role names from the array of objects

  //         const names = data.map((item) => item.roleName);

  //         setRoleNames(names);

  //       })

  //       .catch((error) => {

  //         console.error("Error fetching role names:", error);

  //       });

  //   }, []);

  const onRoleChangeHandler = (e) => {
    setRoleName(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/role");
  };

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();

    const post = {
      roleName,
    };

    try {
      const res = await axios.post(url, post);

      console.log(res);
    } catch (err) {
      console.error(`Error: ${err}`);
    }

    navigate("/role");
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Add Role Form</h3>
      </div>

      <form onSubmit={onSubmitClickHandler}>
        <label htmlFor="dropdown">Select your role:</label>

        <input
          type="text"
          placeholder="Add Role"
          value={roleName}
          onChange={onRoleChangeHandler}
          required
        />

        <br />

        <input
          type="button"
          className="back-btn"
          value="Back"
          onClick={backBtnHandler}
        />

        <input type="submit" className="btn" value="Submit" />
      </form>
    </div>
  );
};

export default AddRole;
