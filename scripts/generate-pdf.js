const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', {waitUntil: 'networkidle2'});
  await page.emulateMediaType('screen');
  await page.pdf({path: 'build/Joris_De_Winne_Resume.pdf', 
                  scale: 0.95,
                  margin: {
                    top: '20px',
                    left: '20px',
                    right: '20px',
                    bottom: '20px'
                  },
                  format: 'Letter'});

  await browser.close();
})();