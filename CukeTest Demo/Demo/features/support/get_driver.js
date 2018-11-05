const webdriverio = require('webdriverio');

//设置被测应用参数
let options = {
    desiredCapabilities: {
        platformName: "Android",
        deviceName: "621QECPP29DSN", //设备序列串号 
        platformVersion: "7.0", //系统平台版本
        appPackage: "org.cnodejs.android.md", //package 名字
        appActivity: ".ui.activity.LaunchActivity", //启动activity 名字
        resetKeyboard: true,  
        noReset: true,
        unicodeKeyboard: true
    },
    host: "127.0.0.1",
    port: 4723
}

//根据参数配置创建WebDriverIO实例;
function createDriver() {
    const client = webdriverio.remote(options);
    return client;
}

exports.driver = createDriver();