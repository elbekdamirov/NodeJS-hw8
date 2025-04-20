const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create.view.page");

const getComments = async (req, res) => {
  try {
    const userData = await axios(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const comments = userData.data;
    res.render(createViewPage("comments"), { title: "Comments", comments });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading comments data" });
  }
};

const getCommentsById = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );
    res.render(createViewPage("comment"), { title: "Comments", comment: data });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading comments data" });
  }
};

const getAddComment = (req, res) => {
  try {
    res.render(createViewPage("add-comment"), { title: "Comments" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const postAddComment = async (req, res) => {
  try {
    const { name, email, body } = req.body;
    const userData = await axios.post(
      "https://jsonplaceholder.typicode.com/comments/",
      {
        name,
        email,
        body,
      }
    );
    const comment = userData.data;
    res.render(createViewPage("comment"), {
      title: "Comments",
      comment,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    console.log(userData.data);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const getEditCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/comments/${id}`,
    });
    console.log(userData);
    const comment = userData.data;
    res.render(createViewPage("edit-comment"), { title: "Comments", comment });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const putEditCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, body } = req.body;
    const userData = await axios.patch(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        name,
        email,
        body,
      }
    );
    console.log(userData);
    const comment = userData.data;
    res.render(createViewPage("comment"), { title: "Comments", comment });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

module.exports = {
  getComments,
  getCommentsById,
  getAddComment,
  postAddComment,
  deleteCommentById,
  getEditCommentById,
  putEditCommentById,
};
