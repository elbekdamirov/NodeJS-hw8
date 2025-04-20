const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create.view.page");

const getposts = async (req, res) => {
  try {
    const userData = await axios("https://jsonplaceholder.typicode.com/posts");
    const posts = userData.data;
    res.render(createViewPage("posts"), { title: "Posts", posts });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading teachers data" });
  }
};

const getPostsById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    res.render(createViewPage("post"), { title: "Posts", post: data });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading teachers data" });
  }
};

const getAddPosts = (req, res) => {
  try {
    res.render(createViewPage("add-post"), { title: "Posts" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const postAddPosts = async (req, res) => {
  try {
    const { title, body } = req.body;
    const userData = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title,
        body,
      }
    );
    const post = userData.data;
    res.render(createViewPage("post"), {
      title: "Posts",
      post,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postIdDel } = req.params;
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postIdDel}`
    );
    console.log(userData.data);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

module.exports = {
  getposts,
  getPostsById,
  getAddPosts,
  postAddPosts,
  deletePost,
};
