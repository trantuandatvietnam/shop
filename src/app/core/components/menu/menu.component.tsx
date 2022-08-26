import { useEffect, useState } from 'react';
import { menuConfig } from '../../../config/menu.config';
import MenuTemplate from './menu.template';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MenuComponent() {
  const [urlSelected, setUrlSelected] = useState<string>(menuConfig.default);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(menuConfig.default);
    }
    setUrlSelected(location.pathname);
  }, [location, navigate]);

  const selectMenuItem = (url: string) => {
    setUrlSelected(url);
    navigate(url);
  };

  return (
    <MenuTemplate urlSelected={urlSelected} selectMenuItem={selectMenuItem} />
  );
}
