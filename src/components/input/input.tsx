import React from "react";
import "./input.scss";

/**
 * @function Input
 * @param  {any} => props
 * @retun Input component
 */
function Input(props: any) {
  const handleChange = (e: any) => {
    props.onChange(e);
  };
  return (
    <>
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        {props.type === "text" ? (
          <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            disabled={props.disabled}
            onChange={handleChange}
          ></input>
        ) : (
          <textarea
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            rows={4}
            disabled={props.disabled}
            onChange={handleChange}
          ></textarea>
        )}
      </div>
    </>
  );
}

export default Input;
