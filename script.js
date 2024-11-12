// Function to add a new task to the list
function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();
  const todoTime = document.getElementById('todo-time').value; // Get scheduled time input

  if (todoText === '') return; // If the input is empty, do nothing

  const todoList = document.getElementById('todo-list');

  // Create a new list item
  const listItem = document.createElement('li');

  // Set up task text
  const taskText = document.createElement('span');
  taskText.textContent = todoText;
  taskText.onclick = () => taskText.classList.toggle('completed'); // Toggle completed class
  listItem.appendChild(taskText);

  // Display the time when the task was created
  const creationTime = document.createElement('span');
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  creationTime.textContent = ` (Created at: ${currentTime})`;
  creationTime.style.fontSize = '0.8em';
  creationTime.style.color = '#666';
  listItem.appendChild(creationTime);

  // Display the scheduled time if provided
  if (todoTime) {
      const scheduledTime = document.createElement('span');
      scheduledTime.textContent = ` (Scheduled for: ${todoTime})`;
      scheduledTime.style.fontSize = '0.8em';
      scheduledTime.style.color = '#00695c';
      listItem.appendChild(scheduledTime);
  }

  // Set up remove button
  const removeBtn = document.createElement('span');
  removeBtn.textContent = '❌';
  removeBtn.className = 'remove-btn';
  removeBtn.onclick = () => todoList.removeChild(listItem);
  listItem.appendChild(removeBtn);

  // Add the list item to the list
  todoList.appendChild(listItem);

  // Clear the input fields
  todoInput.value = '';
  document.getElementById('todo-time').value = '';
}
