import React from 'react';

interface ButtonLinkProps {
  classNameProps: string;
  hrefProps: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ classNameProps, hrefProps, children}) => {
  return (
    <a href={hrefProps} className={classNameProps}>
      {children}
    </a>
  );
};

export default ButtonLink;
