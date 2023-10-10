fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userList = document.getElementById('userList');

        users.forEach(user => {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            let userName = document.createElement('h2');
            userName.textContent = `${user.name}`;

            let userId = document.createElement('p');
            userId.textContent = `ID: ${user.id}`;

            let button = document.createElement('button');
            button.textContent = 'Details';
            button.addEventListener('click', () => {
                window.location.href = `user-details.html?id=${user.id}`;
            });

            userBlock.append(userName, userId, button);
            userList.appendChild(userBlock);
        });
    });