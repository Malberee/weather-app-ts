interface IconProps {
	color: string
	width: string
	height: string
}

const HumidityIcon = ({ color, width, height }: IconProps) => (
	<svg fill="none" width={width} height={height}>
		<g id="Weather / water">
			<path
				id="Vector"
				d="M2.71999 7.65001C2.91555 7.70743 3.10354 7.788 3.27999 7.89001C3.89981 8.25994 4.60817 8.45526 5.32999 8.45526C6.05181 8.45526 6.76018 8.25994 7.37999 7.89001C7.77045 7.66917 8.21141 7.5531 8.65999 7.5531C9.10858 7.5531 9.54953 7.66917 9.93999 7.89001C10.5673 8.2487 11.2774 8.43739 12 8.43739C12.7226 8.43739 13.4327 8.2487 14.06 7.89001C14.4505 7.66917 14.8914 7.5531 15.34 7.5531C15.7886 7.5531 16.2295 7.66917 16.62 7.89001C17.2537 8.2522 17.9701 8.44506 18.7 8.45001C19.4052 8.44856 20.0966 8.25495 20.7 7.89001C20.8764 7.788 21.0644 7.70743 21.26 7.65001C21.5146 7.57575 21.7293 7.40339 21.8568 7.17084C21.9843 6.9383 22.0143 6.66462 21.94 6.41001C21.8657 6.1554 21.6934 5.94072 21.4608 5.8132C21.2283 5.68567 20.9546 5.65575 20.7 5.73001C20.3494 5.83821 20.0135 5.98935 19.7 6.18001C19.3814 6.3663 19.019 6.46449 18.65 6.46449C18.281 6.46449 17.9186 6.3663 17.6 6.18001C16.9066 5.79108 16.125 5.58682 15.33 5.58682C14.535 5.58682 13.7533 5.79108 13.06 6.18001C12.738 6.36706 12.3723 6.46559 12 6.46559C11.6276 6.46559 11.2619 6.36706 10.94 6.18001C10.2466 5.79108 9.46498 5.58682 8.66999 5.58682C7.875 5.58682 7.09335 5.79108 6.39999 6.18001C6.08143 6.3663 5.71903 6.46449 5.34999 6.46449C4.98095 6.46449 4.61856 6.3663 4.29999 6.18001C3.98649 5.98935 3.6506 5.83821 3.29999 5.73001C3.04538 5.65575 2.7717 5.68567 2.53916 5.8132C2.30661 5.94072 2.13425 6.1554 2.05999 6.41001C1.98573 6.66462 2.01565 6.9383 2.14318 7.17084C2.2707 7.40339 2.48538 7.57575 2.73999 7.65001H2.71999ZM20.72 15.73C20.3694 15.8382 20.0335 15.9894 19.72 16.18C19.4014 16.3663 19.039 16.4645 18.67 16.4645C18.301 16.4645 17.9386 16.3663 17.62 16.18C16.9266 15.7911 16.145 15.5868 15.35 15.5868C14.555 15.5868 13.7733 15.7911 13.08 16.18C12.758 16.3671 12.3923 16.4656 12.02 16.4656C11.6476 16.4656 11.2819 16.3671 10.96 16.18C10.2666 15.7911 9.48498 15.5868 8.68999 15.5868C7.895 15.5868 7.11335 15.7911 6.41999 16.18C6.10143 16.3663 5.73903 16.4645 5.36999 16.4645C5.00095 16.4645 4.63856 16.3663 4.31999 16.18C4.00649 15.9894 3.6706 15.8382 3.31999 15.73C3.19392 15.6932 3.06185 15.6817 2.9313 15.6959C2.80076 15.7102 2.6743 15.7501 2.55916 15.8132C2.44401 15.8763 2.34243 15.9615 2.26022 16.0639C2.178 16.1663 2.11676 16.2839 2.07999 16.41C2.04322 16.5361 2.03164 16.6682 2.04592 16.7987C2.06019 16.9292 2.10004 17.0557 2.16318 17.1708C2.22632 17.286 2.31153 17.3876 2.41393 17.4698C2.51633 17.552 2.63392 17.6132 2.75999 17.65C2.95555 17.7074 3.14354 17.788 3.31999 17.89C3.93981 18.2599 4.64817 18.4553 5.36999 18.4553C6.09181 18.4553 6.80018 18.2599 7.41999 17.89C7.81045 17.6692 8.25141 17.5531 8.69999 17.5531C9.14858 17.5531 9.58953 17.6692 9.97999 17.89C10.6073 18.2487 11.3174 18.4374 12.04 18.4374C12.7626 18.4374 13.4727 18.2487 14.1 17.89C14.4905 17.6692 14.9314 17.5531 15.38 17.5531C15.8286 17.5531 16.2695 17.6692 16.66 17.89C17.2937 18.2522 18.0101 18.4451 18.74 18.45C19.4452 18.4486 20.1366 18.255 20.74 17.89C20.9164 17.788 21.1044 17.7074 21.3 17.65C21.5546 17.5757 21.7693 17.4034 21.8968 17.1708C22.0243 16.9383 22.0543 16.6646 21.98 16.41C21.9057 16.1554 21.7334 15.9407 21.5008 15.8132C21.2683 15.6857 20.9946 15.6557 20.74 15.73H20.72ZM20.72 10.73C20.3694 10.8382 20.0335 10.9894 19.72 11.18C19.4014 11.3663 19.039 11.4645 18.67 11.4645C18.301 11.4645 17.9386 11.3663 17.62 11.18C16.9266 10.7911 16.145 10.5868 15.35 10.5868C14.555 10.5868 13.7733 10.7911 13.08 11.18C12.758 11.3671 12.3923 11.4656 12.02 11.4656C11.6476 11.4656 11.2819 11.3671 10.96 11.18C10.2666 10.7911 9.48498 10.5868 8.68999 10.5868C7.895 10.5868 7.11335 10.7911 6.41999 11.18C6.10143 11.3663 5.73903 11.4645 5.36999 11.4645C5.00095 11.4645 4.63856 11.3663 4.31999 11.18C4.00649 10.9894 3.6706 10.8382 3.31999 10.73C3.18905 10.6806 3.0492 10.6592 2.90947 10.6672C2.76974 10.6752 2.63325 10.7125 2.50883 10.7766C2.38441 10.8407 2.27483 10.9302 2.18718 11.0393C2.09953 11.1484 2.03576 11.2747 1.99999 11.41C1.96322 11.5361 1.95164 11.6682 1.96592 11.7987C1.98019 11.9292 2.02004 12.0557 2.08318 12.1708C2.14632 12.286 2.23153 12.3876 2.33393 12.4698C2.43633 12.552 2.55392 12.6132 2.67999 12.65C2.87555 12.7074 3.06354 12.788 3.23999 12.89C3.85981 13.2599 4.56817 13.4553 5.28999 13.4553C6.01181 13.4553 6.72018 13.2599 7.33999 12.89C7.73045 12.6692 8.17141 12.5531 8.61999 12.5531C9.06858 12.5531 9.50953 12.6692 9.89999 12.89C10.5273 13.2487 11.2374 13.4374 11.96 13.4374C12.6826 13.4374 13.3927 13.2487 14.02 12.89C14.4105 12.6692 14.8514 12.5531 15.3 12.5531C15.7486 12.5531 16.1895 12.6692 16.58 12.89C17.2137 13.2522 17.9301 13.4451 18.66 13.45C19.3652 13.4486 20.0566 13.255 20.66 12.89C20.8364 12.788 21.0244 12.7074 21.22 12.65C21.4746 12.5757 21.6893 12.4034 21.8168 12.1708C21.9443 11.9383 21.9743 11.6646 21.9 11.41C21.8257 11.1554 21.6534 10.9407 21.4208 10.8132C21.1883 10.6857 20.9146 10.6557 20.66 10.73H20.72Z"
				fill={color}
			/>
		</g>
	</svg>
)

export default HumidityIcon
