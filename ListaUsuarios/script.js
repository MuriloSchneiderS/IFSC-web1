document.addEventListener("DOMContentLoaded", function() {
    const userList = document.getElementById('user-list');
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if(!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data=>{
            data.forEach(user=>{
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');
                const userName = document.createElement('h3');
                userName.textContent = user.name;
                const userEmail = document.createElement('p');
                userEmail.textContent = user.email;

                userDiv.appendChild(userName);
                userDiv.appendChild(userEmail);

                userList.appendChild(userDiv);
            })
        })
        .catch(error => console.error('Erro para trazer os dados:', error))
});