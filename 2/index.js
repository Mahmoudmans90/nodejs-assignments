import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { unlink } from "fs/promises";
import path from "path";
import { EventEmitter } from "events";
import os from "os";
import { fileURLToPath } from "url";
//1. Write a function that logs the current file path and directory. (0.5 Grade)
// • Output Example:{File:“/home/user/project/index.js”, Dir:“/home/user/project”}
let currentFilePath = () => {
  return { file: fileURLToPath(import.meta.url).replace(/\\/g, "/") };
};
console.log(currentFilePath());

/*2. Write a function that takes a file path and returns its file name. (0.5 Grade)
• Input Example: /user/files/report.pdf
• Output Example:"report.pdf" */

let fileName = (Input) => path.basename(Input);
console.log(fileName("/user/files/report.pdf"));

/*Write a function that builds a path from an object (0.5 Grade)
• Input Example: { dir: "/folder", name: "app", ext: ".js"}
• Output Example: “/folder/app.js” */

let buildPathFromObj = (obj) => path.format(obj).replace(/\\/g, "/");
console.log(buildPathFromObj({ dir: "/folder", name: "app", ext: ".js" }));

/*
4. Write a function that returns the file extension from a given file path. (0.5 Grade)
• Input Example: /docs/readme.md"
• Output Example: “.md”
 */

let getFileExt = (file) => path.extname(file);
console.log(getFileExt("/docs/readme.md"));

/*
5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
• Input Example: /home/app/main.js
• Output Example: { Name: “main”, Ext: “.js” } */

let parsesPath = (Input) => {
  let pars = path.parse(Input);
  return {
    Name: pars.name,
    Ext: pars.ext,
  };
};
console.log(parsesPath("/home/app/main.js"));

/*6. Write a function that checks whether a given path is absolute. (0.5 Grade)
• Input Example: /home/user/file.txt
• Output Example: true */

let checksIfAps = (Input) => path.isAbsolute(Input);
console.log(checksIfAps("/home/user/file.txt"));
console.log(checksIfAps("user/file.txt"));

/*7. Write a function that joins multiple segments (0.5 Grade)
• Input:"src","components", "App.js"
• Output Example: src/components/App.js */
let segmentsJoin = (Input1, Input2, Input3) =>
  path.join(Input1, Input2, Input3).replaceAll("\\", "/");
console.log(segmentsJoin("src", "components", "App.js"));

/*8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
• Input Example: ./index.js
• Output Example: /home/user/project/src/index.js */

let resolvesRelativeAbsolute = (Input) => path.resolve(Input);
console.log(resolvesRelativeAbsolute("./index.js").replaceAll("\\", "/"));

/*9. Write a function that joins two paths. (0.5 Grade)
• Input Example: /folder1, folder2/file.txt
• Output Example: /folder1/folder2/file.txt */

let joinTwoPaths = (Input1, Input2) =>
  path.join(Input1, Input2).replaceAll("\\", "/");
console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

/*
10. Write a function that deletes a file asynchronously. (0.5 Grade)
• Input Example: /path/to/file.txt
• Output Example: The file.txt is deleted.
 */

let deleteFile = async (Input) => {
  try {
    await unlink(Input);
    return Input + " is Deletd";
  } catch (error) {
    return "no file in " + Input;
  }
};
console.log(await deleteFile("text.txt"));

/*11. Write a function that creates a folder synchronously. (1 Grade)
• Output Example: “Success” */

let createDir = (Input) =>
  mkdirSync(Input, { recursive: true }) ? "success" : "fail";

console.log(createDir("./folder/as/asd/das"));

/*12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
• Output Example: Welcome event triggered! */

const immeter = new EventEmitter();
immeter.on("start", () => {
  console.log(" Welcome event triggered!");
});
immeter.emit("start");

/*13. Emit a custom "login" event with a username parameter. (0.5 Grade)
• Input Example:"Ahmed"
• Output Example: “User logged in: Ahmed” */

const loginEmitter = new EventEmitter();
immeter.on("login", (Input) => {
  console.log(" User logged in: " + Input);
});
immeter.emit("login", "ahmed");

/*14. Read a file synchronously and log its contents. (1 Grade)
• Input Example:"./notes.txt"
• Output Example: the file content => “This is a note.” */

let readFile = (Input) => Input + " content is " + readFileSync(Input, "utf8");

console.log(readFile("./txt.txt"));

/*15. Write asynchronously to a file. (1 Grade)
• Input: path:"./async.txt", content:"Async save" */

let writeInFile = (Input, content) => writeFileSync(Input, content, "utf-8");

writeInFile("./txt.txt", "Async savee");

// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true

let isExists = (Input) => existsSync(Input);
console.log(isExists("./txt.txt"));

/*17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
• Output Example: {Platform: “win32”, Arch: “x64”} */

let osData = () => {
  return {
    Platform: os.platform(),
    Arch: os.arch(),
  };
};
console.log(osData());
