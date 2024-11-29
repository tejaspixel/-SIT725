const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/blogs', (req, res) => {
    const blogs = [
        {
          "id": 1,
          "image": "1.jpg",
          "title": "How to Build a Successful Blog",
          "author": "Tim Burton",
          "date_published": "2022-01-19",
          "content": "Building a successful blog takes time, effort, and dedication. It's not just about writing; it's about creating valuable content that resonates with your readers. Start by identifying your niche and understanding your audience's needs. Consistency is key – keep a regular posting schedule and always engage with your audience through comments and social media. Remember to promote your blog on various platforms and consider collaborations with other bloggers to expand your reach. Over time, with perseverance and the right strategy, you'll see growth and success in your blogging journey."
        },
        {
          "id": 2,
          "image": "2.jpg",
          "title": "The Importance of Self-Care for Bloggers",
          "author": "Mary Smith",
          "date_published": "2022-01-12",
          "content": "Blogging, while rewarding, can also be stressful and demanding. That's why self-care is pivotal for bloggers. Many bloggers face burnout, especially when they're juggling their blog with other commitments. It's vital to take breaks, prioritize mental health, and engage in activities outside blogging. Whether it's reading a book, taking a short vacation, or even just a walk in the park, these activities can rejuvenate the mind. Remember, a well-rested and happy blogger produces better content!"
        },
        {
          "id": 3,
          "image": "3.jpg",
          "title": "Maximizing Engagement on Your Blog",
          "author": "John Seele",
          "date_published": "2022-01-05",
          "content": "Engagement is the lifeline of any blog. When readers interact with your content, it's a sign they value your insights. To boost engagement, focus on crafting compelling content that offers solutions to your readers' challenges. Use eye-catching images, infographics, and engaging headlines. Encourage discussions by asking open-ended questions at the end of your posts. Engage with your readers in the comments, showing them you value their opinions. Additionally, sharing your posts on social media and encouraging readers to do the same can significantly boost engagement levels."
        },
        {
          "id": 4,
          "image": "4.jpg",
          "title": "How to Monetize Your Blog",
          "author": "Jane Smith",
          "date_published": "2022-02-03",
          "content": "Monetizing a blog is a goal for many bloggers. Thankfully, there are numerous ways to achieve this. Ad networks, like Google AdSense, can be a steady revenue source. Affiliate marketing, where you earn a commission for every sale made through a link on your blog, can be lucrative. Sponsored posts and collaborations with brands can also bring in significant income. Additionally, consider creating and selling digital products, like e-books or courses. Remember, while monetization is important, always prioritize delivering quality content to your readers."
        },
        {
          "id": 5,
          "image": "5.jpg",
          "title": "Effective Blogging Strategies for Beginners",
          "author": "Peter Wright",
          "date_published": "2022-02-10",
          "content": "Embarking on a blogging journey can seem overwhelming, but with the right strategies, it becomes manageable and enjoyable. First, choose a niche you're passionate about – this will make content creation more authentic. Invest time in keyword research to ensure your posts reach the right audience. Use high-quality images and maintain a clean website layout for a better user experience. Networking with other bloggers can provide valuable insights and potential collaboration opportunities. Lastly, be patient and persistent. Blogging is a marathon, not a sprint, and success often comes to those who persevere."
        },
        {
          "id": 6,
          "image": "6.jpg",
          "title": "The Power of Visual Content in Blogging",
          "author": "James Brown",
          "date_published": "2022-02-17",
          "content": "In today's digital age, visual content has become an indispensable aspect of blogging. Studies have shown that content accompanied by relevant images receives 94% more views than content without. From infographics, GIFs, to high-quality photographs, visuals not only enhance the aesthetic appeal but also improve comprehension. Embedding videos can further boost engagement, with many users preferring video tutorials over written content. However, always ensure the visuals are relevant and of high quality. Remember, the right visual can often convey what words might take paragraphs to explain."
        }
    ];
    res.json(blogs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
