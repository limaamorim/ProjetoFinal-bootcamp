const API_URL = "https://josefernando-b6adcrbwfyh3czff.canadacentral-01.azurewebsites.net/produtos";

// Variáveis globais
let produtos = [];
let produtoEditando = null;

// Elementos DOM
const produtosContainer = document.getElementById('tarefasContainer');
const emptyState = document.getElementById('emptyState');
const themeToggle = document.getElementById('themeToggle');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const cancelBtn = document.getElementById('cancelBtn');
const produtoForm = document.getElementById('produtoForm');
const produtoIdInput = document.getElementById('produtoId');
const produtoNomeInput = document.getElementById('produtoNome');
const produtoPrecoInput = document.getElementById('produtoPreco');
const produtoQuantidadeInput = document.getElementById('produtoQuantidade');

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

// Salvar produto (adicionar ou atualizar)
async function salvarProduto(e) {
    e.preventDefault();

    const nome = produtoNomeInput.value.trim();
    const preco = parseFloat(produtoPrecoInput.value);
    const quantidade = parseInt(produtoQuantidadeInput.value);
    const id = produtoIdInput.value;

    // Validações
    if (!nome) {
        mostrarErro("O nome do produto é obrigatório.");
        return;
    }

    if (isNaN(preco) || preco <= 0) {
        mostrarErro("O preço deve ser maior que zero.");
        produtoPrecoInput.focus();
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        mostrarErro("A quantidade deve ser maior que zero.");
        produtoQuantidadeInput.focus();
        return;
    }

    try {
        const url = id ? `${API_URL}/${id}` : API_URL;
        const method = id ? "PUT" : "POST";

        await fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, preco, quantidade })
        });
        
        buscarProdutos();
        cancelarEdicao();
        mostrarSucesso(id ? "Produto atualizado com sucesso!" : "Produto adicionado com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar produto:", error);
        mostrarErro(id ? "Não foi possível atualizar o produto." : "Não foi possível adicionar o produto.");
    }
}

// Editar produto - preenche o formulário
function editarProduto(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) {
        mostrarErro("Produto não encontrado.");
        return;
    }

    // Preencher campos do formulário
    produtoIdInput.value = produto.id;
    produtoNomeInput.value = produto.nome;
    produtoPrecoInput.value = produto.preco;
    produtoQuantidadeInput.value = produto.quantidade;

    // Mudar título e botão do formulário
    formTitle.textContent = "Editar Produto";
    submitBtn.querySelector('i').className = 'fas fa-save';
    submitText.textContent = 'Atualizar Produto';
    cancelBtn.style.display = 'inline-flex';

    // Scroll para o formulário
    produtoForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Focar no primeiro campo
    produtoNomeInput.focus();
    
    produtoEditando = produto;
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

// Cancelar edição
function cancelarEdicao() {
    produtoForm.reset();
    produtoIdInput.value = '';
    formTitle.textContent = "Adicionar Produto";
    submitBtn.querySelector('i').className = 'fas fa-plus';
    submitText.textContent = 'Adicionar Produto';
    cancelBtn.style.display = 'none';
    produtoEditando = null;
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
        animation: slideIn 0.3s ease-out;
    `;
    erro.textContent = msg;
    document.body.appendChild(erro);
    setTimeout(() => {
        erro.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => document.body.removeChild(erro), 300);
    }, 5000);
}

// Mostrar mensagem de sucesso
function mostrarSucesso(msg) {
    const sucesso = document.createElement('div');
    sucesso.style.cssText = `
        position: fixed; top: 20px; right: 20px;
        background-color: var(--success); color: white;
        padding: 15px 20px; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000; max-width: 300px;
        animation: slideIn 0.3s ease-out;
    `;
    sucesso.textContent = msg;
    document.body.appendChild(sucesso);
    setTimeout(() => {
        sucesso.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => document.body.removeChild(sucesso), 300);
    }, 3000);
}
