//* DENTRO DE main-page.test.js vamos a importar las utilidades de react testing library,
//* vamos a importar el componente que vamos a testear, comenzaremos con nuestra primer prueba

import React from 'react';
import { render, screen } from '@testing-library/react';
//VAMOS A IMPORTAR UN COMPONENTE, AUN NO LO HEMOS CREADO
import { MainPage } from "../Components/main-page";

// scope global en nuestro test, para que me haga el render antes de cada uno (que no se duplique el render)
beforeEach(()=> render(<MainPage />)) //Hacemos un render del componente

// EL REFACTOR PUEDE SER APLICADO TANTO EN EL CODIGO DEL TEST, 
// ASI COMO EN EL CODIGO DE LA IMPLEMENTACION
describe('Quotes List', () => {
    //nos devuelve un callback
    it("must display 3 quotes",async() => {
        expect(await screen.findAllByRole("listitem")).toHaveLength(3);
        //el matcher toBeInTheDocument() no existe en el core de Jest, 
        //pero es accible a lo que tenemos en src/setupTest.js
    })
});
