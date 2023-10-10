const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

function getPostAndComments() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            let postContainer = document.getElementById('postContainer');
            let postDiv = document.createElement('div');
            postDiv.classList.add('post-details');
            for (let key in post) {
                let postInfo = document.createElement('p');
                postInfo.textContent = `${key}: ${post[key]}`;
                postDiv.appendChild(postInfo);
            }
            postContainer.appendChild(postDiv);
        });

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            let commentContainer = document.getElementById('commentContainer');
            for (let i = 0; i < comments.length; i++) {
                let comment = comments[i];
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                for (let key in comment) {
                    let commentInfo = document.createElement('p');
                    commentInfo.textContent = `${key}: ${comment[key]}`;
                    commentDiv.appendChild(commentInfo);
                }
                commentContainer.appendChild(commentDiv);
            }
        });
}
getPostAndComments();