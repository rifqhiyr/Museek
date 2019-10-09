import React, { Component } from "react";
import "../assets/scss/ProfileEdit.scss";

class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <div className="container edit">
          <div className="row edit-row">
            <div className="col-12 col-lg-6 edit-col-left">
              <h1 className="edit-title">Edit Profile</h1>
              <form className="edit-form">
                <p className="edit-p">Nama Lengkap</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder="isi nama"
                />
                <p className="edit-p">Email</p>
                <input
                  className="input-form"
                  type="email"
                  placeholder="isi email"
                />
                <p className="edit-p">Password</p>
                <input
                  className="input-form"
                  type="password"
                  placeholder="isi password"
                />
                <p className="edit-p">Jenis kelamin</p>
                <div className="edit-gender">
                  <label>
                    <input className="input-radio" type="radio" /> Laki-Laki
                  </label>
                  <label>
                    <input className="input-radio" type="radio" /> Perempuan
                  </label>
                </div>
                <p className="edit-p">Alamat</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder="isi alamat"
                />
                <p className="edit-p">Kota</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder="isi kota"
                />
                <p className="edit-p">Negara</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder="isi Negara"
                />
              </form>
            </div>
            <div className="col-12 col-lg-6"></div>
          </div>
          <div className="edit-button">
            <button className=" btn tombol edit-btn">Save</button>
            <button className="btn tombol edit-btn">Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileEdit;
