const puppeteer = require ("puppeteer");

async function run(){
    //Launnch a new browser instance
    const browser = await puppeteer.launch({headless:false});

    const page = await browser.newPage();

    await page.goto("https://google.com");

    const title = await page.title();
    console.log(title);

    const searchInputValue = await page.$eval('textarea[name="q"]', (element) => element.value);
    console.log("Search Input Value:", searchInputValue);

    await page.screenshot({path: 'index_13.png'});

    await page.pdf({path: 'index_13.pdf', format: 'A4'});

    await browser.close();
}

run()