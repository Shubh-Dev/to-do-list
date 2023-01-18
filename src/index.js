const todos = [
  {
    description: 'wash car',
    completed: false,
    index: 1,
  },
  {
    description: 'buy grocery',
    completed: false,
    index: 2,
  },
  {
    description: 'wash cloths',
    completed: false,
    index: 3,
  },
];

todos.map((todo) => document.querySelector('root').append(todo));
