import { ReactNode } from 'react'
import { ContainerWrapper } from './Container.styled'

type ContainerProps = {
	children: ReactNode
}

const Container = ({ children }: ContainerProps) => (
	<ContainerWrapper>{children}</ContainerWrapper>
)

export default Container
