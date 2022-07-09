import { useState } from "react";
import "./QueryForm.css";

const QueryForm = (props) => {
  const [fullname, setFullName] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [email, setEmail] = useState("");

  const fullnameChangeHandler = (e) => {
    setFullName(e.target.value);
  };

  const mobilenoChangeHandler = (e) => {
    setMobileNo(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const datasubmit = {
      FullName: fullname,
      MobileNO: mobileno,
      Email: email,
    };
    setFullName("");
    setEmail("");
    setMobileNo("");
    props.getFormData(datasubmit);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label className="fullnamelabel"> Full Name:</label>
          <input
            type="text"
            onChange={fullnameChangeHandler}
            value={fullname}
          />
        </div>
        <div>
          <label className="mobilenolabel">Mobile No:</label>
          <input
            type="number"
            onChange={mobilenoChangeHandler}
            value={mobileno}
          />
        </div>
        <div>
          <label className="emaillabel">Email: </label>
          <input type="email" onChange={emailChangeHandler} value={email} />
        </div>
        <div>
          <button className="submitstyle" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default QueryForm;
