pragma solidity ^0.4.24;

contract Shares {
	//Model Shares
	struct Shares{
		uint id;
	 	string  Share_Name;
		string  Share_Code;
		uint  Buy_Amt;
		uint  Sell_Amt;
	}
	//Store Shares
	mapping(uint => Shares) public Share;
	mapping(address => Shares) public buyers;

	uint public Count;
	//Buy Shares
	//Sell Shares
	//Fetch Shares
	//Store User Shares
	constructor() public {
		addShares("ACC LIMITED","ACC",1000,980);
		addShares("ADANI POWER LTD","ADANIPOWER",1500,1600);
		addShares("BANK OF INDIA","BANKINDIA",2000,1980);
		addShares("COAL INDIA LTD","COALINDIA",1800,1805);
		addShares("ITC LTD","ITC",1405,1401);
		// buy(1);
		// buy(2);
		// buy(3);
		// buy(4);
		// buy(5);
	}

	function addShares (string _name,string _code,uint _bamt,uint _samt) private{
		Count ++;
		Share[Count] = Shares(Count, _name, _code,_bamt,_samt);
	}
	// string myArray[];
	// function buy(uint _amt) private return (string[]){
	//    myArray.push(string(_amt));
	//    myArray.push(msg.sender); 
	//    return myArray;
	// }
	// function buy(uint _amt) public {
	// 	return _amt;
	// }
	function buy(uint user_id) public {
		buyers[msg.sender] = Share[user_id];
		Share[user_id].Buy_Amt;
	}
    // function buy(uint _userid) private{
    // 	//record that user has bought the share
    // 	uint a=Share[_userid].id;
    // 	string b=Share[_userid].Share_Name;
    // 	string c=Share[_userid].Share_Code;
    // 	uint d=Share[_userid].Buy_Amt;
    // 	uint e=Share[_userid].Sell_Amt;
    // 	Buy[_userid] = Shares(a,b,c,d,e);
    // }

}