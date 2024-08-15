const accountId = 1234;
let accountEmail = "hamid@gmail.com";
var accountPassword = "12345";
accountCity = "Noida";

let accountState;


// accountId = 2  // this is not permitted wi the const variable;

accountEmail = "hamid200@gmail.com";
accountPassword = "123890"

/*
 the variable keyword 'var' not prefere to use due to 
 block and functional scope issues ;
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
