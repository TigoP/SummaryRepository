const url = "./data.json";
const tabela = document.getElementById("tabela");
const atingido = document.getElementById("atingido");

fetch(url)
    .then(response => response.json())
    .then(dados => table(dados));

function table(dados) {
    var media = 0;
    var text = '';
    dados.forEach(element => {
        const tr = document.createElement('tr');
        const img = document.createElement('img');
        const span = document.createElement('span');

        tr.setAttribute('class', `${(element.category).toLowerCase()}`);
        tabela.appendChild(tr);

        const tdIcon = document.createElement('td');
        tdIcon.setAttribute('class', "icone");
        img.setAttribute('src', `${(element.icon).toLowerCase()}`);
        tdIcon.appendChild(img);
        tr.appendChild(tdIcon);

        const category = document.createElement('td');
        text = document.createTextNode(element.category);
        category.appendChild(text);
        tr.appendChild(category);

        const score = document.createElement('td');
        text = document.createTextNode(`${(element.score)} / 100`);
        tr.appendChild(score);

        span.setAttribute('style', "color: black");
        score.appendChild(span);
        span.appendChild(text);

        media = media + element.score;
        console.log(media);
    });
    text = document.createTextNode((media/4).toFixed(0))
    atingido.appendChild(text);
}