import { useEffect } from 'react'

import { useAppDispatch } from '../hook'
import { fetchWeather } from '../store/weatherSlice'

import Container from './Container'
import WeatherContainer from './WeatherContainer'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchWeather())
	}, [dispatch])

	return (
		<Container>
			<WeatherContainer />
		</Container>
	)
}

export default App
