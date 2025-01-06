import blog from "../models/blog.js";

const blogController = {
  getBlogs: async (req, res) => {
    try {
      const result = await blog
        .find({
          $or: [
            { title: { $regex: req.query.searchTerm ?? "", $options: "i" } },
            { category: { $regex: req.query.searchTerm ?? "", $options: "i" } },
          ],
        })
        .skip((req.query.page - 1) * 5)
        .limit(5);
      const totalItems = await blog.find({
        $or: [
          { title: { $regex: req.query.searchTerm ?? "" , $options: "i" } },
          { category: { $regex: req.query.searchTerm ?? "", $options: "i" } },
        ],
      });
      res.render("index", {
        totalItems: totalItems.length,
        response: result,
        currentPage: parseInt(req.query.page ?? 1),
        searchTerm: req.query.searchTerm,
      });
    } catch (err) {
      res.status(500).send("Error fetching items" + JSON.stringify(req.query));
    }
  },
  
  likeBlog: async (req, res) => {
    try {
      const updatedBlog = await blog.findByIdAndUpdate(
        req.body.blogId,
        { $inc: { likes: 1 } },
        { new: true }
      ).select("likes -_id");
      res.status(200).json({ likes: updatedBlog.likes });
    } catch (err) {
        console.error("Error liking blog:", err);
    }
},
};

export default blogController;