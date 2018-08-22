let puppeteer = require('puppeteer')

function parseFloorArea(floorAreaText) {}

async function scrapeDaft(request, reply) {
  let browser = await puppeteer.launch()
  let page = await browser.newPage()

  await page.setViewport({ width: 1920, height: 1080 })

  page.goto(request.body.url)

  let addressNode = page.$('#smi-map-link')
  let floorNodes = document.querySelectorAll('.description_block')

  floorNodes.forEach(block => {
    if (block.textContent.includes('Floor Area')) {
    }
  })

  browser.close()

  return {}
}

module.exports = scrapeDaft
