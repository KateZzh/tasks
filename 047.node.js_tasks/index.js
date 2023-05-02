const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const arr = [1, 2, 3, 1, 2];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  response.send(newArr);
});

app.get("/about", (request, response) => {
  response.send("Hi!");
});

app.get("/contact", (request, response) => {
  response.send("Hi!");
});

app.get("/:id", (request, response) => {
  const { id } = request.params;

  const arr = [1, 2, 3, 4, 5, 6];
  let resArr = [];
  let itemArr = [];

  for (let i = 0; i < arr.length; i++) {
    itemArr.push(arr[i]);

    if (id == itemArr.length) {
      resArr.push(itemArr);
      itemArr = [];
    }
  }
  response.send(resArr);
});

// app.get("/:id", (request, response) => {
//   const { id } = request.params;
//   response.send(`Вы попали в роут с динамическим доменом id: ${id}`);
// });

app.get("/:id", (request, response) => {
  const { id } = request.params;

  response.send();
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
