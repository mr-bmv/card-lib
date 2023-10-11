import { Link } from 'react-router-dom';
import cls from './DropdownItem.module.scss';

interface DropdownItemProps {
  text: string;
  onClick?: () => void;
  to?: string;
}

export const DropdownItem = ({ text, onClick, to }: DropdownItemProps) => {
  return (
    <li className={cls.dropdownItem} onClick={onClick}>
      {to ? (
        <Link to={to} className="link">
          {text}
        </Link>
      ) : (
        <a> {text} </a>
      )}
    </li>
  );
};
