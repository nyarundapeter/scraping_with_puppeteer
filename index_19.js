const puppeteer = require("puppeteer");

async function captureAndGeneratePDF(url, outputPath){

    try {

        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();

        await page.goto(url);

        await page.screenshot({path: 'screenshot-19.png'});

        await page.pdf({path: outputPath, format:'A4'});

        await browser.close();
        console.log("Successfully captured a screenshot and PDF")

    } catch(err) {
        console.log("Unable to genteate Screenshot and PDF");
    }
}

const url = "http://google.com";
const outputPath = "part-19.pfg";

captureAndGeneratePDF(url, outputPath);