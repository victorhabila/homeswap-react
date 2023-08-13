import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  //configuring the use of parameter from a url for edit purpose
  const { id } = useParams();

  const { firstName, lastName, email, phoneNumber, password } = userData;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUserData(result.data);
  };

  //creating a function to handle the inputs by setting the input data from the form to our userData
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  //function to save user into the database by appending userData to the post request
  const updateUser = async (e) => {
    e.preventDefault(); // to avoid page reload on form submit
    await axios.post(`http://localhost:8080/user/update/${id}`, userData);
    // navigate page after saving a new users
    navigate("/view-users");
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow mt-4">
      <h2 className="mt-5"> Edit User</h2>
      <form onSubmit={(e) => updateUser(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="fristName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Your Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            required
            value={phoneNumber}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="phoneNumber">
            Password
          </label>
          <input
            className="form-control col-sm-6"
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-users"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
