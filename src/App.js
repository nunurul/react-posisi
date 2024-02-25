import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNext = () => {
    setCurrentForm(currentForm + 1);
  };

  const handleBack = () => {
    if (currentForm === 4 || currentForm === 5) {
      setCurrentForm(2);
    } else {
      setCurrentForm(currentForm - 1);
    }
  };

  const handleAddText = () => {
    setCurrentForm(4); // Assuming 5 represents the "Add Text" form
  };

  const handleAddFilter = () => {
    setCurrentForm(5); // Assuming 6 represents the "Add Filter" form
  };
  return (
    <div className="container">
      <div className="box-c">
        <h3>Halooo</h3>
        {currentForm === 1 && (
          <form
            action=""
            className={`form-1 ${currentForm !== 1 ? "form-next-one" : ""}`}
            id="formone"
          >
            <h3>CREATE ACCOUNT</h3>
            <input type="text" placeholder="Email" id="" required />
            <input type="password" placeholder="Password" id="" required />
            <input
              type="password"
              placeholder="Confirm Password"
              name=""
              id=""
              required
            />

            <div className="btn-box">
              <button type="button" id="nextone" onClick={handleNext}>
                Next
              </button>
            </div>
          </form>
        )}

        {currentForm === 2 && (
          <form
            action=""
            className={`form-2 ${currentForm !== 2 ? "form-next-two" : ""}`}
            id="formtwo"
          >
            <h3>SOCIAL LINKS</h3>
            <input type="text" placeholder="Email" id="" required />
            <input type="text" placeholder="Github" id="" required />
            <input type="text" placeholder="Linkedin" id="" required />

            <div className="btn-box">
              <button type="button" id="backone" onClick={handleBack}>
                Back
              </button>
              <button type="button" id="nexttwo" onClick={handleNext}>
                Next
              </button>
            </div>

            <div className="btn-box-add">
              <button type="button" id="addtext" onClick={handleAddText}>
                Add Text
              </button>
              <button type="button" id="addfilter" onClick={handleAddFilter}>
                Add Filter
              </button>
            </div>
          </form>
        )}

        {currentForm === 3 && (
          <form
            action=""
            className={`form-3 ${currentForm !== 3 ? "form-next-three" : ""}`}
            id="formthree"
          >
            <h3>PERSONAL INFO</h3>
            <input type="text" placeholder="First Name" id="" required />
            <input type="text" placeholder="LastName" id="" required />
            <input type="text" placeholder="Mobile No." id="" required />

            <div className="btn-box">
              <button type="button" id="backtwo" onClick={handleBack}>
                Back
              </button>
              <button type="button">Submit</button>
            </div>
          </form>
        )}

        {currentForm === 4 && (
          <form action="" className="form-text" id="formtext">
            <h4>Add Text</h4>
            <input type="text" placeholder="Email" id="" required />
            <input type="text" placeholder="Github" id="" required />
            <input type="text" placeholder="Linkedin" id="" required />

            <div className="btn-box">
              <button type="button" id="backone">
                Hapus Text
              </button>
              <button type="button" id="simpantext" onClick={handleBack}>
                Simpan
              </button>
            </div>
          </form>
        )}

        {currentForm === 5 && (
          <form action="" className="form-filter" id="formfilter">
            <h4>Add Filter</h4>
            <input type="text" placeholder="Email" id="" required />
            <input type="text" placeholder="Github" id="" required />

            <div className="btn-box">
              <button type="button" id="backone">
                Hapus Filter
              </button>
              <button type="button" id="simpanfilter" onClick={handleBack}>
                Simpan
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
