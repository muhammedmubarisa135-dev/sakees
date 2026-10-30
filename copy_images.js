const fs = require('fs');
const path = require('path');

const srcBrain = 'C:/Users/Student/.gemini/antigravity/brain/58c73773-024d-475f-8a1e-f9267d60a7d8';
const destBase = path.resolve(__dirname);

const copies = [
  { src: path.join(srcBrain, 'hero_pickle_jar_1790916958271.jpg'), dest: path.join(destBase, 'assets/images/hero.jpg') },
  { src: path.join(srcBrain, 'beef_pickle_1790916995288.jpg'), dest: path.join(destBase, 'assets/products/beef.jpg') },
  { src: path.join(srcBrain, 'chicken_pickle_1790917026342.jpg'), dest: path.join(destBase, 'assets/products/chicken.jpg') },
  { src: path.join(srcBrain, 'prawns_pickle_1790917060005.jpg'), dest: path.join(destBase, 'assets/products/prawns.jpg') },
  { src: path.join(srcBrain, 'dates_pickle_1790917098796.jpg'), dest: path.join(destBase, 'assets/products/dates.jpg') },
  { src: path.join(srcBrain, 'lemon_pickle_1790917136250.jpg'), dest: path.join(destBase, 'assets/products/lemon.jpg') },
  { src: path.join(srcBrain, '.user_uploaded/media_1790916569438.jpg'), dest: path.join(destBase, 'assets/images/poster.jpg') }
];

copies.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.log(`Not found: ${src}`);
  }
});
