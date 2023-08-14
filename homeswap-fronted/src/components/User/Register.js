import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const [FormSteps, setFormSteps] = useState(0);

  const Max_Step = 3;

  //destructuring react hook form
  //register help us to track our input data
  //formState helps us to catch errors
  const {
    watch, // watch listen to the form state in real time
    register,
    handleSubmit,
    formState: { errors, isValid }, //is valid check the validity of the form(return a boolean value)
  } = useForm({ mode: "all" }); // setting mode to all allow validation on key press not on submit which is the default mode

  function handleChangeStep() {
    setFormSteps((step) => step + 1);
  }

  function handleChangeStepBack() {
    setFormSteps((step) => step - 1);
  }

  function SubmitForm(value) {
    window.alert(JSON.stringify(value, null, 2));
    handleChangeStep();
  }

  function renderPrevButton() {
    if (FormSteps <= 0 || FormSteps === 3) {
      return undefined;
    } else {
      return (
        <div className="backBut">
          <button type="button" onClick={handleChangeStepBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="0"
              stroke="currentColor"
              className="bak"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
      );
    }
  }

  function RenderButton() {
    if (FormSteps > 2) {
      return undefined;
    } else if (FormSteps === 2) {
      return (
        <button
          disabled={!isValid}
          type="submit"
          className="btn btn-success mt-4"
          id="butt"
        >
          Submit Data
        </button>
      );
    } else {
      return (
        <button
          disabled={!isValid}
          onClick={handleChangeStep}
          type="button"
          className="btn btn-success mt-4"
          id="butt"
        >
          Next Page
        </button>
      );
    }
  }

  return (
    <div className="reg-body">
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="form-body">
          <form onSubmit={handleSubmit(SubmitForm)}>
            <div className="trackSteps">
              {FormSteps < Max_Step && (
                <div>
                  <p>
                    Step of {FormSteps + 1} / {Max_Step}
                  </p>
                </div>
              )}

              {renderPrevButton()}
            </div>
            {FormSteps === 0 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control col-sm-6"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Please type a username",
                    },
                  })}
                />
                {errors.username && (
                  <pre className="error">{errors.username.message}</pre>
                )}
              </section>
            )}

            {FormSteps === 1 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Billing Information
                </h2>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control col-sm-6"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Please type a address",
                    },
                  })}
                />
                {errors.address && (
                  <pre className="error">{errors.address.message}</pre>
                )}
              </section>
            )}

            {FormSteps === 2 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Legal Information
                </h2>
                <div className="block mt-6">
                  <input
                    name="toc"
                    className=""
                    type="checkbox"
                    {...register("toc", {
                      required: true,
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Terms and Conditions
                    </a>
                    .
                  </span>
                </div>
                <div className="block mt-6">
                  <input
                    name="pp"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                    {...register("pp", {
                      required: true,
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
                <br />
              </section>
            )}

            {FormSteps > 2 && (
              <section>
                <h2 className="">Congratulations!</h2>
                <p>Acount created successfully. Thank you</p>
              </section>
            )}

            {RenderButton()}
            {
              //unomment to preview data state in real time
              /* <pre>{JSON.stringify(watch(), null, 2)}</pre> */
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
