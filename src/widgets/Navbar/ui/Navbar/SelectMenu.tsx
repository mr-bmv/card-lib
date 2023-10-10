import { getUserAuthData, userActions } from '@/entities/User';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import './SelectMenu.scss';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SelectMenu() {
  const [open, setOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);
  return (
    <div className="SelectMenu">
      <div className="menu-container" ref={menuRef}>
        <Button
          theme={ThemeButton.LINK}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {authData?.username}
        </Button>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <ul>
            <DropdownItem text={t('myProfile')} to={'profile'} />
            <DropdownItem text={t('myCollection')} />
            <DropdownItem onClick={onLogout} text={'Logout'} />
          </ul>
        </div>
      </div>
    </div>
  );
}

interface DropdownItemProps {
  img?: string;
  text: string;
  onClick?: () => void;
  to?: string;
}

function DropdownItem(props: DropdownItemProps) {
  return (
    <li className="dropdownItem" onClick={props.onClick}>
      {/* <img src={props.img} alt="dropdown item"></img> */}
      {props.to ? (
        <Link
          to={props.to}
          // динамическое обращение к типам через [] , пример [cls[theme]]
          className="link"
          // {...otherProps}
        >
          {props.text}
        </Link>
      ) : (
        <a> {props.text} </a>
      )}
    </li>
  );
}

export default SelectMenu;
