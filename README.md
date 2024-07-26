pretty-log-zy
==========================
Personalized console output.

## Install
```sh
  npm install pretty-log-zy
```

## Usage
`pretty-log-zy` provides the logs: `info`, `error`, `warning`, `success`, `picture` and `table`
```javascript
// 引入方式
// 方式一：
import log from 'pretty-log-zy';
// 方式二：
// const log = require('pretty-log-zy');

// 使用
// 不带标题
  log.info('这是基础信息!');
  //带标题
  log.info('注意看', '这是个男人叫小帅!');
  log.error('前方的路看似很危险,实际一点也不安全。');
  log.error('奥德彪', '出来的时候穷 生活总是让我穷 所以现在还是穷。');
  log.warning('奥德彪', '我并非无路可走 我还有死路一条!');
  log.success('奥德彪', '钱没了可以再赚，良心没了便可以赚的更多。');
  log.picture('图片url地址', '缩放比例'); // 缩放比例默认1
  log.table([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ])
```
## Output
![output](https://zylucky.github.io/picx-images-hosting/npm-pic/output.92q1886606.png)

## License
ISC license