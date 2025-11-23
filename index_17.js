const puppeteer = require("puppeteer");

async function generatePDF(url, outputfile){

    try{
        // Launch the browser
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();

        await page.goto(url);

        // Generate a PDF
        await page.pdf({path: outputfile, format:'A4'});

        // CLose the browser
        await browser.close();

    } catch(err){
        console.log(err);
    }

}

const url = "http://google.com";
const outputfile = "output.pdf";

generatePDF(url, outputfile);