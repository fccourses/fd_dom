'use strict';

const state = [];

const form = document.getElementById('root-form');
const list = document.getElementById('root-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target,
    target: {
      todo: { value: rawInputValue },
    },
  } = e;

  /* Если значение инпута пустое - ничего не делать */
  const inputValue = rawInputValue.trim();

  if (inputValue) {
    /* Пушить в массив значение input'а при сабмите формы */
    state.push(inputValue);
    const li = createListItem(inputValue);
    list.append(li);
  }
  target.reset();
});

/* Рендерить на странице то, что было введено в форму */
function createListItem(inputValue) {
  const li = document.createElement('li');
  const liContent = document.createTextNode(inputValue);

  const btn = createButton(inputValue);
  li.append(liContent, btn);
  return li;
}

function createButton(value) {
  const btn = document.createElement('button');
  btn.dataset.todoValue = value;
  btn.textContent = 'X';

  btn.addEventListener('click', deleteHandler);

  return btn;
}

/* Кнопка удаления у li'шки - удаляет элемент со стрн и 
    его значение из массива */
function deleteHandler(event) {
  const {
    target: {
      parentNode,
      dataset: { todoValue },
    },
  } = event;

  parentNode.remove();
  console.log(todoValue);
  const index = state.indexOf(todoValue);
  state.splice(index, 1);
}
