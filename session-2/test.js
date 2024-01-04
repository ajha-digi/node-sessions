const path = require("node:path");

console.log(__dirname);
console.log(__filename);
console.log(path.parse(__filename));

console.log(path.join('folder1','folder2','index.html'));
console.log(path.join('/folder1','//folder2','index.html'));
console.log(path.join('/folder1','/folder2', '../..', 'index.html'));
folder1/folder2/indexedDB.html
console.log(path.join(__dirname, '../session-1' ,'index.html'));


console.log(path.resolve('folder1','folder2','index.html'));
console.log(path.resolve('/folder1','//folder2','index.html'));
console.log(path.resolve('/folder1','/folder2', '../..', 'index.html'));
console.log(path.resolve(__dirname, '../session-1' ,'index.html'));