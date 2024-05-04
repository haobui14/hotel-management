import { FC } from 'react';

type Props = {
  isOpen: boolean;
  toggleRatingModal: () => void;
};

const BackDrop: FC<Props> = ({ isOpen, toggleRatingModal }) =>
  isOpen ? (
    <div
      onClick={(e) => {
        e.stopPropagation();
        toggleRatingModal();
      }}
      className='fixed z-[60] top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.8)]'
    />
  ) : (
    <></>
  );

export default BackDrop;
