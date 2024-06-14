const fs = require('fs-extra');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const htmlFilePath = path.join(distPath, 'index.html');
const jsFilePath = fs.readdirSync(distPath).find(file => file.endsWith('.js'));

if (jsFilePath) {
    const jsContent = fs.readFileSync(path.join(distPath, jsFilePath), 'utf-8');
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

    htmlContent = htmlContent.replace(
        `<script src="${jsFilePath}"></script>`,
        `<script>${jsContent}</script>`
    );

    fs.writeFileSync(htmlFilePath, htmlContent);
} else {
    console.error('JavaScript file not found in dist directory.');
}
