import { useAppSelector } from '../../hook'

import {
	LocationWrapper,
	WeatherIcon,
	CurrentLocation,
	CurrentDate,
	LocationInner,
} from './Location.styled'

const Location: React.FC = () => {
	const { icon, location, date } = useAppSelector(
		(state) => state.weather.weather
	)

	return (
		<LocationWrapper>
			<WeatherIcon src={icon} />
			<LocationInner>
				<CurrentLocation>{location}</CurrentLocation>
				<CurrentDate>{date}</CurrentDate>
			</LocationInner>
		</LocationWrapper>
	)
}

export default Location
