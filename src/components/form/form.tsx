import React from "react";
import { connect } from "react-redux";
import Input from "../input/input";
import {
  updateForm,
  submitForm,
  submitFormSuccess,
} from "../../actions/actions";
import "./form.scss";
import { submit } from "../../utils/constant";
import Loading from "../loading/loading";

/**
 * @function fakeFetchCall
 * @description Fake Fetch API Call
 * @returns resolve after 2000 ms
 */
const fakeFetchCall = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 2000);
  });

/**
 * @function Form
 * @param  {any} => props
 * @retun form component
 */
const Form = (props: any) => {
  const handleOnchange = (e: any) => {
    props.updateForm(e.target.value, e.target.name);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    props.submitForm();

    fakeFetchCall().then(() => {
      props.submitFormSuccess();
    });
  };

  return (
    <>
      <div className="form-content">
        <form>
          {props.form &&
            props.form.map((item: any) => (
              <Input
                label={item.label}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                disabled={props.disable}
                onChange={handleOnchange}
              ></Input>
            ))}
          <button className="submit-button" onClick={handleOnSubmit}>
            {submit}
          </button>
        </form>
      </div>
      {props.disable ? <Loading></Loading> : null}
    </>
  );
};

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateForm: (value: any, name: any) => {
      dispatch(updateForm({ value, name }));
    },
    submitForm: () => {
      dispatch(submitForm());
    },
    submitFormSuccess: () => {
      dispatch(submitFormSuccess());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
