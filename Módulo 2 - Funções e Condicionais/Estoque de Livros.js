const estoque = [];

function adicionarLivro(titulo, autor, quantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      console.log(`Livro "${titulo}" já existe no estoque.`);
      return;
    }
  }
  estoque.push({ titulo, autor, quantidade });
  console.log(`Livro "${titulo}" adicionado com sucesso.`);
}

function removerLivro(titulo) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      estoque.splice(i, 1);
      console.log(`Livro "${titulo}" removido do estoque.`);
      return;
    }
  }
  console.log(`Livro "${titulo}" não encontrado.`);
}

function atualizarQuantidade(titulo, novaQuantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      livro.quantidade = novaQuantidade;
      console.log(`Quantidade de "${titulo}" atualizada para ${novaQuantidade}.`);
      return;
    }
  }
  console.log(`Livro "${titulo}" não encontrado.`);
}

function listarLivros() {
  if (estoque.length === 0) {
    console.log("Estoque vazio.");
    return;
  }

  console.log("📖 Livros no estoque:");
  for (let livro of estoque) {
    console.log(`Título: ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
  }
}

adicionarLivro("Dom Casmurro", "Machado de Assis", 5);
adicionarLivro("1984", "George Orwell", 8);

listarLivros();

atualizarQuantidade("1984", 10);

removerLivro("Dom Casmurro");

listarLivros();
