// 1) validate the account Number
// 2) method to authenticate the account
// 3) balance enquiry
// 4) fund transfer from one account to another


class Bank{
    accountDetails={
        1000:{accno:1000,username:'userone',password:'userone',balance:50000},
        1001:{accno:1001,username:'usertwo',password:'usertwo',balance:10000},
        1002:{accno:1002,username:'userthree',password:'userthree',balance:25000},
        1003:{accno:1003,username:'userfour',password:'userfour',balance:60000},
        1004:{accno:1004,username:'userfive',password:'userfive',balance:35000},
    }
    //validate account no
    validateAccount(accno)
    {
        return accno in this.accountDetails ? true: false

    }
    //authenticate Account
    authenticateAccount(accno,username,password)
    {
        if(this.validateAccount(accno))
        {
            if((this.accountDetails[accno].username===username) && (this.accountDetails[accno].password===password))
            {
                console.log("Authentication successfull");
                
            }else{
                console.log("Invalid username or password");
                
            }

        }else{
            console.log("Invalid Account Number");
            
        }

    }

    //balance Enquiry
    getBalance(accno,username,password){
        if(this.validateAccount(accno))
        {
            if((this.accountDetails[accno].username===username) && (this.accountDetails[accno].password===password))
            {
                console.log("Bank Balance: ",this.accountDetails[accno].balance);
                

            }else{
                console.log("Invalid creditionals");
                
            }

        }else{
            console.log("Invalid Account Number");
            
        }

    }
    //balance enquiry without passing username and password
    //by only passing accno
    balanceEnquiryByAccountNumber(accno)
    {
        if(this.validateAccount(accno))
        {
            console.log("Blance enquiry: ",this.accountDetails[accno].balance);
            

        }else{
            console.log("Account Number not available");
            
        }
    }
    //fund transfer
    fundTransfer(fromAccountNo,toAccountNo,amount)
    {
        if((this.validateAccount(fromAccountNo)) && (this.validateAccount(toAccountNo)))
        {
            if(this.accountDetails[fromAccountNo].balance>=amount)
            {
                this.accountDetails[fromAccountNo].balance -= amount;
                this.accountDetails[toAccountNo].balance += amount;

                console.log(`Final balance of from Account is ${this.accountDetails[fromAccountNo].balance}`);
                console.log(`Final balance of To Account is ${this.accountDetails[toAccountNo].balance}`);
                
                

            }else{
                console.log("insuffient balance");
                
            }

        }else{
            console.log("Invalid Account numbers");
            
        }
    }


}


const user1= new Bank();
console.log("........Validate Account......");

console.log(user1.validateAccount(1000)?'Account available':'Not Avail account no');

console.log(".....Autheticate Account..........");

user1.authenticateAccount(1001,'usertwo','usertwo');

console.log("..........Account Balance...............");

user1.getBalance(1004,'userfive','userfive')
user1.getBalance(1006,'userfive','userfive') //invalid account Number

console.log(".......Balance without username and pssword......");
user1.balanceEnquiryByAccountNumber(1002)

console.log(".....fund transfer one account to another.....");
user1.fundTransfer(1003,1004,15000);




