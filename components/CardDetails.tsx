import { CarProps } from '@/types';
import React from 'react'
interface CarInterfaceProps {
    isOpen: boolean;
    closeModal: ()=> void;
    car: CarProps
}
const CardDetails = ({isOpen, closeModal, car}: CarInterfaceProps) => {
  return (
    <div>
      car details
    </div>
  )
}

export default CardDetails
