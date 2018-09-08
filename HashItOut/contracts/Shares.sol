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
	}

	function addShares (string _name,string _code,uint _bamt,uint _samt) private{
		Count ++;
		Share[Count] = Shares(Count, _name, _code,_bamt,_samt);
	}


}