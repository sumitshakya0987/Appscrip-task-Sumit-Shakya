import fs from 'fs';
import https from 'https';

const images = [
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlVG._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
];

const dir = './public/fallback';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

images.forEach((url, i) => {
  const file = fs.createWriteStream(`${dir}/${i + 1}.jpg`);
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${i + 1}.jpg`);
    });
  }).on('error', (err) => {
    fs.unlink(`${dir}/${i + 1}.jpg`, () => {});
    console.error(`Error downloading ${url}: ${err.message}`);
  });
});
