import { cn } from '@/lib/utils';
import React from 'react';

interface HeaderProps extends React.ComponentProps<'header'> {
  leftSide?: React.ReactNode;
  middleSide?: React.ReactNode;
  rightSide?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header
      className={cn(
        'z-100 sticky top-0 left-0 w-full h-14 px-[14px] shadow-[inset_0_-1px_0_#F1F1F1] flex justify-between items-center bg-white',
        props.className
      )}
    >
      {props.leftSide}
      {props.middleSide}
      {props.rightSide}
    </header>
  );
};

export default Header;
