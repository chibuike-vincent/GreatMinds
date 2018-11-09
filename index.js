// let content = document.getElementById('content');
let input =  document.getElementById('input')
let containerDiv = document.getElementById('content')

document.getElementById('btn').addEventListener('click', getCountry)
document.getElementById('btn1').addEventListener('click', getLeague)
document.getElementById('btn2').addEventListener('click', getFixtures)
// document.getElementById('btn3').addEventListener('click', geth2h)
// document.getElementById('btn4').addEventListener('click', getLivescore)
// e.preventDefault();
  // content.innerHTML = input.value;
  // input.value = ""
function getCountry(){
  //fetch countries
  fetch('https://allsportsapi.com/api/football/?met=Countries&APIkey=eddd2fb4730bb6d869902286bf68dec214846d8c6df16eeb22d879f27a7aa8dc')
  // fetch('./readme.txt')
  .then((res) => res.json())
  .then((data) => {
    let { result } = data;
    console.dir(result)
    let resultData = document.createElement('div');
    let resultBox = document.createElement('ul');
    let header = document.createElement('h2')
    header.textContent = 'Countries'
    resultData.appendChild(header)
    containerDiv.appendChild(resultData)
    
    let newData = result.map((out) => {
      return `
      <li>country_key: ${out.country_key}</li> 
      <li>country_name ${out.country_name}</li>
      `;
    });

    resultBox.innerHTML = newData.join('')
    
    containerDiv.appendChild(resultBox)
  })
  .catch(err => console.log(err))
  
}



// function getLeague(){
//   //fetch countries
//   fetch('https://allsportsapi.com/api/football/?met=Leagues&APIkey=eddd2fb4730bb6d869902286bf68dec214846d8c6df16eeb22d879f27a7aa8dc')
//   // fetch('./readme.txt')
//   .then((res) => res.json())
//   .then((data) => {
//     let { result } = data;
//     console.dir(result)
//     let resultData = document.createElement('div');
//     let resultBox = document.createElement('ul');
//     let header = document.createElement('h2')
//     header.textContent = 'League'
//     resultData.appendChild(header)
//     containerDiv.appendChild(resultData)
    
//     let newData = result.map((out) => {
//       return `
//       <li>league_key": ${out.league_key}</li>
//       <li>league_name": ${out.league_name}</li>
//       <li>country_key": ${out.country_key}</li>
//       <li>country_name": ${out.country_name}</li>
//       `;
//     });

//     resultBox.innerHTML = newData.join('')
    
//     containerDiv.appendChild(resultBox)
//   })
//   .catch(err => console.log(err))
  
// }


function getLeague(){
  fetch('https://allsportsapi.com/api/football/?met=Leagues&APIkey=eddd2fb4730bb6d869902286bf68dec214846d8c6df16eeb22d879f27a7aa8dc')
  .then((res)=> res.json())
  .then((data) => {
    let {result} = data
    console.log(result)
    let output = '<h2>League</h2>'
    result.forEach((league) => {
      output += `
      <li>league_key: ${league.league_key}</li>
      <li>league_name: ${league.league_name}</li>
      <li>country_key: ${league.country_key}</li>
      <li>country_name: ${league.country_name}</li>
      `;
    })
    containerDiv.innerHTML = output
  })
}

function getFixtures(){
  fetch('https://allsportsapi.com/api/football/?met=Fixtures&APIkey=eddd2fb4730bb6d869902286bf68dec214846d8c6df16eeb22d879f27a7aa8dc&from=2018-05-23&to=2018-05-23')
  .then((res)=> res.json())
  .then((data) => {
    console.log(data)
    let {result} = data
    console.log(result)
    let output = '<h2>Fixtures</h2>'
    result.forEach((fixture) => {
      output += `
      <li>event_key: ${fixture.event_key}</li>
      <li>event_date: ${fixture.event_date}</li>
      <li>event_time: ${fixture.event_time}</li>
      <li>event_home_team: ${fixture.event_home_team}</li>
      <li>home_team_key: ${fixture.home_team_key}</li>
      <li>event_away_team: ${fixture.event_away_team}</li>
      <li>away_team_key: ${fixture.away_team_key}</li>
      <li>event_halftime_result: ${fixture.event_halftime_result}</li>
      <li>event_final_result: ${fixture.event_final_result}</li>
      <li>event_status: ${fixture.event_status}</li>
      <li>country_name: ${fixture.country_name}</li>
      <li>league_name: ${fixture.league_name}</li>
      <li>league_key: ${fixture.league_key}</li>
      <li>league_round: ${fixture.league_round}</li>
      <li>league_season: ${fixture.league_season}</li>
      <li>event_live:${fixture.league_live}</li>
      <li>goalscorers: 
          <li>time: ${fixture.time}</li>
          <li>home_scorer: ${fixture.home_scorer}</li>
          <li>score: ${fixture.score}</li>
          <li>away_scorer: ${fixture.away_scorer}</li>
    
      `;
    })
    containerDiv.innerHTML = output
  })
}
  
//fetch league---https://allsportsapi.com/api/football/?met=Leagues&APIkey=!_your_account_APIkey_!

//fetch fixtures---https://allsportsapi.com/api/football/?met=Fixtures&APIkey=!_your_account_APIkey_!&from=2018-05-23&to=2018-05-23

//fetch H2H (Head 2 Head)----https://allsportsapi.com/api/football/?met=H2H&APIkey=!_your_account_APIkey_!&firstTeamId=2616&secondTeamId=2617

//fetch lifescore---ttps://allsportsapi.com/api/football/?met=Livescore&APIkey=!_your_account_APIkey_!

//fetch Standings---https://allsportsapi.com/api/football/?&met=Standings&leagueId=258&APIkey=!_your_account_APIkey_!

//fetch topscorers-----https://allsportsapi.com/api/football/?&met=Topscorers&leagueId=258&APIkey=!_your_account_APIkey_!

//fetch team----https://allsportsapi.com/api/football/?&met=Teams&teamId=2616&APIkey=!_your_account_APIkey_!

//fetch players----https://allsportsapi.com/api/football/?&met=Players&playerName=Ronaldo Cristiano&APIkey=!_your_account_APIkey_!

//fetch videos----https://allsportsapi.com/api/football/?&met=Videos&eventId=76387&APIkey=!_your_account_APIkey_!