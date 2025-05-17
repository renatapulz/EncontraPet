const API_URL = 'http://localhost:3000/pets';

async function carregarPets() {
    try {
        const response = await fetch(API_URL);
        const pets = await response.json();

        const galeria = document.getElementById('petGrid');
        galeria.innerHTML = '';

        pets.reverse().forEach(pet => {
            const card = document.createElement('div');
            card.classList.add('pet-card');

            card.innerHTML = `
            <img src="${pet.foto}" alt="Foto de ${pet.nome}">
            <h3>${pet.nome}</h3>
            <p>${pet.tipo}, ${pet.idade} ano(s)</p>
            <p><strong>Último local visto:</strong> ${pet.ultimo_local_visto}</p>
            <p><strong>Contato:</strong> ${pet.contato_nome} - ${pet.contato_telefone}</p>
            <p><strong>Recompensa:</strong> R$ ${pet.recompensa || 0}</p>
            `;
            galeria.appendChild(card);
        });
    } catch (err) {
        console.error('Erro ao carregar pets:', err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarPets();
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggleButton.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });
  });