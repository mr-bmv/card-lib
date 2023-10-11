import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import './DropdownMenu.scss';

interface IItem {
  text: string;
  onClick?: () => void;
  to?: string;
}

interface IDropdownMenuProps {
  items: IItem[];
  btnText: string;
}

export const DropdownMenu = ({ items, btnText }: IDropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

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

  const dropdownItems = items.map(({ text, to, onClick }) => {
    return <DropdownItem key={text} text={t(text)} to={to} onClick={onClick} />;
  });

  return (
    <div className="SelectMenu">
      <div className="menu-container" ref={menuRef}>
        <Button
          theme={ThemeButton.LINK}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {btnText}
        </Button>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <ul>{dropdownItems}</ul>
        </div>
      </div>
    </div>
  );
};
