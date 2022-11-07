//Kepler's Thied Law
//a  is the orbit's semi-major axis
//a is the sum of radius and average altitude

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    for (let i = 0; i < arr.length; i++)
    {
      const c = Math.pow(earthRadius + arr[i]['avgAlt'], 3);
    const add = c / GM;
    const total = Math.round(2 * Math.PI * Math.sqrt(add));
    delete arr[i]['avgAlt'];
    arr[i]['orbitalPeriod'] = total;
    }
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));