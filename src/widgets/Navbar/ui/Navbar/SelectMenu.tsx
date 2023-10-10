import { getUserAuthData, userActions } from '@/entities/User';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import './SelectMenu.scss';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function SelectMenu() {
  const [open, setOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
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
            <DropdownItem text={'My Profile'} />
            <DropdownItem text={'My Collection'} />
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
}

function DropdownItem(props: DropdownItemProps) {
  return (
    <li className="dropdownItem" onClick={props.onClick}>
      {/* <img src={props.img} alt="dropdown item"></img> */}
      <a> {props.text} </a>
    </li>
  );
}

export default SelectMenu;
