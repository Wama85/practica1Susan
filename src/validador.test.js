import {validarcampo,validarlongitud,validarlongituddetalle} from "./validar.js";

describe("VALIDAR EL CAMPO", () => {

  it("El post deberia tener un Título", () => {
    const dato='TITULO DEL POST';
    expect(validarcampo(dato)).toEqual(true);
  });

  it("El post deberia tener un Título", () => {
    const dato='';
    expect(validarcampo(dato)).toEqual(false);
  });

  it("Titulo debe ser menor a 50 caracteres", () => {
    const dato='Un veloz múrcielago paseaba por las';
    expect(validarlongitud(dato)).toEqual(true);
  });
  it("Titulo tiene mas de 50 caracteres", () => {
    const dato='Un veloz múrcielago paseaba por las colinas en la noche';
    expect(validarlongitud(dato)).toEqual(false);
  });
  it("Contenido tiene que se menos de 150 caracteres", () => {
    const dato='Un veloz múrcielago paseaba por las colinas en la noche';
    expect(validarlongituddetalle(dato)).toEqual(true);
  });

});
