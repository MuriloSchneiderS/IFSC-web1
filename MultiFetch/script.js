document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const statusElement = document.getElementById('status');
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar posts: ' + response.statusText);
        }
        return response.json();
    })
    .then(posts => {// esconde o status de carregamento e exibe os posts
        statusElement.style.display = 'none'; 
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            
            const postTitle = document.createElement('h2');
            postTitle.classList.add('post-title');
            postTitle.textContent = post.title;
            
            const postBody = document.createElement('p');
            postBody.classList.add('post-body');
            postBody.textContent = post.body;
            
            postDiv.appendChild(postTitle);
            postDiv.appendChild(postBody);
            postsContainer.appendChild(postDiv);
            
            postTitle.addEventListener('click', () => {// altera visibilidade dos comentários ao clicar no título do post
                const commentsDiv = postDiv.querySelector('.comments-container');
                if (commentsDiv) {
                    commentsDiv.classList.toggle('visible');
                }
            })
            
            fetch('https://jsonplaceholder.typicode.com/posts/'+post.id+'/comments')// busca comentários para cada post
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar posts: ' + response.statusText);
                }
                return response.json();
            })
            .then(comments => {
                const commentsDiv = document.createElement('div');
                commentsDiv.classList.add('comments-container');
                comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    const commentName = document.createElement('h4');
                    commentName.classList.add('comment-name');
                    commentName.textContent = comment.name;
                    const commentBody = document.createElement('p');
                    commentBody.classList.add('comment-body');
                    commentBody.textContent = comment.body;
                    commentDiv.appendChild(commentName);
                    commentDiv.appendChild(commentBody);
                    commentsDiv.appendChild(commentDiv);
                });
                postDiv.appendChild(commentsDiv);
            });
        })
    })
    .catch(error => {
        statusElement.textContent = 'Erro ao carregar posts: ' + error.message;
    });
});