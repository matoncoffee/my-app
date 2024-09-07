document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventdefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const user = await response.json();
  displayUser(user);
});

function displayUser(user){
  const userList = document.getElementById('userList');
  const userItem = document.createElement('div');
  userItem.textContent = `${user.name} - ${user.email}`;
  userList.appendChild(userItem);
}
