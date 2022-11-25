// question-1:

var profile = [
  {
    "name": "Maran",
    "age": "22",
    "city": "Vilathikulam",
  },
  {
    "name": "Nandha",
    "age": "24",
    "city": "Thoothukudi",
  },
  {
    "name": "Praveen",
    "age": "32",
    "city": "Tirunelveli",
  },
];


// for loop:

for (var i = 0; i < profile.length; i++) {
  console.log(profile[i]);
}


// for in:

for (var key in profile) {
  console.log(profile[key]);
}


// for of:

for (var key of profile) {
    console.log(key);
  }




// question-2:

const resume = [
  {
    "name": "MANIMARAN R",
    "fathername": "Radhakrishnan K",
    "city": "Vilathikulam",
    "district": "Thoothukudi",
    "state": "TamilNadu",
    "nationality": "Indian",
    "qualification": "B.sc Computer Science",
    "percentage": "71%",
  },
];
console.log(resume);

// Expected output:

// city: "Vilathikulam";
// district: "Thoothukudi";
// fathername: "Radhakrishnan K";
// name: "MANIMARAN R";
// nationality: "Indian";
// percentage: "71%";
// qualification: "B.sc Computer Science";
// state: "TamilNadu";
