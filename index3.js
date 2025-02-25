const { Builder, By, Key, until } = require("selenium-webdriver");

(async function IRXAutomation() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
    
        await driver.get("https://iremitx.com/");
        await driver.sleep(3000);

        let dropdown = await driver.findElement(By.id("select-web"));
        await dropdown.click();
     
        let option = await driver.findElement(By.xpath("//option[@value='SIN']"));
        await option.click();
        await dropdown.click();

        let button = await driver.findElement(By.id("btn-send-web"));
        await button.click();

        let Email = await driver.findElement(By.id("txtEmail"));
        await Email.clear(); 
        await Email.sendKeys("tamielsg@gmail.com");
        await driver.sleep(2000);

        let Password = await driver.findElement(By.id("txtPassword"));
        await Password.clear(); 
        await Password.sendKeys("testing123");
        await driver.sleep(2000);

        let Login = await driver.findElement(By.id("btnLogin"));
        await Login.click();
        await driver.sleep(3000);

        let Advisory1 = await driver.findElement(By.id("btn-no"));
        await Advisory1.click();
        await driver.sleep(5000);

        let Advisory2 = await driver.findElement(By.id("btn-no"));
        await Advisory2.click();

        let Servicemode = await driver.findElement(By.id("ContentPlaceHolder1_servicemode"));
        await Servicemode.click();
     
        let Servicemodevalues = await driver.findElement(By.xpath("//option[@value='NTP-5.00-NTP-NTP']"));
        await Servicemodevalues.click();
        await Servicemode .click();

        let Paymentmode = await driver.findElement(By.id("ContentPlaceHolder1_paymentgateway"));
        await Paymentmode.click();
     
        let Paymentmodevalues = await driver.findElement(By.xpath("//option[@value='Online']"));
        await Paymentmodevalues.click();
        await Paymentmode.click();

        let SendAmount = await driver.findElement(By.id("ContentPlaceHolder1_sendamount"));
        await SendAmount.clear(); 
        await SendAmount.sendKeys("10");

        let Sourceoffund = await driver.findElement(By.name("sourceofremittance"));
        await Sourceoffund.click();
     
        let Sourceoffundvalues = await driver.findElement(By.xpath("//option[@value='ALLOWANCE']"));
        await Sourceoffundvalues.click();
        await Sourceoffund .click();

        let Step1Next = await driver.findElement(By.id("btnNext1"));
        await Step1Next.click();

    } catch (error) {
        console.error("❌ Error:", error);
    } 
    
})();