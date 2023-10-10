let data = new URLSearchParams(window.location.search);
let userId = parseInt(data.get('id'));
let userDetails = document.getElementById('userDetails');
let postContainer = document.getElementById('postContainer');
let postButton = document.getElementById('postButton');
let postsVisible = false;

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let userDetails = document.getElementById('userDetails');

        userDetails.addEventListener('click', () => {
            if (userDetails.classList.contains('expanded')) {
                resetUserDetails();
            } else {
                let details = `
                        <h2>${user.name}</h2>
                        <p>ID: ${user.id}</p>
                        <p>Email: ${user.email}</p>
                        <p>Phone: ${user.phone}</p>
                        <p>Username: ${user.username}</p>
                        <p>Address: ${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</p>
                        <p>Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                        <p>Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                        <p>Website: ${user.website}</p>
                    `;

                userDetails.innerHTML = details;
                userDetails.classList.add('expanded');
            }
        });

        let userName = document.createElement('h2');
        userName.textContent = user.name;

        let userId = document.createElement('p');
        userId.textContent = `ID: ${user.id}`;

        let userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${user.email}`;

        let userPhone = document.createElement('p');
        userPhone.textContent = `Phone: ${user.phone}`;

        userDetails.append(userName, userId, userEmail, userPhone);

        function resetUserDetails() {
            userDetails.innerHTML = `
            <h2>${user.name}</h2>
            <p>ID: ${user.id}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
        `;
            userDetails.classList.remove('expanded');
        }
    });

let previousButton = document.getElementById('previousButton');
previousButton.addEventListener('click', () => {
    if (userId > 1) {
        window.location.href = `user-details.html?id=${userId - 1}`;
    }
});

let nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => {
            const userCount = users.length;
            let nextUserId = userId + 1;

            if (nextUserId > userCount) {
                nextUserId = 1;
            }

            window.location.href = `user-details.html?id=${nextUserId}`;
        });
});

function togglePosts() {
    if (!postsVisible) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                postContainer.innerHTML = '';
                for (let post of posts) {
                    let postDiv = document.createElement('div');
                    postDiv.classList.add('post');

                    let postTitle = document.createElement('h3');
                    postTitle.textContent = post.title;

                    let postBody = document.createElement('p');
                    postBody.textContent = post.body;

                    let viewDiv = document.createElement('div')
                    viewDiv.classList.add('viewBut');

                    let viewButton = document.createElement('button');
                    viewButton.textContent = 'View';

                    viewButton.addEventListener('click', () => {
                        window.location.href = `post-details.html?id=${post.id}`;
                    });

                    postDiv.append(postTitle, postBody,viewDiv);
                    viewDiv.appendChild(viewButton);
                    postContainer.appendChild(postDiv);
                }
                postButton.textContent = 'Hide Posts';
                postsVisible = true;

            });

    } else {
        postContainer.innerHTML = '';
        postButton.textContent = 'Show Posts';
        postsVisible = false;
    }
}