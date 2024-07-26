// 美化打印实现方法
const prettyLog = () => {
  const isEmpty = (value) => {
    return value == null || value === undefined || value === '';
  };
  const prettyPrint = (title, text, color) => {
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
      'background:transparent'
    );
  };
  // 基础信息打印
  const info = (textOrTitle, content = '') => {
    const title = isEmpty(content) ? 'Info' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, '#909399');
  };
  // 错误信息打印
  const error = (textOrTitle, content = '') => {
    const title = isEmpty(content) ? 'Error' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, '#F56C6C');
  };
  // 警告信息打印
  const warning = (textOrTitle, content = '') => {
    const title = isEmpty(content) ? 'Warning' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, '#E6A23C');
  };
  // 成功信息打印
  const success = (textOrTitle, content = '') => {
      const title = isEmpty(content) ? 'Success ' : textOrTitle;
      const text = isEmpty(content) ? textOrTitle : content;
      prettyPrint(title, text, '#67C23A');
  };
  // 图片信息打印
  const picture = (url, scale = 1) => {
    if (isEmpty(url)) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        if (ctx) {
            c.width = img.width;
            c.height = img.height;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.drawImage(img, 0, 0);
            const dataUri = c.toDataURL('image/png');

            console.log(
                `%c sup?`,
                `font-size: 1px;
                padding: ${Math.floor((img.height * scale) / 2)}px ${Math.floor((img.width * scale) / 2)}px;
                background-image: url(${dataUri});
                background-repeat: no-repeat;
                background-size: ${img.width * scale}px ${img.height * scale}px;
                color: transparent;
                `
            );
        }
    };
    img.src = url;
  }
  // 表格信息打印
  const table = (data) => {
    if (data && Array.isArray(data) && data[0]) {
      const tableKey = Object.keys(data[0]);
      const tableHeader = tableKey.join('    ').replace(/_/g, '');
      console.log(
          `%c ${tableHeader}`,
          'color: white; background-color: black; padding: 2px 10px;'
      );
      data.forEach((row) => {
        let tableCon = '';
        tableKey.forEach((key) => {
          tableCon += row[key] + '    ';
        });
        console.log(
            `%c ${tableCon} `,
            'color: black; background-color: lightgray; padding: 2px 10px;'
        );
      });
    }
  };

  return {
      info,
      error,
      warning,
      success,
      picture,
      table,
  };
};

module.exports = prettyLog();