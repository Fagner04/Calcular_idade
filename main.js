// alert("Olá vamos descobre sua idade !?")

function calcular() {
    const nome = document.getElementById("nome").value;
    const ano2025 = parseInt(document.getElementById("ano2025").value);
    const anoNacimento = parseInt(document.getElementById("anoNacimento").value);

    const idade = ano2025 - anoNacimento;
    const resultado = document.getElementById('resultado').innerText = ` Olá  ${nome}😎, a sua idade e 👉 ${idade}`;

}