import React from 'react'

import { Visibility, Temperature, Humidity, Wind } from '../Icons'

import { useAppSelector } from '../../hook'

import {
	WeatherDetailsList,
	WeatherDetailsItem,
	WeatherDetailsText,
} from './WeatherDetails.styled'

const WeatherDetails: React.FC = () => {
	const { visibility, humidity, feelsLike, wind } = useAppSelector(
		(state) => state.weather.weather.details
	)

	return (
		<WeatherDetailsList>
			<WeatherDetailsItem>
				<Visibility color="white" width="24px" height="24px" />
				<WeatherDetailsText>
					Visibility <span>{visibility}km</span>
				</WeatherDetailsText>
			</WeatherDetailsItem>
			<WeatherDetailsItem>
				<Temperature color="white" width="24px" height="24px" />
				<WeatherDetailsText>
					Feels like <span>{feelsLike}°C</span>
				</WeatherDetailsText>
			</WeatherDetailsItem>
			<WeatherDetailsItem>
				<Humidity color="white" width="24px" height="24px" />
				<WeatherDetailsText>
					Humidity <span>{humidity}%</span>
				</WeatherDetailsText>
			</WeatherDetailsItem>
			<WeatherDetailsItem>
				<Wind color="white" width="24px" height="24px" />
				<WeatherDetailsText>
					Wind <span>{wind}kph</span>
				</WeatherDetailsText>
			</WeatherDetailsItem>
		</WeatherDetailsList>
	)
}

export default WeatherDetails
