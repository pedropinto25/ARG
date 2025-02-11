import GITHUB_TOKEN from './config.js';
import { checkLogin, decryptData } from './auth.js';

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const propertySection = document.getElementById('property-section');
  const propertyList = document.getElementById('property-list');
  const addPropertyForm = document.getElementById('add-property-form');
  const imageList = document.getElementById('image-list');
  let selectedImages = [];

  // Descriptografar o token
  const decryptedToken = decryptData(GITHUB_TOKEN);

  // Mostrar formulário de login
  loginForm.style.display = 'block';

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (checkLogin(username, password)) {
      loginForm.style.display = 'none';
      propertySection.style.display = 'block';
      loadProperties();
      loadImages();
    } else {
      alert('Usuário ou senha incorretos');
    }
  });

  function loadProperties() {
    // Carregar imóveis do arquivo JSON
    fetch('https://raw.githubusercontent.com/pedropinto25/ARG/main/imoveis.json')
      .then(response => response.json())
      .then(imoveis => {
        imoveis.forEach(imovel => {
          addPropertyToList(imovel);
        });
      })
      .catch(error => console.error('Error loading properties:', error));
  }

  function loadImages() {
    // Carregar imagens do repositório GitHub
    fetch('https://api.github.com/repos/pedropinto25/ARG/contents/static', {
      headers: {
        'Authorization': `token ${decryptedToken}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Unauthorized');
        }
        return response.json();
      })
      .then(files => {
        if (Array.isArray(files)) {
          files.forEach(file => {
            if (file.type === 'file' && /\.(jpg|jpeg|png|gif)$/i.test(file.name)) {
              const img = document.createElement('img');
              img.src = file.download_url;
              img.alt = file.name;
              img.addEventListener('click', () => {
                img.classList.toggle('selected');
                if (img.classList.contains('selected')) {
                  selectedImages.push(img.src);
                } else {
                  selectedImages = selectedImages.filter(url => url !== img.src);
                }
              });
              imageList.appendChild(img);
            }
          });
        } else {
          console.error('Error: Response is not an array', files);
        }
      })
      .catch(error => console.error('Error loading images:', error));
  }

  // Adicionar imóvel à lista
  function addPropertyToList(imovel) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <span>${imovel.titulo}</span>
      <button class="btn btn-danger btn-sm" onclick="removeProperty(${imovel.id})">Remover</button>
    `;
    propertyList.appendChild(li);
  }

  // Remover imóvel
  window.removeProperty = function(id) {
    // Remover do DOM
    const item = document.querySelector(`button[onclick="removeProperty(${id})"]`).parentElement;
    propertyList.removeChild(item);

    // Remover do arquivo JSON
    fetch('https://raw.githubusercontent.com/pedropinto25/ARG/main/imoveis.json')
      .then(response => response.json())
      .then(imoveis => {
        const updatedImoveis = imoveis.filter(imovel => imovel.id !== id);
        saveProperties(updatedImoveis);
      })
      .catch(error => console.error('Error removing property:', error));
  };

  // Salvar imóveis no arquivo JSON
  function saveProperties(imoveis) {
    const updatedContent = JSON.stringify(imoveis, null, 2);

    // Obter o SHA atual do arquivo
    fetch('https://api.github.com/repos/pedropinto25/ARG/contents/imoveis.json', {
      headers: {
        'Authorization': `token ${decryptedToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      const sha = data.sha;

      // Atualizar o arquivo com o novo conteúdo
      fetch('https://api.github.com/repos/pedropinto25/ARG/contents/imoveis.json', {
        method: 'PUT',
        headers: {
          'Authorization': `token ${decryptedToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Atualizar imoveis.json',
          content: utf8ToBase64(updatedContent),
          sha: sha
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Imóveis atualizados:', data);
      })
      .catch(error => console.error('Error saving properties:', error));
    })
    .catch(error => console.error('Error fetching SHA:', error));
  }

  // Adicionar novo imóvel
  addPropertyForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newImovel = {
      id: Date.now(), // Usar timestamp como ID
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
      area: document.getElementById('area').value,
      quartos: document.getElementById('quartos').value,
      banhos: document.getElementById('banhos').value,
      garagem: document.getElementById('garagem').value,
      imagens: selectedImages
    };

    fetch('https://raw.githubusercontent.com/pedropinto25/ARG/main/imoveis.json')
      .then(response => response.json())
      .then(imoveis => {
        imoveis.push(newImovel);
        saveProperties(imoveis);
      })
      .catch(error => console.error('Error adding property:', error));

    addPropertyToList(newImovel);

    // Limpar formulário
    addPropertyForm.reset();
    selectedImages = [];
    document.querySelectorAll('.image-list img').forEach(img => img.classList.remove('selected'));
  });
});