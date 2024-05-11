const Axios = require('axios');
const fs = require('fs/promises');

// //using promises
// fs.readFile(`${__dirname}/dog.txt`, 'utf-8')
//   .then((data) => {
//     console.log(data);
//     return Axios.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((breedData) => {
//     console.log(`Breed Data: ${breedData.data.message}`);
//     return fs.writeFile(`${__dirname}/dog-image.txt`, breedData.data.message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Crearting readfile and writefile functions

const readFilePro = (file) => {
  console.log(file);
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/dog.txt`, 'utf-8')
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject('Error reading file');
      });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data)
      .then((data) => {
        resolve('Breed data saved successfully!!');
      })
      .catch((err) => reject('Error writing file'));
  });
};
//using async await
const getBreedData = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(data);
    const breedData = await Axios.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(`Breed Data: ${breedData.data.message}`);
    const wirteRes = await writeFilePro(
      `${__dirname}/dog-image.txt`,
      breedData.data.message
    );
    console.log(wirteRes);
  } catch (error) {
    console.log(error);
    throw 'Error in fetching breed data!!';
  }
  return 'Breed Data fetched and saved successfully!!';
};
/*
//Handling with promises
console.log('Getting Breed Data');
const bd = getBreedData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.log(bd);
console.log('End of receiving Breed Data ');
*/
//Hadnling with async await
// (async () => {
//   try {
//     console.log('Getting Breed Data');
//     const bd = await getBreedData();
//     console.log(bd);
//   } catch (error) {
//     console.log('Failed to fetch the Breed Data!!');
//   }
// })();

//Promise.all
const getBreedsData = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(data);
    const breedData1 = Axios.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const breedData2 = Axios.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const breedData3 = Axios.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([breedData1, breedData2, breedData3]);
    const imgs = all.map((ele) => ele.data.message);
    console.log(`Promise. all response: ${imgs}`);

    const writeRes = await writeFilePro(
      `${__dirname}/dog-image.txt`,
      imgs.join('\n')
    );
    console.log(writeRes);
  } catch (error) {
    console.log(error);
    throw 'Error in fetching breed data!!';
  }
  return 'Breeds Data fetched successfully!!';
};

(async () => {
  try {
    console.log('Getting Breed Data');
    const bd = await getBreedsData();
    console.log(bd);
  } catch (error) {
    console.log('Failed to fetch the Breed Data!!');
  }
})();
