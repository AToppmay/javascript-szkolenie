// Fetch
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        data.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.innerText = `- ${post.title}`;
            document.body.appendChild(postElement);
        })
    });