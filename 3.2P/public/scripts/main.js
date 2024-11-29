document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/blogs')
        .then((response) => response.json())
        .then((blogs) => {
            const row = document.getElementById('blogMainContent');
            let cards = '';
            blogs.forEach((blog, index) => {
                cards += `
                    <div class="col s12 m4">
                        <div class="card">
                            <div class="card-image ">
                                <img src="/assets/images/blogs/${blog.image}" class="myimg" alt="${blog.title}">
                            </div>
                            <div class="card-content">
                                <h6 class="btitle"><b>${blog.title}</b></h6>
                                
                                <p>${blog.content.substring(0, 100)}...</p>

                            </div>
                           
                            <div class="card-action">
                                <a href="#">Read More</a>
                                 <div class="author-container">
                                        <span class="author">~ ${blog.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            row.innerHTML = cards;
        })
        .catch((error) => console.error('Error fetching blogs:', error));
});
