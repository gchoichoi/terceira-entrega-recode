import React from 'react';
import BannerPromocao from '../../components/BannerPromocao';
import Subtitle from "../../components/Subtitle";
import Lista from "../../components/Lista";
import "../../index.css";
import ListaBrasil from '../../components/ListaBrasil';

export default function Promocoes() {
  return (
    <div>
        <BannerPromocao/>
        <div className="container">
            <Subtitle subtitle = "Promoções para conhecer o Brasil!"/>
            <ListaBrasil/>
        </div>
        <div className="container">
            <Subtitle subtitle = "Promoções para visitar o mundão!"/>
            <Lista/>
        </div>
    </div>
    
    
  )
}
