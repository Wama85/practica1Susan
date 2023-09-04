import validarcampo from "./validar.js";

describe("VALIDAR EL CAMPO", () => {

  it("El post deberia tener un Título", () => {
    const dato='TITULO DEL POST';
    expect(validarcampo(dato)).toEqual(true);
  });

  it("El post deberia tener un Título", () => {
    const dato='';
    expect(validarcampo(dato)).toEqual(false);
  });

});
