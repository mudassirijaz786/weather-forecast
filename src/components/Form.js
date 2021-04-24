import React from "react";

// Stateless Comp
const Form = props => (
	<form className="form-group" onSubmit={props.getWeather}>
		<input className="form-control form-weather" type="text" name="city" placeholder="City" />
		<input className="form-control form-weather" type="text" name="country" placeholder="Country" />
		<button className="btn btn-get-weather">Get Weather</button>
	</form>
)

export default Form;
