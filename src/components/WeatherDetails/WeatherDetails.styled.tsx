import styled from 'styled-components'

export const WeatherDetailsList = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: 25px;
`

export const WeatherDetailsItem = styled.li`
	width: 157px;

	display: flex;
	align-items: center;
	gap: 5px;
`

export const WeatherDetailsText = styled.p`
	width: 100%;

	text-align: left;
	font-size: 18px;
	font-weight: 400;

	display: flex;
	justify-content: space-between;
	gap: 4px;
`
