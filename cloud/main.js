//Parse related keys
Parse.initialize("kPoCeBgdXvmx1NnjRjubhnDEpQQkQBWAwdDtcDRB", "4b4MdiH84VbGmPZOxz34LDzBBz9ILpm9z0jlnUZl");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
