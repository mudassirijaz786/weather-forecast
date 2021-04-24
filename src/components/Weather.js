import React from 'react';

// Stateless Component

const Weather = props => (
	<div>
		{props.icon && <p className="weather__icon"><i className={"wi wi-" + props.icon}></i></p>}
		{props.temperature && <p className="weather__main"><span className="weather__value">{props.temperature}°{props.degree}</span></p>}
		{props.description && <p className="weather__main">{props.description}</p>}
		{props.city && props.country && <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span></p>}
		{props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>}
		{props.error && <p className="weather__key">{props.error}</p>}
	</div>
)

export default Weather;