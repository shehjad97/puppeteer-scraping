const puppeteer = require("puppeteer")
const fs = require("fs/promises")

async function fromAmazon() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await  page.goto("https://www.amazon.com/EVGA-Z12-Programmable-Dedicated-834-W0-12US-KR/dp/B09C2DLCPG/ref=sr_1_3?keywords=gaming+keyboard&pd_rd_r=8d5ebc92-1dd3-4f62-a0e4-aef7de180094&pd_rd_w=O679I&pd_rd_wg=QYAeD&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=JZCW6Z2TJEMEKHXTKG4S&qid=1658634898&sr=8-3")

    // const title = await page.$eval("#productTitle", x => x.textContent)
    // console.log("Title:", title.trim())
    // await fs.writeFile("extracted/title.txt", title.trim())

    // const description = await page.$eval("#feature-bullets", x => x.textContent)
    // await fs.writeFile("extracted/description.txt", description)
    
    const photo = await page.$eval("#landingImage", x => x.src)
    const title = await page.$eval("#landingImage", x => x.alt)
    console.log("title", title)
    console.log("photo", photo)
    // const imagepage = await page.goto(photo)
    // await fs.writeFile(`extracted/images/${photo.split("/").pop()}`, await imagepage.buffer())

    await browser.close()
}

async function fromEbay() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await  page.goto("https://www.ebay.com/itm/265813478547?hash=item3de3b7cc93%3Ag%3A%7EqIAAOSwoQZi6%7Es-&amdata=enc%3AAQAHAAAA4EOdFa%2BUTN%2BvVYeun1eV2M2BgKNImfUs8c7J16DFMq7vJkDvkNUH3tBk69B3%2BpHkgXvXDK8gKat%2FFDJA9xrRz0HqipU9Bmc6zp2h6zmwZAwhr9gEswJuYlfNvx%2FXPyfxvWQH8PVsdsngSzwfIBnZgpyeseAW8MHnCzJpg%2BkoyEAACKyGXEzN%2BsvELx1piMyO0hW4hsHun827ypOtsCpvFTXI1MY5GXzUY44%2B6H2YdBhCCR0VNcc%2BHvob%2FiSKHI0tjsCjRtuPy4vCKfNkVTzUfEnccocu6dzSg0idWT6q29qs%7Ctkp%3ABFBM8vjapN5g&LH_BIN=1&LH_ItemCondition=1000")

    // const title = await page.$eval("#productTitle", x => x.textContent)
    // console.log("Title:", title.trim())
    // await fs.writeFile("extracted/title.txt", title.trim())

    // const description = await page.$eval("#feature-bullets", x => x.textContent)
    // await fs.writeFile("extracted/description.txt", description)
    
    const photo = await page.$eval('meta[Property*="og:image"]', x => x.content)
    const title = await page.$eval('meta[Property*="og:title"]', x => x.content)
    // const title = await page.$eval("#landingImage", x => x.alt)
    console.log("title", title)
    console.log("photo", photo)
    // const imagepage = await page.goto(photo)
    // await fs.writeFile(`extracted/images/${photo.split("/").pop()}`, await imagepage.buffer())

    await browser.close()
}

// async function fromAlibaba() {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await  page.goto("https://www.alibaba.com/product-detail/Customized-Cotton-5-Panel-A-Frame_1600449570787.html?spm=a27aq.21715655.7415468330.13.62b154d7YRuO5n")

//     // const title = await page.$eval("#productTitle", x => x.textContent)
//     // console.log("Title:", title.trim())
//     // await fs.writeFile("extracted/title.txt", title.trim())

//     // const description = await page.$eval("#feature-bullets", x => x.textContent)
//     // await fs.writeFile("extracted/description.txt", description)
    
//     const photo = await page.$eval('head>link:nth-child(47)', x => x.href)
//     // const title = await page.$eval('meta[Property*="og:title"]', x => x.content)
//     // const title = await page.$eval("#landingImage", x => x.alt)
//     // console.log("title", title)
//     console.log("photo", photo)
//     // const imagepage = await page.goto(photo)
//     // await fs.writeFile(`extracted/images/${photo.split("/").pop()}`, await imagepage.buffer())

//     await browser.close()
// }

fromAmazon()