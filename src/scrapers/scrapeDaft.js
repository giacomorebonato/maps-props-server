let puppeteer = require('puppeteer')

async function scrapeDaft(request, reply) {
  let browser = await puppeteer.launch()
  let page = await browser.newPage()

  page.goto(request.body.url)

  return {}
}

module.exports = scrapeDaft
