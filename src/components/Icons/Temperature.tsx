interface IconProps {
	color: string
	width: string
	height: string
}

const TemperatureIcon = ({ color, width, height }: IconProps) => (
	<svg fill="none" width={width} height={height}>
		<g id="Weather / temperature">
			<path
				id="Vector"
				d="M13 15.28V8.5C13 8.23478 12.8946 7.98043 12.7071 7.79289C12.5196 7.60536 12.2652 7.5 12 7.5C11.7348 7.5 11.4804 7.60536 11.2929 7.79289C11.1054 7.98043 11 8.23478 11 8.5V15.28C10.6977 15.4545 10.4464 15.7051 10.2709 16.0068C10.0955 16.3086 10.0021 16.651 10 17C10 17.5304 10.2107 18.0391 10.5858 18.4142C10.9609 18.7893 11.4696 19 12 19C12.5304 19 13.0391 18.7893 13.4142 18.4142C13.7893 18.0391 14 17.5304 14 17C13.9979 16.651 13.9045 16.3086 13.729 16.0068C13.5536 15.7051 13.3023 15.4545 13 15.28ZM16.5 13V5.5C16.5 4.30653 16.0259 3.16193 15.182 2.31802C14.3381 1.47411 13.1935 1 12 1C10.8065 1 9.66193 1.47411 8.81802 2.31802C7.9741 3.16193 7.5 4.30653 7.5 5.5V13C6.80884 13.7832 6.33412 14.7333 6.12281 15.7562C5.91149 16.7792 5.9709 17.8396 6.29515 18.8326C6.6194 19.8255 7.19727 20.7166 7.97158 21.4177C8.74589 22.1188 9.68982 22.6056 10.71 22.83C11.1338 22.9266 11.5657 22.9835 12 23C13.1606 23.0054 14.2979 22.6741 15.274 22.0461C16.2501 21.4182 17.0232 20.5207 17.4994 19.4623C17.9757 18.4038 18.1348 17.23 17.9574 16.083C17.78 14.936 17.2738 13.8651 16.5 13ZM14.5 20.07C13.7043 20.7755 12.661 21.136 11.5996 21.0722C10.5381 21.0085 9.54547 20.5256 8.84 19.73C8.13452 18.9344 7.77401 17.891 7.83777 16.8296C7.90154 15.7681 8.38435 14.7755 9.18 14.07C9.27449 13.9774 9.34965 13.8669 9.40115 13.7451C9.45265 13.6232 9.47945 13.4923 9.48 13.36V5.5C9.48 4.83696 9.74339 4.20107 10.2122 3.73223C10.6811 3.26339 11.317 3 11.98 3C12.643 3 13.2789 3.26339 13.7478 3.73223C14.2166 4.20107 14.48 4.83696 14.48 5.5V13.44C14.4805 13.5723 14.5073 13.7032 14.5588 13.8251C14.6103 13.9469 14.6855 14.0574 14.78 14.15C15.1887 14.5449 15.5087 15.0223 15.7184 15.5505C15.9282 16.0787 16.023 16.6456 15.9965 17.2133C15.97 17.781 15.8228 18.3366 15.5648 18.843C15.3067 19.3493 14.9437 19.7949 14.5 20.15V20.07Z"
				fill={color}
			/>
		</g>
	</svg>
)

export default TemperatureIcon
