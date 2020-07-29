import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  classNameProps: string;
  hrefProps: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ classNameProps, hrefProps, children}) => {
  return (
    <Link to={hrefProps} className={classNameProps}>
      {children}
    </Link>
  );
};

export default ButtonLink;
