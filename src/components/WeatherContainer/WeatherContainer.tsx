import { useAppSelector } from '../../hook'

import Location from '../Location'
import Weather from '../Weather'
import WeatherDetails from '../WeatherDetails'

import { WeatherContainerWrapper } from './WeatherContainer.styled'

const WeatherContainer = () => {
	const { loading, error } = useAppSelector((state) => state.weather)

	return (
		<WeatherContainerWrapper>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>Error: {error}</h2>
			) : (
				<>
					<Location />
					<Weather />
					<WeatherDetails />
				</>
			)}
		</WeatherContainerWrapper>
	)
}
export default WeatherContainer
