import { useAppSelector } from '../../hook'

import {
	WeatherWrapper,
	Temperature,
	Span,
	WeatherText,
} from './Weather.styled'

const Weather: React.FC = () => {
	const { temperature, weatherText } = useAppSelector(
		(state) => state.weather.weather
	)

	return (
		<WeatherWrapper>
			<Temperature>
				{temperature} <Span>°C</Span>{' '}
			</Temperature>
			<WeatherText>{weatherText}</WeatherText>
		</WeatherWrapper>
	)
}

export default Weather
