import React, { useState } from "react";
import Swal from "sweetalert2";


const Contact = () => {

const[text, setText] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();


  Swal.fire({
    title: "Are you sure you wanna leave a feedback?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, send!"
  })
  .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Sent!",
        text: "Your feedback has been sent.",
        icon: "success"
      });
      
      setText("");
    }
    
     
  });

}
 

const textInput = (e) => {
setText(e.target.value);
}

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col md-6">
            <h3>HAVE A FEEDBACK?</h3>
            <p>Please fill upp this form below</p>
            <form onSubmit={handleSubmit} >
              <div>
                <label htmlFor="text" className="form-label mt-4">
                </label>
                <textarea onChange={textInput} value={text}
                  className="form-control"
                  id="text"
                  rows="6"
                ></textarea>
              </div>
              <button  type="submit" className="btn btn-dark my-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
