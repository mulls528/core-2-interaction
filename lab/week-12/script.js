fetch("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json")

.then(response => response.json())
  .then(data => {
    var allSchools = data;

//display only schools in France//
var schoolsInFrance = allSchools.filter(school => school.country === 'France');
schoolsInFrance.sort((a, b) => a.name.localeCompare(b.name));

schoolsInFrance.forEach(school => {
  var element = document.createElement('div');

    // allSchools.sort((a, b) => a.name.localeCompare(b.name));
  
    // allSchools.forEach(school => {
    //   var element = document.createElement('div');
     
      element.className = 'school-card';
      element.innerHTML = `
        <h2>${school.name}</h2>
        <p>Website: <a href="${school.web_pages[0]}" target="_blank">${school.web_pages[0]}</a></p>
        <p>Domain: ${school.domains}</p>
      `;
      
      document.body.appendChild(element);
    });
  });