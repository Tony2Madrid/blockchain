pragma solidity ^0.4.4;
contract advertisement{
    
    address public owner;
    uint public price;
    string public codepromo;
    string public description;
    string public image;
    uint public online_date;
    
    modifier isBest(){
        uint timeelapsed;
        uint cap;
        
        timeelapsed= now-online_date;
        timeelapsed=timeelapsed/(8640000); //conversion en jours
        cap = ((price-2*timeelapsed)*110)/100; //Minimum d'enchere: l'enchere actuelle - 2*le nombre de jours depuis le derniere enchere X 10pourcent
        if(msg.value<=cap)throw;
        _;
    }
    modifier onlyOwner(){
        if (msg.sender!=owner ) return;
        _;
    }
    function advertisement() 
    {
        owner=msg.sender;
        online_date=now;
        price = 0;
        codepromo="Code promo par défaut";
        image= "http://images.apple.com/v/iphone/home/t/images/home/compare_iphone_7_plus_large.jpg";
        description="Description par défaut";
    }
    
    function raise(string _codepromo,string _description,string _image) payable isBest()
    {
        price=msg.value;
        codepromo= _codepromo;
        description= _description;
        image= _image;
        online_date=now;
    }
    
    function withdraw() onlyOwner() 
    {
        if(!owner.send(this.balance))throw;
    }
    
}