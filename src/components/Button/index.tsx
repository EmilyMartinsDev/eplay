import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, children, title, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer onClick={onClick} title={title}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
