const puppeteer = require("puppeteer")
const fs = require("fs/promises")

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await  page.goto("https://www.amazon.com/EVGA-Z12-Programmable-Dedicated-834-W0-12US-KR/dp/B09C2DLCPG/ref=sr_1_3?keywords=gaming+keyboard&pd_rd_r=8d5ebc92-1dd3-4f62-a0e4-aef7de180094&pd_rd_w=O679I&pd_rd_wg=QYAeD&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=JZCW6Z2TJEMEKHXTKG4S&qid=1658634898&sr=8-3")

    const title = await page.$eval("#productTitle", x => x.textContent)
    console.log("Title:", title.trim())
    await fs.writeFile("extracted/title.txt", title.trim())

    const description = await page.$eval("#feature-bullets", x => x.textContent)
    await fs.writeFile("extracted/description.txt", description)
    
    const photo = await page.$eval("#landingImage", x => x.src)
    const imagepage = await page.goto(photo)
    await fs.writeFile(`extracted/images/${photo.split("/").pop()}`, await imagepage.buffer())

    await browser.close()
}

start()