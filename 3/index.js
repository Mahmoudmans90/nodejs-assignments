import fs from "fs";
import http from "http";
import url from "url";
import zlib from "zlib";
import { pipeline } from "stream";
/*1. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
• Input Example: "./big.txt"
• Output Example: log each chunk */

let readFile = fs.createReadStream("./big.txt", {
  encoding: "utf-8",
  highWaterMark: 16,
});

readFile.on("data", (chunk) => console.log({ chunk }));

/*2. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
• Input Example: "./source.txt", "./dest.txt"
• Output Example: File copied using streams */

let WriteableFile = fs.createWriteStream("./dest.txt", {
  encoding: "utf-8",
  highWaterMark: 16,
});
readFile.on("data", (chunk) => WriteableFile.write(chunk));

/*3. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
• Input Example: "./data.txt", "./data.txt.gz" */

pipeline(
  fs.createReadStream("./big.txt"),
  zlib.createGzip(),
  fs.createWriteStream("./data.txt.gz"),
  (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("File compressed successfully");
    }
  }
);

/*Part2: Simple CRUD Operations Using HTTP ( 5.5 Grades):
For allthe following APIs, you must use the fs module to read and write data from a JSON file (e.g., users.json).
Do not store or manage data using arrays (0.5 Grades).
1. Create an API that adds a new user to your users stored in a JSON file. (ensure that the email of the new user doesn’t exist before) (1 Grade)
o URL: POST /user */

let readUSers = () => JSON.parse(fs.readFileSync("user.json"));
let writeUSers = (users) =>
  fs.writeFileSync("user.json", JSON.stringify(users));

let server = http.createServer((req, res) => {
  let pasename = url.parse(req.url, true).pathname;
  if (pasename == "/user" && req.method == "GET") {
    let users = readUSers();
    return res.end(JSON.stringify(users));
  }
  if (parsedUrl.pathname.match(/^\/user\/\d+$/) && method === "GET") {
    const id = parseInt(parsedUrl.pathname.split("/")[2]);
    const user = readUsers().find((u) => u.id === id);
    return res.end(JSON.stringify(user || {}));
  }
  if (pasename === "/user" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      let user = JSON.parse(body);
      let users = readUSers();
      if (users.find((u) => u.email == user.email)) {
        res.statusCode = 400;
        return res.end("Email is already Exists");
      }
      users.push(user);
      writeUSers(users);

      res.end("user Added");
    });
  }
  if (parsedUrl.pathname.match(/^\/user\/\d+$/) && method === "PATCH") {
    const id = parseInt(parsedUrl.pathname.split("/")[2]);
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const users = readUsers();
      const index = users.findIndex((u) => u.id === id);
      if (index === -1) return res.end("User not found");
      const data = JSON.parse(body);
      users[index] = { ...users[index], ...data };
      writeUsers(users);
      res.end("User updated");
    });
  }
  if (parsedUrl.pathname.match(/^\/user\/\d+$/) && method === "DELETE") {
    const id = parseInt(parsedUrl.pathname.split("/")[2]);
    const users = readUsers();
    const newUsers = users.filter((u) => u.id !== id);
    writeUsers(newUsers);
    res.end("User deleted");
  }
});
server.listen(3000, () => console.log("server is runing"));

/*1. What is the Node.js Event Loop? (0.5 Grade)
The Node.js Event Loop is a loop that allows the execution of asynchronous operations and manages callbacks 
*/

/*1. 2. What is Libuv and What Role Does It Play in Node.js? (0.5 Grade)
Libuv is a C++ library that manages the Event Loop, the Thread Pool, and asynchronous I/O operations in Node.js.*/

/*3. How Does Node.js Handle Asynchronous Operations Under the Hood? (0.5 Grade)
Node.js sends long-running operations to Libuv to execute in the background, and once they complete, their callbacks are added to the Event Queue. 
*/
/*4. What is the Difference Between the Call Stack, Event Queue, and Event Loop in Node.js? (0.5 Grade)
Call Stack: Manages the currently executing functions.
Event Queue: A queue of callbacks.
Event Loop: Connects the Call Stack and Event Queue.

*/

/*5. What is the Node.js Thread Pool and How to Set the Thread Pool Size? (0.5 Grade)
A set of threads used to handle heavy operations.
 using UV_THREADPOOL_SIZE.
*/
/*6. How Does Node.js Handle Blocking and Non-Blocking Code Execution? (0.5 Grade)
Blocking: Code prevents any other operations from executing until it finishes.
Non-Blocking: Code allows other operations to execute while waiting .
*/
