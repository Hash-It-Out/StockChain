var Shares = artifacts.require("./Shares.sol");

contract("Shares",function(accounts){
	it("initializes with five Share",function(){
		return Shares.deployed().then(function(instance){
			return instance.Count();
		}).then(function(count){
			assert.equal(count,5);
		});
	});

	it("initializes with Share with the correct values",function(){
		return Shares.deployed().then(function(instance){
			ShareInstance = instance;
			return ShareInstance.Share(1);
		}).then(function(Shares){
			assert.equal(Shares[0],1,"contains the correct id");
			assert.equal(Shares[1],"ACC LIMITED","contains the correct Share_Name");
			assert.equal(Shares[2],"ACC","contains the correct Share_Code");
			assert.equal(Shares[3],1000,"contains the correct Buy_Amt");
			assert.equal(Shares[4],980,"contains the correct Sell_Amt");

			return ShareInstance.Share(2);
		}).then(function(Shares){
			assert.equal(Shares[0],2,"contains the correct id");
			assert.equal(Shares[1],"ADANI POWER LTD","contains the correct Share_Name");
			assert.equal(Shares[2],"ADANIPOWER","contains the correct Share_Code");
			assert.equal(Shares[3],1500,"contains the correct Buy_Amt");
			assert.equal(Shares[4],1600,"contains the correct Sell_Amt");
			
			return ShareInstance.Share(3);
		}).then(function(Shares){
			assert.equal(Shares[0],3,"contains the correct id");
			assert.equal(Shares[1],"BANK OF INDIA","contains the correct Share_Name");
			assert.equal(Shares[2],"BANKINDIA","contains the correct Share_Code");
			assert.equal(Shares[3],2000,"contains the correct Buy_Amt");
			assert.equal(Shares[4],1980,"contains the correct Sell_Amt");
			

			return ShareInstance.Share(4);
		}).then(function(Shares){
			assert.equal(Shares[0],4,"contains the correct id");
			assert.equal(Shares[1],"COAL INDIA LTD","contains the correct Share_Name");
			assert.equal(Shares[2],"COALINDIA","contains the correct Share_Code");
			assert.equal(Shares[3],1800,"contains the correct Buy_Amt");
			assert.equal(Shares[4],1805,"contains the correct Sell_Amt");
			
			return ShareInstance.Share(5);
		}).then(function(Shares){
			assert.equal(Shares[0],5,"contains the correct id");
			assert.equal(Shares[1],"ITC LTD","contains the correct Share_Name");
			assert.equal(Shares[2],"ITC","contains the correct Share_Code");
			assert.equal(Shares[3],1405,"contains the correct Buy_Amt");
			assert.equal(Shares[4],1401,"contains the correct Sell_Amt");
			
		});
	});
});

