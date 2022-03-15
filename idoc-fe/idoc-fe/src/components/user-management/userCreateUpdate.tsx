import React from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "react-select";

const options = [
  { value: "Admin group", label: "Admin group" },
  { value: "HR group", label: "HR group" },
  { value: "Finance group", label: "Finance group" },
];

const UserManagementModal = ({
  show,
  onHide,
  editUser,
  handleShowDelete,
  formSubmit,
  formState,
  setformState,
}: {
  show: boolean;
  onHide: () => void;
  editUser: boolean;
  handleShowDelete: () => void;
  formSubmit: any;
  formState: any;
  setformState: any;
}) => {
  const onChange = (event: any) => {
    var change, value;
    if (event.target) {
      change = event.target.id;
      value = event.target.value;
    } else {
      change = "groups";
      value = event.value;
    }
    setformState({ ...formState, [change]: value });
    console.log(formState);
  };
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Body>
          <div>
            <div className="d-flex flex-row">
              <div>
                <h2 style={{ color: "#4B4B4B" }}>
                  {editUser ? "Edit" : "New User"}
                </h2>
              </div>
              {editUser ? (
                <div
                  style={{ marginTop: "8px", marginLeft: "5px", width: "80px" }}
                >
                  <h5
                    style={{
                      backgroundColor: "#00B0FF",
                      borderRadius: "10px",
                      textAlign: "center",
                      color: "#4B4B4B",
                    }}
                  >
                    User 1
                  </h5>
                </div>
              ) : (
                ""
              )}
            </div>
            <form onSubmit={formSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                  <input
                    type={"text"}
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    onChange={onChange}
                    value={formState.username}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input
                    type={"email"}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={formState.email}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Groups</label>
                <div className="col-sm-10">
                  <Select
                    options={options}
                    placeholder="Search a group"
                    onChange={onChange}
                    value={{
                      value: formState.groups,
                      label: formState.groups,
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Storage quota</label>
                <div className="col-sm-4">
                  <div className="input-group">
                    <input
                      type={"number"}
                      className="form-control"
                      id="storage"
                      placeholder="Storage quota"
                      onChange={onChange}
                      value={formState.storage}
                      required
                    />
                    <div className="input-group-text">GB</div>
                  </div>
                </div>
                <label className="col-sm-2 col-form-label">Phone No</label>
                <div className="col-sm-4">
                  <input
                    type={"tel"}
                    pattern="[0-9]{10}"
                    className="form-control"
                    id="phone"
                    placeholder="Phone No"
                    onChange={onChange}
                    value={formState.phone}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-4">
                  <input
                    type={"text"}
                    className="form-control"
                    id="gender"
                    placeholder="Gender"
                    onChange={onChange}
                    value={formState.gender}
                    required
                  />
                </div>
                <label className="col-sm-2 col-form-label">Date of Birth</label>
                <div className="col-sm-4">
                  <input
                    type={"date"}
                    className="form-control"
                    id="dob"
                    placeholder="Date of Birth"
                    onChange={onChange}
                    value={formState.dob}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                  <input
                    type={"text"}
                    className="form-control"
                    id="address"
                    placeholder="Address"
                    onChange={onChange}
                    value={formState.address}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Position</label>
                <div className="col-sm-10">
                  <input
                    type={"text"}
                    className="form-control"
                    id="role"
                    placeholder="Position"
                    onChange={onChange}
                    value={formState.role}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input
                    type={"password"}
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={formState.password}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">
                  Password (confirm)
                </label>
                <div className="col-sm-10">
                  <input
                    type={"password"}
                    className="form-control"
                    id="confirmpass"
                    placeholder="Confirm Password"
                    onChange={onChange}
                    value={formState.confirmpass}
                    required
                  />
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="col-md-2 col-form-label"></div>
                <div className="col-md-6">
                  {editUser ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#1976D2", border: "#1976D2" }}
                    >
                      <img
                        src="sent-mail.png"
                        alt="sent"
                        style={{
                          width: "15px",
                          height: "15px",
                          marginRight: "7px",
                        }}
                      />
                      Send a password reset email to this user
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <div className="d-flex flex-row-reverse col-md-4">
                  <div style={{ marginLeft: "10px" }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#00E676", border: "#00E676" }}
                    >
                      <img
                        src="edit.png"
                        alt="edit"
                        style={{
                          width: "15px",
                          height: "15px",
                          marginRight: "7px",
                        }}
                      />
                      {editUser ? "Update" : "Save"}
                    </button>
                  </div>
                  <div>
                    {editUser ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{
                          backgroundColor: "#FF0000",
                          border: "#FF0000",
                        }}
                        onClick={handleShowDelete}
                      >
                        <img
                          src="delete.png"
                          alt="delete"
                          style={{
                            width: "15px",
                            height: "15px",
                            marginRight: "7px",
                          }}
                        />
                        Delete
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const UserCreateUpdate = ({
  show,
  onHide,
  handleShowDelete,
  editUser,
  formSubmit,
  formState,
  setformState,
}: {
  show: boolean;
  onHide: () => void;
  handleShowDelete: () => void;
  editUser: boolean;
  formSubmit: any;
  formState: any;
  setformState: any;
}) => {
  return (
    <>
      <UserManagementModal
        show={show}
        onHide={onHide}
        handleShowDelete={handleShowDelete}
        editUser={editUser}
        formSubmit={formSubmit}
        formState={formState}
        setformState={setformState}
      />
    </>
  );
};

export default UserCreateUpdate;
