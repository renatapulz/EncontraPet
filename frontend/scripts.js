const API_URL = 'http://localhost:3000/pets';

async function carregarPets() {
    try {
        const response = await fetch(API_URL);
        const pets = await response.json();

        const totalPets = pets.length;
        const encontrados = pets.filter(pet => pet.status === 'encontrado').length;
        const porcentagemEncontrados = totalPets ? ((encontrados / totalPets) * 100).toFixed(1) : 0;
        document.getElementById('porcentagem-encontrados').textContent = `${porcentagemEncontrados}%`;

        const galeria = document.getElementById('petGrid');
        galeria.innerHTML = '';

        pets.reverse().forEach(pet => {
            const card = document.createElement('div');
            card.classList.add('pet-card');

            const buttonHTML = pet.status === 'encontrado'
                ? `<button class="encontrado" disabled>Animal Encontrado</button>`
                : `<button class="sinalizar-encontrado" onclick="sinalizarEncontrado('${pet.id}')">Sinalizar como Encontrado</button>`;

            card.innerHTML = `
          <img src="${pet.foto}" alt="Foto de ${pet.nome}">
          <h3>${pet.nome}</h3>
          <p>${pet.tipo}, ${pet.idade} ano(s)</p>
          <p><strong>Último local visto:</strong> ${pet.ultimo_local_visto}</p>
          <p><strong>Contato:</strong> ${pet.contato_nome} - ${pet.contato_telefone}</p>
          <p><strong>Recompensa:</strong> R$ ${pet.recompensa || 0}</p>
          ${buttonHTML}
        `;
            galeria.appendChild(card);
        });
    } catch (err) {
        console.error('Erro ao carregar pets:', err);
    }
}

async function sinalizarEncontrado(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'encontrado' })
        });

        if (response.ok) {
            alert('Pet sinalizado como encontrado!');
            carregarPets();
        } else {
            const errorData = await response.json();
            alert(`Erro ao sinalizar o pet como encontrado: ${errorData.error || 'Desconhecido'}`);
        }
    } catch (err) {
        console.error('Erro ao sinalizar como encontrado:', err);
    }
}

async function cadastrarPet(event) {
    event.preventDefault();

    const form = event.target;
    const dados = {
        nome: form.nome.value,
        tipo: form.tipo.value,
        idade: Number(form.idade.value),
        foto: form.foto.value,
        caracteristicas_fisicas: form.caracteristicas_fisicas.value,
        ultimo_local_visto: form.ultimo_local_visto.value,
        contato_nome: form.contato_nome.value,
        contato_telefone: form.contato_telefone.value,
        recompensa: parseFloat(form.recompensa.value || 0),
        status: 'perdido'
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            alert('Pet cadastrado com sucesso!');
            form.reset();
            carregarPets();
        } else {
            alert('Erro ao cadastrar o pet.');
        }
    } catch (err) {
        console.error('Erro no cadastro:', err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarPets();
    document.getElementById('petForm').addEventListener('submit', cadastrarPet);
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("show");
        toggleButton.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });
});