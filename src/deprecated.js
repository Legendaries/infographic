array = [[["Home score","1 - 1","2",1.3599999999999999,22.4,"S.Coulter","1"],["Home score","1 - 2","2",1.3900000000000001,22.85,"J.Warner","2"],["Home score","2 - 3","3",2.22,36.4,"J.Forbes","3"],["Home score","2 - 4","3",2.41,40.2,"L.Bing","4"],["Home score","2 - 5","3",2.46,41.2,"R.Hanson","5"],["Home score","2 - 6","3",2.81,48.2,"J.Pilskalns","6"]],[["Away score","1 - 0","2",1.07,4.28,"B.Rutherford","1"],["Away score","2 - 2","2",1.8199999999999998,7.28,"R.Bagley","2"]],[["Shots","1","2","3","T"],["Montana Tech","4","4","5","13"],["Montana Stat","17","15","20","52"]],[["Power Plays","PP","PIM"],["Montana Tech","1-7","20"],["Montana Stat","3-9","16"]]];

const formattedPenalties = {
    teamNames: ["Montana State", "Other Team"],
    totalPenalties: [],
    ppGoals: [],
  };

function formatData(data) {
  const [_, __, ___, penalties] = data;
  
  
  //const formattedPenalties = formatPenalties(penalties);
  
  
  formatPenalties(penalties);
  return formattedPenalties;
}

function formatPenalties(penalties) {
    let a = [penalties[1][1].split('-'), penalties[2][1].split('-')];
    formattedPenalties.totalPenalties = [a[0][1], a[1][1]];
    formattedPenalties.ppGoals = [a[0][0], a[1][0]];
}



console.log(formatData(array));