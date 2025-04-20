const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create.view.page");

const getTeachers = async (req, res) => {
  try {
    // const userData = await fetch("https://jsonplaceholder.typicode.com/users");
    // const teachers = await userData.json()
    const userData = await axios("https://jsonplaceholder.typicode.com/users");
    // console.log(userData);
    const teachers = userData.data;
    res.render(createViewPage("teachers"), { title: "Teachers", teachers });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading teachers data" });
  }
};

const getTeacherById = async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${teacherId}`
    );
    res.render(createViewPage("teacher"), { title: "Teachers", teacher: data });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading teachers data" });
  }
};

const getAddTeacher = (req, res) => {
  try {
    res.render(createViewPage("add-teacher"), { title: "Teachers" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const postAddTeacher = async (req, res) => {
  try {
    const { username, email, phone } = req.body;
    const userData = await axios.post(
      "https://jsonplaceholder.typicode.com/users/",
      {
        username,
        email,
        phone,
      }
    );
    const teacher = userData.data;
    res.render(createViewPage("teacher"), {
      title: "Teachers",
      teacher,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const deleteTeacherById = async (req, res) => {
  try {
    // const id = req.params.id
    const { id } = req.params;
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(userData.data);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const getEditTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    console.log(userData);
    const teacher = userData.data;
    res.render(createViewPage("edit-teacher"), { title: "Teachers", teacher });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

const putEditTeacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, email, phone } = req.body;
    const userData = await axios.patch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        name,
        username,
        email,
        phone,
      }
    );
    console.log(userData);
    const teacher = userData.data;
    res.render(createViewPage("teacher"), { title: "Teachers", teacher });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
};

module.exports = {
  getTeachers,
  getTeacherById,
  getAddTeacher,
  postAddTeacher,
  deleteTeacherById,
  getEditTeacherById,
  putEditTeacherById,
};
