import React from "react";

export default function Alert(props) {
  if(Object.keys(props.alert).length !== 0){
  var typet=props.alert.type;
   typet=(typet.charAt(0).toUpperCase()+typet.slice(1,7));
  }
  if(Object.keys(props.alert).length === 0){
    return (null);
  }
  return (
    <div style={{height:'3.5rem'}}>
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
       <strong>{typet}</strong> {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    
    </div>
  );
}
