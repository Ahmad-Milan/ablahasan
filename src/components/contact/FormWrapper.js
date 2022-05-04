import React from "react";

export function FormWrapper({children}) {
  return (
  <section id="contact-form">
    <div className="container p-2">
      <div className="row d-flex justify-content-center align-items-center pt-3">
        <div className="col col-md-10 col-lg-6">
          <div className="card shadow">
            <div className="row">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex justify-content-between border-bottom pb-3">
                  <h1 className="h3 align-self-center">GET IN TOUCH</h1>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
export default FormWrapper;