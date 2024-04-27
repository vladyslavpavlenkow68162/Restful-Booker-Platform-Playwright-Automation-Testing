const { test, expect } = require('@playwright/test');

let name, email, phone, subject, message, submit, username, password, login, roomName, roomPrice, wifiCheckbox, tvCheckbox, createRoom, type, accessible, deleteRoom;
const validName = "Anna Kowalska";
const invalidName = "A"; 
const validEmail = "akowalska@gmai.com";
const invalidEmail = "akowalskagmail.com";
const validPhone = "+48999999999";
const invalidPhone = "+48999";
const validSubject = "A problem with booking";
const shortSubject = "B";
const longSubjectOrMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta eros nunc, vel gravida ex venenatis vel. Vestibulum vitae pretium lorem. Vestibulum nunc dui, accumsan eget risus nec, viverra tincidunt metus. Phasellus sollicitudin placerat tincidunt. Sed in eleifend dui. Mauris nec leo nec quam elementum scelerisque. Mauris molestie lacus massa, et sodales turpis pretium nec. Integer ultricies eget sapien in mattis. Donec ut mattis neque. Sed iaculis at neque vel gravida. Donec quis cursus leo, at sodales dui. Duis facilisis nulla posuere odio tincidunt, et aliquet enim ultrices. Curabitur et rutrum lectus, ornare maximus felis. Duis mauris felis, mattis quis neque ut, ultrices scelerisque magna. Vestibulum at enim sit amet lacus varius finibus in non odio. Sed vitae libero ultricies, luctus tortor eget, ullamcorper tortor. Pellentesque pharetra vulputate felis et venenatis. In vel arcu suscipit, dignissim lacus in, auctor elit. Aliquam sollicitudin interdum vestibulum. Phasellus dolor odio, sagittis vitae metus sed, tincidunt maximus lectus. In non dolor erat. Vivamus lobortis arcu sed diam ornare rhoncus. Vestibulum nec magna semper leo ornare mollis ut ut ex. Etiam imperdiet nisl eu ullamcorper iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eu orci dignissim, posuere tortor a, semper metus. Morbi cursus ante quis erat pellentesque, sit amet tempor odio rutrum. Sed vestibulum sem id arcu accumsan, vel volutpat magna posuere. Donec dolor ipsum, commodo eget posuere ut, pretium at turpis. Aliquam blandit dolor et velit interdum, id imperdiet arcu placerat. Proin sit amet mollis orci. Nunc condimentum dictum diam, et egestas dui efficitur vel. Nunc a finibus eros, vel pellentesque tellus. Nam vitae ante at velit feugiat dictum. Praesent eget arcu eu leo ultrices dictum eu tincidunt lacus. Nulla accumsan eros sit amet justo feugiat sagittis. Duis eu sagittis leo, vitae varius magna. Mauris consequat arcu ligula, sit amet suscipit augue feugiat vel. Nunc fermentum maximus odio quis tempus. Nunc suscipit mattis sagittis. Aenean et interdum magna."
const validMessage = "Hello. I have a problem with booking a room. Please, contact me";
const validUsername = "admin";
const invalidUsername = "addmin";
const validPassword = "password";
const invalidPassword = "pasword";
const validRoomNumber = "2";
const validRoomPrice = "500";
const tooHighNumber = "10000000000000000";
const tooLowNumber = "-1";
const validType = "Double";
const accessibleTrue = "true";

test.describe("Send a message", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://automationintesting.online/");
        name = page.locator("#name");
        email = page.locator("#email");
        phone = page.locator("#phone");
        subject = page.locator("#subject");
        message = page.locator("#description");
        submit = page.locator("#submitContact");
    });

    test("Send a message using valid customer credentials", async ({ page }) => {
        await name.fill(validName);
        await email.fill(validEmail);
        await phone.fill(validPhone);
        await subject.fill(validSubject);
        await message.fill(validMessage);
        await submit.click();
        await page.pause();
    });

    test("Send a message using invalid name", async ({ page }) => {
        await name.fill(invalidName);
        await email.fill(validEmail);
        await phone.fill(validPhone);
        await subject.fill(validSubject);
        await message.fill(validMessage);
        await submit.click();
        await page.pause();
    });

    test("Send a message using invalid email", async ({ page }) => {
        await name.fill(validName);
        await email.fill(invalidEmail);
        await phone.fill(validPhone);
        await subject.fill(validSubject);
        await message.fill(validMessage);
        await submit.click();
        await page.pause();
    });

    test("Send a message using invalid phone number", async ({ page }) => {
        await name.fill(validName);
        await email.fill(validEmail);
        await phone.fill(invalidPhone);
        await subject.fill(validSubject);
        await message.fill(validMessage);
        await submit.click();
        await page.pause();
    });
    
    test("Send a message using too short subject", async ({ page }) => {
        await name.fill(validName);
        await email.fill(validEmail);
        await phone.fill(validPhone);
        await subject.fill(shortSubject);
        await message.fill(validMessage);
        await submit.click();
        await page.pause();
    });
     
    test("Send a message using too long subject", async ({ page }) => {
        await name.fill(validName);
        await email.fill(validEmail);
        await phone.fill(validPhone);
        await subject.fill(longSubjectOrMessage);
        await message.fill(validMessage);
        await submit.click();
        await page.pause();
    });
    
    test("Send a message using too long message", async ({ page }) => {
        await name.fill(validName);
        await email.fill(validEmail);
        await phone.fill(validPhone);
        await subject.fill(validSubject);
        await message.fill(longSubjectOrMessage);
        await submit.click();
        await page.pause();
    });

    test("Send a message leaving all fields empty", async ({ page }) => {
        await submit.click();
        await page.pause();
    });

});

