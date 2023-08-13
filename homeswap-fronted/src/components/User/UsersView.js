import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/user");
    setUsers(result.data);
  };

  //creating a function to handle user delete

  const handleDeleteUser = async (id) => {
    await axios.get(`http://localhost:8080/user/delete/${id}`);

    loadUsers();
  };

  return (
    <div className="container mt-4">
      <section>
        <Search search={search} setSearch={setSearch} />
        <table className="table table-bordered table-hover shadow">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users
              .filter((useer) => {
                return useer.firstName.toLowerCase().includes(search);
              })
              .map((user, index) => (
                <tr key={user.id}>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td className="mx-2">
                    <Link
                      to={`/user-profile/${user.id}`}
                      className="btn btn-info"
                    >
                      <FaEye />
                    </Link>
                  </td>
                  <td className="mx-2">
                    <Link
                      to={`/edit-user/${user.id}`}
                      className="btn btn-success"
                    >
                      <FaEdit />
                    </Link>
                  </td>
                  <td className="mx-2">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UsersView;
