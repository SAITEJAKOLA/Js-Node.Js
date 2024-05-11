// const fs = require("fs");
const { read } = require("fs");
const fs = require("fs/promises");

const content =
  "The morning sun cast long shadows across the deserted street as Sarah made her way to the quaint cafe at the corner. The aroma of freshly brewed coffee mingled with the crisp air, awakening her senses. With each step, memories of her childhood flooded back, intertwining with the anticipation of what the day might bring. As she pushed open the door to the cafe, a wave of warmth welcomed her, both from the cozy atmosphere and the friendly smiles of familiar faces. Today felt like a blank canvas waiting to be painted with new adventures and possibilities.";
//callback way of using fs
// function createFile() {
//   fs.writeFile("Test1.txt", "Hello World!!", (err) => {
//     if (err) {
//       console.error(err);
//     }
//   });
// }

//Creating a file using promise  async way - fs/promise
// function createFile() {
//   fs.writeFile("text2.txt", "Hello world from ST")
//     .then(() => {
//       return `New file has been created.`;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//creating file using async wait
// async function createFile() {
//   try {
//     await fs.writeFile("text3.txt", content);
//     console.log(`The file has been created successfully!!`);
//   } catch (error) {
//     console.error(error);
//   }
// }

//creating a file using synchronus way - uses just fs
// function createFile() {
//   try {
//     fs.writeFileSync("Text.txt", content);
//   } catch (err) {
//     console.error(err);
//   }
// }
// createFile();

//reading a file using promises
// async function readfile() {
//   try {
//     const result = await fs.readFile("Text.txt", "utf-8");
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

//read file in sync
// function readfile() {
//   try {
//     const result = fs.readFile("Text.txt", "utf-8");
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// readfile();
// readfile();

async function makeDirectory() {
  try {
    await fs.mkdir("Helloworld");
  } catch (error) {
    console.error(error);
  }
}
makeDirectory();

async function removeDirectory() {
  try {
    await fs.rmdir("Helloworld");
  } catch (error) {
    console.error(error);
  }
}

removeDirectory();
// createFile();

async function renameFile() {
  try {
    await fs.rename("Text.txt", "Text1.txt");
  } catch (error) {
    console.error(error);
  }
}
renameFile();

async function copyFile() {
  try {
    await fs.copyFile("Text1.txt", "Text1.txt");
  } catch (error) {
    console.error(error);
  }
}
copyFile();
