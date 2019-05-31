const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');
const { key } = require('selenium-webdriver')

Given(/^浏览到搜索网站 "([^"]*)"$/, async function (url) {
    await driver.get(url);
});
When(/^拖拽验证码块至最右边$/, async function () {
    await driver.sleep(2000);
    await driver.switchTo().frame("alibaba-register-box");
    let div = await driver.findElement({ id: "nc_1_n1z" })
    console.log("div", await div.getLocation())
    let div_location = await div.getLocation();
    offset_y = div_location.y + 80
    await driver.actions().dragAndDrop(div, { x: div_location.x, y: offset_y }).perform();
});


When(/^点击按钮弹出alert窗口$/, async function () {
    await driver.findElement({ tagName: 'button' }).click();
    let text = await driver.switchTo().alert().getText()
    console.log('text is', text);
});
Then(/^点击确定按钮$/, async function () {
    await driver.switchTo().alert().accept();
});



When(/^点击baidu$/, async function () {
    await driver.findElement({ tagName: 'a' }).click()
});
Then(/^打开新窗口,切换窗口$/, async function () {
    let allwindows = await driver.getAllWindowHandles()
    console.log(allwindows.length)
    await driver.switchTo().window(allwindows[1])
});
Then(/^输入"([^"]*)"点击搜索$/, async function (arg1) {
    await driver.findElement({ id: 'kw' }).sendKeys(arg1)
    await driver.findElement({ id: 'su' }).click()
});



Given(/^用户登录到系统$/, async function () {
    await driver.get("https://boss.pashanhoo.com/owl")
    await driver.findElement({ xpath: "/html/body/div[2]/div[2]/div[2]/div[3]/div[2]/div[2]" }).click()
    await driver.findElement({ id: "username" }).clear
    await driver.findElement({ id: "username" }).sendKeys("NJ160")
    await driver.findElement({ id: "password" }).clear
    await driver.findElement({ id: "password" }).sendKeys('qwertyuio')
    await driver.findElement({ xpath: '//*[@id="loginForm"]/div[2]/a/input' }).click()
});
When(/^在日报填报页面$/, async function () {
    await driver.sleep(4000);
    await driver.findElement({ xpath: '//*[@id="menu_index"]/div/ul/li[4]/a/span[4]' }).click()
    await driver.findElement({ xpath: '//*[@id="menu_index"]/div/ul/li[4]/ul/li[1]/a' }).click()
    await driver.sleep(4000);
    await driver.findElement({ xpath: '//*[@id="xzrm"]/div/input' }).click()
    await driver.sleep(2000);
    await driver.findElement({ xpath: '//*[@id="xzrm"]/div/ul/li[1]' }).click()
    await driver.sleep(2000);
    //await driver.findElement({ xpath: '//*[@id="rbtb-form"]/div/div[1]/div[2]/div/span[2]/span' }).click()
    //await driver.sleep(2000);
    //await driver.findElement({ xpath: '/html/body/div[3]/div[3]/table/tbody/tr[4]/td[6]' }).click()
    await driver.executeScript(function () {
        document.querySelector('#rbtb-rbrq').value = "2019-05-30"
    })
    await driver.sleep(2000);
    await driver.findElement({ xpath: '//*[@id="rbtb-drgs"]' }).sendKeys(1)
    await driver.sleep(2000);
    await driver.findElement({ xpath: '//*[@id="rbtb-rbnr"]' }).sendKeys("你好，日报")
});
