test.describe("Send a message", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://automationintesting.online/#/admin");
        username = page.locator("#username");
        password = page.locator("#password");
        login = page.locator("#doLogin");
    });

    test("Log in using valid user credentials", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await page.pause();
    });

    test("Log in using invalid user credentials", async ({ page }) => {
        await username.fill(invalidUsername);
        await password.fill(validPassword);
        await login.click();
        await page.pause();
    });

    test("Log in using invalid password", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(invalidPassword);
        await login.click();
        await page.pause();
    });

    test("Log in leaving all fields empty", async ({ page }) => {
        await login.click();
        await page.pause();
    });

});

test.describe("Creating a room as an admin", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://automationintesting.online/#/admin");
        username = page.locator("#username");
        password = page.locator("#password");
        login = page.locator("#doLogin");
        roomName = page.locator("#roomName");
        roomPrice = page.locator("#roomPrice");
        wifiCheckbox = page.locator("#wifiCheckbox");
        tvCheckbox = page.locator("#tvCheckbox");
        createRoom = page.locator("#createRoom");
        type = page.locator("#type");
        accessible = page.locator("#accessible");
        deleteRoom = page.locator("//span[@id='1']");
    });

    test("Create a room with valid information", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await roomName.fill(validRoomNumber);
        await type.selectOption(validType);
        await accessible.selectOption(accessibleTrue);
        await roomPrice.fill(validRoomPrice);
        await wifiCheckbox.check();
        await tvCheckbox.check();
        await createRoom.click();
        await page.pause();
    });

    test("Create a room without entering a number", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await type.selectOption(validType);
        await accessible.selectOption(accessibleTrue);
        await roomPrice.fill(validRoomPrice);
        await wifiCheckbox.check();
        await tvCheckbox.check();
        await createRoom.click();
        await page.pause();
    });

    test("Create a room without entering a price", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await roomName.fill(validRoomNumber);
        await type.selectOption(validType);
        await accessible.selectOption(accessibleTrue);
        await wifiCheckbox.check();
        await tvCheckbox.check();
        await createRoom.click();
        await page.pause();
    });

    test("Create a room entering too high price", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await roomName.fill(validRoomNumber);
        await type.selectOption(validType);
        await accessible.selectOption(accessibleTrue);
        await roomPrice.fill(tooHighNumber);
        await wifiCheckbox.check();
        await tvCheckbox.check();
        await createRoom.click();
        await page.pause();
    });

    test("Create a room entering too low price", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await roomName.fill(validRoomNumber);
        await type.selectOption(validType);
        await accessible.selectOption(accessibleTrue);
        await roomPrice.fill(tooLowNumber);
        await wifiCheckbox.check();
        await tvCheckbox.check();
        await createRoom.click();
        await page.pause();
    });

    test("Create a room entering too high room number", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await roomName.fill(tooHighNumber);
        await type.selectOption(validType);
        await accessible.selectOption(accessibleTrue);
        await roomPrice.fill(validRoomPrice);
        await wifiCheckbox.check();
        await tvCheckbox.check();
        await createRoom.click();
        await page.pause();
    });

    test("Create a room entering too low room number", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await roomName.fill(tooLowNumber);
        await type.selectOption(validType);
        await accessible.selectOption(accessibleTrue);
        await roomPrice.fill(validRoomPrice);
        await wifiCheckbox.check();
        await tvCheckbox.check();
        await createRoom.click();
        await page.pause();
    });

    test("Create a room without choosing any room details", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await roomName.fill(validRoomNumber);
        await type.selectOption(validType);
        await accessible.selectOption(accessibleTrue);
        await roomPrice.fill(validRoomPrice);
        await createRoom.click();
        await page.pause();
    });

    test("Deleting a room ", async ({ page }) => {
        await username.fill(validUsername);
        await password.fill(validPassword);
        await login.click();
        await deleteRoom.click();
        await page.pause();
    });

});