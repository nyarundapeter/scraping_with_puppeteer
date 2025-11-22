const puppeteer = require("puppeteer");

async function generateScreenshot(url, outputPath){

    try{

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        await page.goto(url);

        await page.screenshot({path: outputPath});

        await browser.close();
        console.log("screenshot generate successfully");
    } catch(err){
        console.log("Unable ot generate screenshot.");
    }
}

const url = "http://google.com";
const outputPath = "google-screenshot.png";

generateScreenshot(url, outputPath);