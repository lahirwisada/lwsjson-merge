# @lahirwisada/lwsjson-merge

Modul ini adalah solusi sederhana untuk menggabungkan beberapa objek JSON. Tujuan dari modul ini adalah untuk menghindari kompleksitas dan kontra dari penggunaan pustaka seperti Lodash ketika yang dibutuhkan hanya fungsi untuk menggabungkan JSON.

## Instalasi

Anda dapat menginstal modul ini dengan perintah berikut:

```sh
npm install git+https://github.com/lahirwisada/lwsjson-merge.git
```

## Usage

using require
```
const mergeJSON = require('@lahirwisada/lwsjson-merge');

const json1 = { a: 1, b: 2 };
const json2 = { b: 3, c: 4 };

const merged = mergeJSON(json1, json2);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
```

using import
```
import mergeJSON from '@lahirwisada/lwsjson-merge';

const json1 = { a: 1, b: 2 };
const json2 = { b: 3, c: 4 };

const merged = mergeJSON(json1, json2);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
```

## License

Modul ini dilisensikan di bawah MIT License.
