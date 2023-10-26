import "./App.css";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    state: "",
    address: "",
    city: "",
    code: "",
    comment: false,
    candidates: false,
    offers: false,
    notify: "",
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return console.log(formData);
  };

  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Harshada"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>

          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Patil"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>

          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            
            <input
              type="email"
              name="email"
              id="email"
              placeholder="patil.harshada1503@gmail.com"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className="input-container">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              onChange={handleChange}
              value={formData.country}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="address">Street Address</label>
         
            <input
              type="text"
              name="address"
              id="address"
              placeholder="plot No 8/A, Garkheda"
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div className="input-container">
            <label htmlFor="city">City</label>
            
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Aurangabad"
              onChange={handleChange}
              value={formData.city}
            />
          </div>

          <div className="input-container">
            <label htmlFor="state">State / Provience</label>
            
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Maharashtra"
              onChange={handleChange}
              value={formData.state}
            />
          </div>

          <div className="input-container">
            <label htmlFor="code">Zip / Postal Code</label>
            
            <input
              type="text"
              name="code"
              id="code"
              placeholder="431001"
              onChange={handleChange}
              value={formData.code}
            />
          </div>
          

          <p className="info">By Email</p>
          <div className="checkbox-container" > 
            
            <div className="check-container">
              <input
                type="checkbox"
                name="comment"
                id="comment"
                checked={formData.comment}
                onChange={handleChange}
              />
              <div className="label-cotainer">
                <label htmlFor="comment">Comments</label>
                <p>Get notified when someone posts a comment on posting </p>
              </div>
            </div>

            <div className="check-container">
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={formData.candidates}
                onChange={handleChange}
              />
              <div className="label-cotainer">
                <label htmlFor="candidates">Candidates</label>
                <p>Get notified when candidates applies for a job</p>
              </div>
            </div>

            <div className="check-container">
              <input
                type="checkbox"
                name="offers"
                id="offers"
                checked={formData.offers}
                onChange={handleChange}
              />
              <div className="label-cotainer">
                <label htmlFor="offers">Offers</label>
                <p>Get notified when candidates accepts or rejects an offer</p>
              </div>
            </div>
          </div>

          <div  className="radio-container">
            <p className="info">Push Notifications</p>
            <p className="description">These are deliveres via sms to your mobile</p>

            <div className="radio" > 
            <input
              type="radio"
              name="notify"
              id="everything"
              value="Everything"
              onChange={handleChange}
              checked={formData.notify === "Everything"}
            />
            <label htmlFor="everything">Everything</label>
            </div>


            <div className="radio" >
            <input
              type="radio"
              name="notify"
              id="sameasemail"
              value="Same as Email"
              onChange={handleChange}
              checked={formData.notify === "Same as Email"}
            />
            <label htmlFor="sameasemail">Same as Email</label>
            </div>


            <div className="radio" >
            <input
              type="radio"
              name="notify"
              id="nonoti"
              value="No push Notification"
              onChange={handleChange}
              checked={formData.notify === "No push Notification"}
            />
            <label htmlFor="nonoti">No push Notification</label>
            </div>
          
          </div>

          <button className="btn">Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
