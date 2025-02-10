// loading.js
document.addEventListener('DOMContentLoaded', function() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading';
    loadingDiv.innerHTML = '<img src="./static/logo_arg_cube-removebg-preview.png" alt="Logo da Empresa">';
    document.body.appendChild(loadingDiv);

    const style = document.createElement('style');
    style.innerHTML = `
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        #loading {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
        }

        #loading img {
            width: 150px; /* Ajuste o tamanho conforme necessário */
        }

        #content {
            display: none;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000); // 1000 milissegundos = 1 segundos
    });
});