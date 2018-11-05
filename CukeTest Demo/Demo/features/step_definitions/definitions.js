
const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const { driver } = require('../support/get_driver');
const { $ } = require('webdriverio')



//// 你的步骤定义 /////

Given(/^点击左边栏按钮弹出侧边栏$/, async function () {

    // Xpath定位  appium桌面端自带定位元素工具可获取Xpath路径
    await driver.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.ImageButton')

    // 点击左边栏  className和index组合定位
    // await driver.click('android=new UiSelector().className("android.widget.ImageButton").index(0)')
    
    // 获取文本  className和index组合定位
    let selector = 'new UiSelector().index(2).className("android.widget.CheckedTextView")'
    let text = await driver.getText('android=' + selector)
    console.log("text===", text)
    return assert.equal(text, "全部")
});


When(/^点击精华板块应该展现内容为精华板块的内容$/, async function () {

    // 点击精华版块 className和index组合定位
    await driver.click('android=new UiSelector().className("android.widget.CheckedTextView").index(3)')

    // 获取一组元素 className和index和resourceId组合定位
    let eles = await driver.elements('android=new UiSelector().resourceId("org.cnodejs.android.md:id/btn_topic").className("android.widget.LinearLayout").index(0)')

    console.log(eles)
});