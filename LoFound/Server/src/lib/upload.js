const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');

exports.checkImage = (file) => {
  const fileRegular = /image\/*/;

  if (!fileRegular.test(file.type)) {
    return false;
  }

  return true;
};

exports.uploadSingle = async (file, name) => {
  try {
    console.log(file.path);
    const data = await fs.readFile(file.path);
    const fileName = name + path.extname(file.name);
    const filePath = path.join('public', file.type, fileName);

    await fs.ensureDir(path.dirname(filePath));
    await fs.outputFile(filePath, data);

    if (this.checkImage(file)) {
      const thumbFileName = `${name}_thumbnail${path.extname(file.name)}`;
      const thumbFilePath = path.join('public', file.type, thumbFileName);

      await fs.ensureDir(path.dirname(thumbFilePath));
      await sharp(data).resize(480, 480).toFile(thumbFilePath, (error) => {
        if (error) {
          console.log(error.message);
          throw error;
        }
      });
    }
  } catch (error) {
    console.log(error.message);

    throw error;
  }
};

exports.uploadArray = async (files, names) => {
  try {
    await Promise.all(files.map(async (file, index) => {
      await this.uploadSingle(file, names[index]);
    }));
  } catch (error) {
    console.log(error.message);

    throw error;
  }
};
