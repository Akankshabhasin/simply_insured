pragma solidity ^0.4.20;

contract BigBank {
    
    uint bank_balance;  //The net balance with the bank.
    uint credit_limit = 60;
    uint current_credit;
    uint debit_amount;
    uint p2p;
    
    uint time;
   
    mapping(address => uint) balances;     //Map of the various users and their account balances
    mapping(address => uint) bank_accounts_list;    //Map of various users and their balances in the bank
    mapping(address => uint) credit_map; // Current credit of user
    constructor() payable public {
        
        
    }
    
    function () payable public {
        
    }
    
    function total_bank_balance_function() public {    //Converts the bank balance from wei => ether
        address a = address(this);
        bank_balance = a.balance/1000000000000000000;
    }
    
   
    function request_ether_function(address ether_request_address,uint x) public { //User request for ether
        uint y = x * 1000000000000000000;
        ether_request_address.transfer(y);
        bank_accounts_list[ether_request_address] -= y;
        balances[ether_request_address] += y;
        bank_balance -= y;
        
        
    }
    
    function print_bank_balance_function() public view returns(uint) {  //Call request_ether_function first
        return bank_balance;
    }
    
    function withdraw_credit(address account_address, uint amount) public returns(uint){
        current_credit = account_address.balance/2;
        if(credit_limit - current_credit/1000000000000000000 > amount){
            account_address.transfer(amount*1000000000000000000);
        }
        
        current_credit += amount*1000000000000000000;
        credit_map[account_address] = current_credit;
        time = now;
        return time;
        
        // Check whether out of bounds by: (creditLimit - currentCredit) > amount
        // If true add amount in both currentCredit && balance [Both are account mapped]
        // If no, deny
    }
    
    function deposit_credit() payable public{
        
        credit_map[msg.sender] = current_credit;
        
        if(time < 2548800){
            credit_map[msg.sender] -= msg.value*1000000000000000000;
            
        }
        
        if(msg.value*1000000000000000000 <= credit_map[msg.sender]){
            credit_map[msg.sender] = credit_map[msg.sender] - msg.value*1000000000000000000;
            credit_map[msg.sender] += 1000000000000000000+credit_map[msg.sender];
        }
        
        credit_map[msg.sender] = current_credit;
        // Subtranct amount from currentCredit && balance  [Both are account mapped]
    }
    // // P2P
    // function transfer(address sender, address recipient, uint amount){
    //     // Check if amount is valid: amount < balance
    //     // If yes, send amount ETH from sender to recipient
    // }
    
    function P2P() public payable{
        p2p = msg.value;
    }
    
    function P2P_to_person(address reciever) public {
        reciever.transfer(p2p);
    }
    
    
    
}










