// Write your solution in this file!

 var customerName = "bob";
 const leastFavoriteCustomer = "const";
 
 function fixTheScop(){
     return customerName;
 }
 

  function upperCaseCustomerName(){
    customerName = "BOB";
    return customerName;
 } 
 
 function setBestCustomer(){
      bestCustomer = "not bob";
      return bestCustomer;
 }

 function overwriteBestCustomer() {
     bestCustomer = "maybe bob";
     return bestCustomer;
 }

 function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "it is a const";
    return leastFavoriteCustomer;
 }