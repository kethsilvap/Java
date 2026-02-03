const tarefas = [];

const inputDescricao = document.getElementById('descricao');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('lista-tarefas');

btnAdicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  const descricao = inputDescricao.value.trim();

  if (descricao === '') {
    alert('Digite uma descrição!');
    return;
  }

  const tarefa = {
    descricao: descricao,
    status: false
  };

  tarefas.push(tarefa);
  inputDescricao.value = '';
  renderizarTarefas();
}

function renderizarTarefas() {
  listaTarefas.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.addEventListener('change', () => {
      tarefa.status = checkbox.checked;
      renderizarTarefas();
    });

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;
    span.className = tarefa.status ? 'concluida' : 'nao-concluida';
    span.style.marginLeft = '10px';

    li.appendChild(checkbox);
    li.appendChild(span);
    listaTarefas.appendChild(li);
  });
}
