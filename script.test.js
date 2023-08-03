/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test("valida cpf",function(){
    var resultado = validarCPF("82533760064")
    expect(resultado).toBe(true)
})

test("valida cpf",function(){
    var resultado2 = validarCPF("000.000.000-00")
    expect(resultado2).toBe(false)
})