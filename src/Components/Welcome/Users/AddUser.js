import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Hospital/Hospital.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [specializations, setSpecializations] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const navigate = useNavigate();
  const url = "https://localhost:7264/api/users";

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onContactChangeHandler = (e) => {
    setMobileNumber(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onRoleChangeHandler = (e) => {
    setRoleId(e.target.value);
  };

  const onSpecializationChangeHandler = (e) => {
    setSpecializations(e.target.value);
  };

  const onHospitalChangeHandler = (e) => {
    setHospitals(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/user");
  };
  const API_URL = "https://localhost:7264/api/roles";

  useEffect(() => {
    getRoles();
    getSpecialization();

    getHospital();
  }, []);

  const getRoles = () => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        const allRoles = res.data;
        setRoles(allRoles);
        console.log(allRoles);
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };

  const getSpecialization = () => {
    axios

      .get("https://localhost:7264/api/specializations")

      .then((res) => {
        const allSpecializations = res.data;

        setSpecializations(allSpecializations);

        console.log(allSpecializations);
      })

      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };

  const getHospital = () => {
    axios

      .get("https://localhost:7264/api/Hospital")

      .then((res) => {
        const allHospitals = res.data;

        setHospitals(allHospitals);

        console.log(allHospitals);
      })

      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();
    var role = roles.filter((item) => item.roleId === Number.parseInt(roleId));

    console.log("role ==>", role);
    const post = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
      roleId: Number.parseInt(roleId),
      specializationId: 2,
      hospitalId: 2,
      role: role[0],
    };
    console.log(post);
    try {
      const res = await axios.post(url, post);
      console.log(res);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
    navigate("/user");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const showSpecializationAndHospital =
    Number.parseInt(roleId) === 2 || Number.parseInt(roleId) !== 1;

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Add User Form</h3>
      </div>

      <form onSubmit={onSubmitClickHandler}>
        <label htmlFor="name">
          <b>Enter your full name :</b>
        </label>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={onNameChangeHandler}
          required
          pattern={"[A-Za-z ]+"}
          title="Must contain alphabets and spaces only, numbers not allowed"
        />
        <br />
        <label htmlFor="email">
          <b>Enter your email address :</b>
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChangeHandler}
          required
          title="Email should be in proper format"
        />
        <br />
        <label htmlFor="contact">
          <b>Enter your mobile number :</b>
        </label>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={onContactChangeHandler}
          required
          pattern="[0-9]{10}"
          title="Mobile number should contain exactly 10 digits"
        />
        <br />
        <label htmlFor="password">
          <b>Enter your Password :</b>
        </label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={onPasswordChangeHandler}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            title="Password must contain at least 8 characters, including 1 alphabet, 1 number, and 1 special character."
            required
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        <br />
        
        <label htmlFor="dropdown">Select your role:</label>
        <select id="dropdown" value={roleId} onChange={onRoleChangeHandler}>
        <option value="">Select role</option>
          {roles.map((role) => (
            <option key={role.roleId} value={role.roleId}>
              {role.roleName}
            </option>
          ))}
        </select>
        <br />
        {showSpecializationAndHospital && (
          <>
            {Number.parseInt(roleId) === 2 && (
              <>
                <label htmlFor="dropdown">Select your Specialization:</label>
                <select
                  id="dropdown"
                  value={specializations}
                  onChange={onSpecializationChangeHandler}
                >
                  {specializations.map((specialization) => (
                    <option
                      key={specialization.specializationId}
                      value={specialization.specializationId}
                    >
                      {specialization.specializationName}
                    </option>
                  ))}
                </select>
              </>
            )}
            <br /> <label htmlFor="dropdown">Select your Hospital:</label>
            <select
              id="dropdown"
              value={hospitals}
              onChange={onHospitalChangeHandler}
            >
              {hospitals.map((hospital) => (
                <option key={hospital.hospitalId} value={hospital.hospitalId}>
                  {hospital.hospitalName}
                </option>
              ))}
            </select>
          </>
        )}
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

export default AddUser;
