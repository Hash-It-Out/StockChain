App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Shares.json", function(sh) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Shares = TruffleContract(sh);
      // Connect provider to interact with contract
      App.contracts.Shares.setProvider(App.web3Provider);

      // App.listenForEvents();

      return App.render();
    });
  },

  // // Listen for events emitted from the contract
  // listenForEvents: function() {
  //   App.contracts.Election.deployed().then(function(instance) {
  //     // Restart Chrome if you are unable to receive this event
  //     // This is a known issue with Metamask
  //     // https://github.com/MetaMask/metamask-extension/issues/2393
  //     instance.votedEvent({}, {
  //       fromBlock: 0,
  //       toBlock: 'latest'
  //     }).watch(function(error, event) {
  //       console.log("event triggered", event)
  //       // Reload when a new vote is recorded
  //       App.render();
  //     });
  //   });
  // },

  render: function() {
    var shareInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
      web3.eth.getBalance(account, function(err, balance) {
      if (err === null) {
        var bal = web3.fromWei(balance, "ether");
        $("#accountbalance").html(web3.fromWei(balance, "ether") + " ETH");
      }
    });
    });

    // Load contract data
    App.contracts.Shares.deployed().then(function(instance) {
      shareInstance = instance;
      return shareInstance.Count();
    }).then(function(Count) {
      var shareResults = $("#shareResults");
      shareResults.empty();

      // var candidatesSelect = $('#candidatesSelect');
      // candidatesSelect.empty();

      // for (var i = 1; i <= Count; i++) {
      //   shareInstance.Share(i).then(function(sh) {
      //     var id = sh[0];
      //     var Share_Name = sh[1];
      //     var Share_Code = sh[2];
      //     var Buy_Amt = sh[3];
      //     var Sell_Amt = sh[4];
      //     // console.log(id+" "+Share_Name);
      //     // Render candidate Result
      //     var shareTemplate = "<tr><th>" + id + "</th><td>" + Share_Name + "</td><td>" + Share_Code + "</td><td>" + Buy_Amt +`<a onclick="document.getElementById('id02').style.display='block'" class="glyphicon glyphicon-minus">`+ "</td><td>" + Sell_Amt +`<a onclick="document.getElementById('id01').style.display='block'" class="glyphicon glyphicon-plus">`+ "</td></tr>"
      //     shareResults.append(shareTemplate);

      //     // // Render candidate ballot option
      //     // var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
      //     // candidatesSelect.append(candidateOption);
      //   });
      // }
               shareInstance.Share(1).then(function(sh) {
          var id = sh[0];
          var Share_Name = sh[1];
          var Share_Code = sh[2];
          var Buy_Amt = sh[3];
          var Sell_Amt = sh[4]; 
          console.log(id+" "+Share_Name);
          // var idname=document.getElementById('id0'+id);
          // console.log(idname);
          // Render candidate Result1
          var shareTemplate = "<tr><th>" + id + "</th><td>" + Share_Name + "</td><td>" + Share_Code + "</td><td><span class='value01b'>" + Buy_Amt +`</span><a onclick="document.getElementById('id01').style.display='block'" class="glyphicon glyphicon-minus">`+ "</td><td class='value01s'>" + Sell_Amt +`<a onclick="document.getElementById('id01').style.display='block'" class="glyphicon glyphicon-plus">`+ "</td></tr>"
          
          shareResults.append(shareTemplate);


          // // Render candidate ballot option
          // var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          // candidatesSelect.append(candidateOption);
        });
          shareInstance.Share(2).then(function(sh) {
          var id = sh[0];
          var Share_Name = sh[1];
          var Share_Code = sh[2];
          var Buy_Amt = sh[3];
          var Sell_Amt = sh[4];
          console.log(id+" "+Share_Name);
          // var idname=document.getElementById('id0'+id);
          // console.log(idname);
          // Render candidate Result1
          var shareTemplate = "<tr><th>" + id + "</th><td>" + Share_Name + "</td><td>" + Share_Code + "</td><td><span class='value02b'>" + Buy_Amt +`</span><a onclick="document.getElementById('id02').style.display='block'" class="glyphicon glyphicon-minus">`+ "</td><td><span class='value02s'>" + Sell_Amt +`</span><a onclick="document.getElementById('id02').style.display='block'" class="glyphicon glyphicon-plus">`+ "</td></tr>"
          
          shareResults.append(shareTemplate);


          // // Render candidate ballot option
          // var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          // candidatesSelect.append(candidateOption);
        });
          shareInstance.Share(3).then(function(sh) {
          var id = sh[0];
          var Share_Name = sh[1];
          var Share_Code = sh[2];
          var Buy_Amt = sh[3];
          var Sell_Amt = sh[4]; 
          console.log(id+" "+Share_Name);
          // var idname=document.getElementById('id0'+id);
          // console.log(idname);
          // Render candidate Result1
          var shareTemplate = "<tr><th>" + id + "</th><td>" + Share_Name + "</td><td>" + Share_Code + "</td><td><span class='value03b'>" + Buy_Amt +`</span><a onclick="document.getElementById('id03').style.display='block'" class="glyphicon glyphicon-minus">`+ "</td><td class='value03s'>" + Sell_Amt +`<a onclick="document.getElementById('id03').style.display='block'" class="glyphicon glyphicon-plus">`+ "</td></tr>"
          
          shareResults.append(shareTemplate);


          // // Render candidate ballot option
          // var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          // candidatesSelect.append(candidateOption);
        });
          shareInstance.Share(4).then(function(sh) {
          var id = sh[0];
          var Share_Name = sh[1];
          var Share_Code = sh[2];
          var Buy_Amt = sh[3];
          var Sell_Amt = sh[4]; 
          console.log(id+" "+Share_Name);
          // var idname=document.getElementById('id0'+id);
          // console.log(idname);
          // Render candidate Result1
          var shareTemplate = "<tr><th>" + id + "</th><td>" + Share_Name + "</td><td>" + Share_Code + "</td><td><span class='value04b'>" + Buy_Amt +`</span><a onclick="document.getElementById('id04').style.display='block'" class="glyphicon glyphicon-minus">`+ "</td><td class='value04s'>" + Sell_Amt +`<a onclick="document.getElementById('id04').style.display='block'" class="glyphicon glyphicon-plus">`+ "</td></tr>"
          
          shareResults.append(shareTemplate);


          // // Render candidate ballot option
          // var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          // candidatesSelect.append(candidateOption);
        });
          shareInstance.Share(5).then(function(sh) {
          var id = sh[0];
          var Share_Name = sh[1];
          var Share_Code = sh[2];
          var Buy_Amt = sh[3];
          var Sell_Amt = sh[4]; 
          console.log(id+" "+Share_Name);
          // var idname=document.getElementById('id0'+id);
          // console.log(idname);
          // Render candidate Result1
          var shareTemplate = "<tr><th>" + id + "</th><td>" + Share_Name + "</td><td>" + Share_Code + "</td><td><span class='value05b'>" + Buy_Amt +`</span><a onclick="document.getElementById('id05').style.display='block'" class="glyphicon glyphicon-minus>`+ "</td><td class='value05s'>" + Sell_Amt +`<a onclick="document.getElementById('id05').style.display='block'" class="glyphicon glyphicon-plus">`+ "</td></tr>"
          
          shareResults.append(shareTemplate);


          // // Render candidate ballot option
          // var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
          // candidatesSelect.append(candidateOption);
        });

      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  },
  buyshare: function() {
    var user_id = 1;
    App.contracts.Shares.deployed().then(function(instance) {
      web3.eth.getBalance(App.account, function(err, balance) {
      if (err === null) {
        var bal = web3.fromWei(balance, "ether");
        print(bal);
       }
    });

      return instance.buy(user_id, { from: App.account });
    }).then(function(result) {
      // Wait for balance to update
      $("#content").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  }
};


$(function() {
  $(window).load(function() {
    App.init();
  });
});
