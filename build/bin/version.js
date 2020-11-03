let fs = require('fs');
let path = require('path');
let version = process.env.VERSION || require('../../package.json').version;
let content = { '1.0.0': '1.0'};
if (!content[version]) content[version] = '1.0';
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
