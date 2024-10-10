import { NavButton } from './CommonStyles';

type Props = {
  link: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const NavigationButton = ({ link, label, onClick }: Props) => {
  return (
    <NavButton to={link} onClick={onClick}>
      {label}
    </NavButton>
  );
};

export default NavigationButton;
