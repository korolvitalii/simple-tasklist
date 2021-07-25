import React from 'react';

type IconButtonProps = {
  onClick: () => void;
  icon: string;
};

export const Button: React.FC<IconButtonProps> = (props) => (
  <button
    className='btn'
    onClick={props.onClick}
    style={{ background: `url(${props.icon})`, height: '36px', width: '38px' }}
    type='button'
  />
);
