const sharp = require('sharp');
const fs = require('fs');
const src_dir = './src';
const target_dir = './dest';

fs.readdirSync(src_dir).forEach(file => {
    sharp(`${src_dir}/${file}`)
        .resize({
            width: 2000,
            height: 2000,
            fit: sharp.fit.inside,
            withoutEnlargement: true
          })
        .jpeg({ quality: 60 })
        .toFile(`${target_dir}/${file.split(".",1)}.jpg`);
});