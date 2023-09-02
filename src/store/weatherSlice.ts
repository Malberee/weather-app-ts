import axios from 'axios'
import { format } from 'date-fns'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type Weather = {
	location: string
	date: string
	temperature: number
	weatherText: string
	icon: string
	details: {
		visibility: number
		humidity: number
		feelsLike: number
		wind: number
	}
}

type WeatherState = {
	weather: Weather
	loading: boolean
	error: string | null
}

export const fetchWeather = createAsyncThunk<
	Weather,
	undefined,
	{ rejectValue: string }
>('weather/fetchWeather', async function (_, { rejectWithValue }) {
	const response = await axios.get(
		'https://api.weatherapi.com/v1/current.json?key=ce5873f95fb84efab81122156230805&q=London'
	)

	if (response.status !== 200) {
		return rejectWithValue('Server Error!')
	}

	const {
		location: { region, localtime },
		current: {
			temp_c,
			vis_km,
			humidity,
			feelslike_c,
			wind_kph,
			condition: { text, icon },
		},
	} = response.data

	return {
		location: region,
		date: format(new Date(localtime), 'eeee dd/MM/yyyy'),
		temperature: temp_c,
		weatherText: text,
		icon: icon,
		details: {
			visibility: vis_km,
			humidity: humidity,
			feelsLike: feelslike_c,
			wind: wind_kph,
		},
	} as Weather
})

const initialState: WeatherState = {
	weather: {
		location: 'Valle de Angeles, HN',
		date: 'Monday 01/17/2022',
		temperature: 15,
		weatherText: 'Mostly cloudy',
		icon: '//cdn.weatherapi.com/weather/64x64/day/296.png',
		details: {
			visibility: 10,
			humidity: 10,
			feelsLike: 10,
			wind: 10,
		},
	},
	loading: false,
	error: null,
}

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWeather.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchWeather.fulfilled, (state, action) => {
				state.weather = action.payload
				state.loading = false
			})
			.addCase(fetchWeather.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export default weatherSlice.reducer
