import fs from 'fs';

const PKG_FILE = 'package.json';

const read = () => {
  const contents = fs.readFileSync(PKG_FILE, 'utf-8');
  return JSON.parse(contents);
};

const write = (pkg) => {
  fs.writeFileSync(PKG_FILE, JSON.stringify(pkg, null, 2));
};

const mod = (fields) => {
  const pkg = read();

  fields.forEach((f) => {
    pkg[f.field] = f.value;
  });

  write(pkg);
};

export default { mod };
