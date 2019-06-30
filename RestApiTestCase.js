pm.test("Party Details Status code  shoudl return  200", function () {
    pm.response.to.have.status(200);
});

console.log("Key",pm.environment.get("base_url"));

pm.environment.get("Content-Type");pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("Party Details Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});
pm.test("Party Details Response Body matches string", function () {
    pm.expect(pm.response.text()).to.include("12345");
});
pm.test("Party Details Response Body matches string", function () {
    pm.expect(pm.response.text()).to.include("partyId");
});

var jsonData = pm.response.json();
 
 var getPartyId= pm.variables.get(jsonData.response[0].partyId);
 console.log('getPartyId',getPartyId);
 
pm.test("Testing PartyId Exists in PartDetails Service      "  +jsonData.response[0].partyId, function () {
    var jsonData = pm.response.json();
    console.log(jsonData.response[0].partyId);
     pm.expect(jsonData.response[0].partyId).to.eql("12345f");
});


var schema = {
    /* paste your  response here */
   
}




pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(jsonData, schema)).to.be.true;
  
});


pm.test("Testing Repsone is  same      "  , function () {
    var jsonData = pm.response.json();
   // console.log(jsonData.response[0].partyId);
     pm.expect(jsonData.response).to.eql(schema.response);
});



