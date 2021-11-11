window.onload = function() {
    let estados = ["Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
        "Distrito Federal"];

        let select = document.getElementById("input-estado");

        for(let i = 0; i < estados.length; i++) {
            let option = document.createElement("option");
            option.innerHTML = estados[i];
            select.appendChild(option);
        }
        let button = document.getElementById("button");
        button.addEventListener("click", enviar);
        function enviar(event) {
            event.preventDefault();
        }
}