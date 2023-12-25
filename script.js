var obj = [
  {
    Clients: [
      {
        name: "Rakesh",
        email: "rockr4674@gmail.com",
        city: "Chennai",
        Mobile: 900000000,
        isAvaiable: true,
      },
      {
        name: "Vignesh",
        email: "vignesh@gmail.com",
        city: "Banglore",
        Mobile: 900000000,
        isAvaiable: true,
      },
    ],
  },
];

//for loop

console.log("---------For Loop----------");

for (var i = 0; i < obj.length; i++) {
  var clients = obj[i].Clients;

  for (var j = 0; j < clients.length; j++) {
    var client = clients[j];

    var keys = Object.keys(client);

    for (var k = 0; k < keys.length; k++) {
      var key = keys[k];
      console.log(`${key} : ${client[key]}`);
    }
    console.log("----------------");
  }
}

//for in  loop

console.log("---------For in Loop----------");

for (var i in obj) {
  if (obj.hasOwnProperty(i)) {
    var clients = obj[i].Clients;
    for (var j in clients) {
      if (clients.hasOwnProperty(j)) {
        var client = clients[j];
        for (var key in client) {
          if (client.hasOwnProperty(key)) {
            console.log(`${key} : ${client[key]}`);
          }
        }

        console.log("--------------------------");
      }
    }
  }
}

//for of loop

console.log("---------For of Loop----------");

for (var item of obj) {
  var clients = item.Clients;
  for (var client of clients) {
    for (var key in client) {
      console.log(`${key} : ${client[key]}`);
    }
    console.log("----------------------------");
  }
}

// for each loop

console.log("---------For each Loop----------");
obj.forEach(function (item) {
  var clients = item.Clients;

  clients.forEach(function (client) {
    Object.entries(client).forEach(function ([key, value]) {
      console.log(`${key}: ${value}`);
    });

    console.log("----------------------------");
  });
});
