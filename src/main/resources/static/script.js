const API_URL = "https://josefernando-b6adcrbwfyh3czff.canadacentral-01.azurewebsites.net/produtos";

// Variáveis globais
let produtos = [];

// Elementos DOM
const produtosContainer = document.getElementById('tarefasContainer');
const emptyState = document.getElementById('emptyState');
const themeToggle = document.getElementById('themeToggle');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    buscarProdutos();
    verificarPreferenciaTema();
    themeToggle.addEventListener('click', alternarTema);
});

// Buscar produtos
async function buscarProdutos() {
    try {
        const res = await fetch(API_URL);
        produtos = await res.json();
        renderizarProdutos();
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        mostrarErro("Não foi possível carregar os produtos.");
    }
}

// Adicionar produto
async function adicionarProduto(e) {
    e.preventDefault();

    const nome = document.getElementById("produtoNome").value.trim();
    const preco = parseFloat(document.getElementById("produtoPreco").value);
    const quantidade = parseInt(document.getElementById("produtoQuantidade").value);

    if (!nome || isNaN(preco) || isNaN(quantidade)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, preco, quantidade })
        });
        buscarProdutos();
        e.target.reset();
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
        mostrarErro("Não foi possível adicionar o produto.");
    }
}

// Editar produto
async function editarProduto(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;

    const nome = prompt("Nome:", produto.nome);
    const preco = parseFloat(prompt("Preço:", produto.preco));
    const quantidade = parseInt(prompt("Quantidade:", produto.quantidade));

    if (!nome || isNaN(preco) || isNaN(quantidade)) return;

    try {
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, preco, quantidade })
        });
        buscarProdutos();
    } catch (error) {
        console.error("Erro ao editar produto:", error);
        mostrarErro("Não foi possível editar o produto.");
    }
}

// Remover produto
async function removerProduto(id) {
    if (!confirm("Deseja excluir este produto?")) return;

    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        buscarProdutos();
    } catch (error) {
        console.error("Erro ao excluir produto:", error);
        mostrarErro("Não foi possível excluir o produto.");
    }
}

// Renderizar produtos
function renderizarProdutos() {
    if (produtos.length === 0) {
        emptyState.style.display = 'block';
        produtosContainer.innerHTML = '';
        produtosContainer.appendChild(emptyState);
        return;
    } else {
        emptyState.style.display = 'none';
    }

    produtosContainer.innerHTML = '';

    produtos.forEach(p => {
        const card = document.createElement("div");
        card.className = "tarefa-card";

        card.innerHTML = `
            <div class="tarefa-header">
                <h3 class="tarefa-titulo">${p.nome}</h3>
            </div>

            <div class="tarefa-body">
                <p class="tarefa-descricao">Preço: R$ ${p.preco.toFixed(2)}</p>
                <p class="tarefa-descricao">Quantidade: ${p.quantidade}</p>
            </div>

            <div class="tarefa-footer">
                <div class="tarefa-acoes">
                    <button class="action-btn btn-success" onclick="editarProduto(${p.id})">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="action-btn btn-danger" onclick="removerProduto(${p.id})">
                        <i class="fas fa-trash"></i> Excluir
                    </button>
                </div>
            </div>
        `;
        produtosContainer.appendChild(card);
    });
}

// Tema
function alternarTema() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

function verificarPreferenciaTema() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Mostrar mensagem de erro
function mostrarErro(msg) {
    const erro = document.createElement('div');
    erro.style.cssText = `
        position: fixed; top: 20px; right: 20px;
        background-color: var(--danger); color: white;
        padding: 15px 20px; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000; max-width: 300px;
    `;
    erro.textContent = msg;
    document.body.appendChild(erro);
    setTimeout(() => document.body.removeChild(erro), 5000);
}
