import React from "react";

import Banner from "../../components/Banner";
import Subtitle from "../../components/Subtitle";
import Lista from "../../components/Lista";
import NewsletterForm from "../../components/NewsletterForm";
import "../../index.css";

export default function Home(){
    return(
        <div>
            <Banner />
            <div className="container">
            <Subtitle subtitle = "Confira essa seleção de pacotes pra você"/>
            <Lista/>
            </div>
            <div className="formulario">
            <NewsletterForm/>
            </div>
        </div>
    )
}