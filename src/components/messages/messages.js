
const chatkit = new Chatkit.default({
  instanceLocator: "YOUR INSTANCE LOCATOR",
  key: "YOUR SECRET KEY"
})

chatkit.createUser({
  id: "bookercodes",
  name: "Alex Booker"
})
