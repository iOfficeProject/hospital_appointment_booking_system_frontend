import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditHospital = () => {
  const { hospitalId } = useParams();

  const [data, setData] = useState({});
  const navigate = useNavigate();
  const URL = "https://localhost:7264/api/Hospital/";

  useEffect(() => {
    axios
      .get(`${URL}${hospitalId}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [hospitalId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${URL}${hospitalId}`, data)
      .then((res) => {
        alert("Data updated successfully");
        navigate("/hospital");
      })
      .catch((err) => console.log(err));
  };

  const backBtnHandler = () => {
    navigate("/hospital");
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Edit Hospital Form</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <b>Name of Hospital :</b>
        </label>
        <input
          type="text"
          placeholder="Hospital's Name"
          value={data.hospitalName || ""}
          onChange={(e) => setData({ ...data, hospitalName: e.target.value })}
          required
          pattern="[A-Za-z ]+"
          title="Must contain alphabets and spaces only, numbers not allowed"
        />

        <label htmlFor="locality">
          <b>Locality of Hospital :</b>
        </label>
        <input
          type="text"
          placeholder="Address of Hospital"
          value={data.location || ""}
          onChange={(e) => setData({ ...data, location: e.target.value })}
          required
          title="Can contain alphabets, numbers and some relevant symbols"
        />

        <input
          type="button"
          className="back-btn"
          value="Back"
          onClick={backBtnHandler}
        />

        <input type="submit" className="btn" value="Update" />
      </form>
    </div>
  );
};

export default EditHospital;
