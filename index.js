let dataBase;
fetch('http://localhost:3000/posts').then(function(response) {
    return response.text();
}).then(function(text) {
    const table = document.getElementById('table');
    text = JSON.parse(text);
    dataBase = text;
    let blockGroup = document.getElementById('blockGroup');
    blockGroup.classList.add('emptybox');
});
    
function postData() {
    fetch('http://localhost:3000/posts',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:  JSON.stringify({
        Company:document.getElementById('Company').value,
        Username:document.getElementById('Username').value,
        Email:document.getElementById('Email').value,
        FirstName:document.getElementById('First name').value,
        LastName:document.getElementById('Last name').value,
        City:document.getElementById('City').value,
        Country:document.getElementById('Country').value,
        Password:document.getElementById('Password').value,
        PostalCode:document.getElementById('Postal code').value,
        AboutMe:document.getElementById('About me').value,
      }),
    })
}

const registrationContent = `
  <nav class="nav">
    <div class="nav__name">App</div>
    <ul>
      <li><a class="nav__link" onclick="getTabContent('#registration')">Registration</a></li>
      <li><a class="nav__link" onclick="getTabContent('#autorization')">Sign in</a></li>
    </ul>
  </nav>
  <container id="container">
    <div class="registration" id="registration">
      <div class="registration__information">
        <div>Username<input type="text" id="Username"></div>
        <div>Password<input type="Password" id="Password"></div>
        <div>Email<input type="text" id="Email"></div>
        <div>First name<input type="text" id="First name"></div>
        <div>Last name<input type="text" id="Last name"></div>   
      </div>
      <div class="registration__information">
        <div>City<input type="text" id="City"></div>
        <div>Country<input type="text" id="Country"></div>
        <div>Company<input type="text" id="Company"></div>
        <div>Postal code<input type="text" id="Postal code"></div>
        <div>About me<input type="text" id="About me"></div>
      </div>
      <div><button class="btn-save" onclick="postData()">Save</button></div>
    </div>
  </container>`;
    
const userProfileContent = `
  <nav class="nav">
    <div class="nav__name">App</div>
    <ul>
      <li><a class="nav__link" onclick="getTabContent('#registration')">Registration</a></li>
      <li><a class="nav__link" onclick="getTabContent('#userprofile')">User profile</a></li>
      <li><a class="nav__link" onclick="getTabContent('#data')">Data</a></li>
    </ul>
  </nav>
  <container id="container">
    <div class="registration" id="registration">
      <div class="registration__information">
        <div>Company<input type="text" id="Company"></div>
        <div>Username<input type="text" id="Username"></div>
        <div>Email<input type="text" id="Email"></div>
        <div>First name<input type="text" id="First name"></div>
        <div>Last name<input type="text" id="Last name"></div>   
      </div>
      <div class="registration__information">
        <div>City<input type="text" id="City"></div>
        <div>Country<input type="text" id="Country"></div>
        <div>Password<input type="Password" id="Password"></div>
        <div>Postal code<input type="text" id="Postal code"></div>
        <div>About me<input type="text" id="About me"></div>
      </div>
      <div><button class="btn-save" onclick="putData()">Save changes</button></div>
    </div>
  </container>
`;

const dataContent = `
  <nav class="nav">
    <div class="nav__name">App</div>
    <ul>
      <li><a class="nav__link" onclick="getTabContent('#registration')">Registration</a></li>
      <li><a class="nav__link" onclick="getTabContent('#userprofile')">User profile</a></li>
      <li><a class="nav__link" onclick="getTabContent('#data')">Data</a></li>
    </ul>
  </nav>
  <container id="container">
    <div class="admin-table" id="admin-table">
      <table id="table">
        <tr>
          <th class="admin-table-0"><input type="checkbox"> </th>
          <th class="admin-table-1">ID</th>
          <th class="admin-table-2">First name</th>
          <th class="admin-table-3">Last name</th>
          <th class="admin-table-4">Username</th>
          <th class="admin-table-5">Email address</th>
          <th class="admin-table-6">Company</th>
          <th class="admin-table-7">City</th>
          <th class="admin-table-8">Country</th>
          <th class="admin-table-9">Postal code</th> 
        </tr>
      </table>
      <div class="admin-table__buttons">
        <button class="btn btn-save-1" onclick="deleteUser()"> Удалить пользователя </button>
        <button class="btn btn-save-1" onclick="getUserProfile()"> Редактировать </button>
      </div>
      <div class="admin-table__arrows">
        <img src="img/22.png" alt="rightArrow" class="arrows arrows-1" onclick="getFirstPage()">
        <img src="img/12.png" alt="rightArrow" class="arrows arrows-1" onclick="getPreviousPage()">
        <img src="img/11.png" alt="rightArrow" class="arrows arrows-2" onclick="getNextPage()">
        <img src="img/21.png" alt="rightArrow" class="arrows arrows-2" onclick="getLastPage()">
      </div>
    </div>   
  </container>      
`;

const homePageContent =`
  <section class="start-window">
                Welcome
                <div class="btn-box">
                    <div><button class="btn btn-login" onclick="getTabContent('#registration')">Sign up</button></div>
                    <div><button class="btn btn-login" onclick="getTabContent('#autorization')">Sign in</button></div>
                </div>
            </section>
`;

const autorization = `
  <nav class="nav">
    <div class="nav__name">App</div>
    <ul>
      <li><a class="nav__link" onclick="getTabContent('#registration')">Registration</a></li>
      <li><a class="nav__link" onclick="getTabContent('#autorization')">Sign in</a></li>
    </ul>
  </nav>
  <container id="container">
    <div class="registration" id="registration">
      <div class="registration__autorization"> 
        <div>Username</br><input type="text" id="Username"></div>
        <div>Password</br><input type="Password" id="Password"></div>
        <div><button class="btn-save" onclick="signIn()">Sign In</button></div>
      </div>
    </div>
  </container>
`;

function checkRow(index) {
  let row = document.getElementsByTagName('tr');
  let checkbox = document.getElementById(`checkbox${index}`);
  if (checkbox.checked) checkbox.checked = false;
  else checkbox.checked = true;;
  if (checkbox.checked) row[index - counter].classList.add('checkedRow');
  else row[index - counter].classList.remove('checkedRow');
}

function newRow() {
  const table = document.getElementById('table');
  var newrow = table.insertRow(-1);
  newrow.insertCell(-1).innerHTML = `<input type="checkbox" value="${this.id}" class="checkbox" onclick="checkRow(${this.id})" id="checkbox${this.id}">`;
  newrow.insertCell(-1).innerHTML = this.id;
  newrow.insertCell(-1).innerHTML = this.FirstName;
  newrow.insertCell(-1).innerHTML = this.LastName;
  newrow.insertCell(-1).innerHTML = this.Username;
  newrow.insertCell(-1).innerHTML = this.Email;
  newrow.insertCell(-1).innerHTML = this.Company;
  newrow.insertCell(-1).innerHTML = this.City;
  newrow.insertCell(-1).innerHTML = this.Country;
  newrow.insertCell(-1).innerHTML = this.PostalCode;
  newrow.setAttribute('onclick', `checkRow(${this.id})`)
}

function getData () {
  // const test = document.getElementById('pageNumbers');
  // test.innerHTML = `${counter + 1} ${counter + 5} из `;
  fetch('http://localhost:3000/posts').then(function(response) {
    return response.text();
  }).then(function(text) {
    text = JSON.parse(text);
    if (text.length > 5) {
      for (let i = 0; i < 5; i++)  {
        let obj = text[i];
        newRow.call(obj);
      }; 
    } else {
      for (let i = 0; i < text.length; i++)  {
        let obj = text[i];
        newRow.call(obj);
      }; 
    }
  });
}

function getTabContent(pathname) {
  const routes = {
    '': homePageContent,
    '#registration': registrationContent,
    '#userprofile': userProfileContent,
    '#data': dataContent,
    '#autorization': autorization,
  };

  let contentDiv = document.getElementById('mainSection');
  window.location.href = window.location.origin + `/${pathname}`;
  const hash = window.location.hash;
  contentDiv.innerHTML = routes[hash];
  if (hash == '#data') {
    getData ();
  }
}

// let pageAmount = Math.ceil(dataBase.length/5);
var counter = 0;

function getNextPage() {
  if (counter < dataBase.length - 5) {
    counter = counter + 5;
    let contentDiv = document.getElementById('container');
    contentDiv.innerHTML = dataContent;
    const table = document.getElementById('table');
    if (dataBase.length > counter + 5) {
      for (let i = counter; i < counter + 5; i++)  {
        let obj = dataBase[i];
        newRow.call(obj);
      }; 
    } else {
      for (let i = counter; i < dataBase.length; i++)  {
        let obj = dataBase[i];
        newRow.call(obj);
      }; 
    }
  }
}

function getLastPage() {
  if (counter < dataBase.length - 5) {
    counter = 5 * Math.floor((dataBase.length-1)/5);
    let contentDiv = document.getElementById('container');
    contentDiv.innerHTML = dataContent;
    const table = document.getElementById('table');
    if (dataBase.length > counter + 5) {
      for (let i = counter; i < counter + 5; i++)  {
        let obj = dataBase[i];
        newRow.call(obj);
      }; 
    } else {
      for (let i = counter; i < dataBase.length; i++)  {
        let obj = dataBase[i];
        newRow.call(obj);
      }; 
    }
  }
}

function getFirstPage() {
    counter = 0;
    let contentDiv = document.getElementById('container');
    contentDiv.innerHTML = dataContent;
    const table = document.getElementById('table');
    if (dataBase.length > counter + 5) {
      for (let i = counter; i < counter + 5; i++)  {
        let obj = dataBase[i];
        newRow.call(obj);
      }; 
    } else {
      for (let i = counter; i < dataBase.length; i++)  {
        let obj = dataBase[i];
        newRow.call(obj);
      }; 
    }
}

function getPreviousPage() {
  if (counter > 0) {
    counter = counter - 5;
    let contentDiv = document.getElementById('container');
    contentDiv.innerHTML = dataContent;
    const table = document.getElementById('table');
    if (dataBase.length > counter + 5) {
      for (let i = counter; i < counter + 5; i++)  {
        let obj = dataBase[i];
        newRow.call(obj);
      }; 
    } else {
      for (let i = counter; i < dataBase.length; i++)  {
        let obj = dataBase[i];
        newRow.call(obj);
      }; 
    }
  }
}

function getCheckedCheckBoxes() {
  var checkboxes = document.getElementsByClassName('checkbox');
  var checkboxesChecked = [];
  for (var index = 0; index < checkboxes.length; index++) {
     if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value); 
        // return checkboxes[index].value;
     }
  }
  return checkboxesChecked
}

getTabContent(window.location.hash)

function deleteUser () {
  getCheckedCheckBoxes().forEach(item => {
    fetch('http://localhost:3000/posts/' + item, {
    method: 'DELETE',
    })
  })
}

let userId;

function getUserProfile () {
  userId = getCheckedCheckBoxes()[0];
  if (userId !== undefined) {
    getTabContent('#userprofile');
    fetch('http://localhost:3000/posts/' + userId).then(function(response) {
      return response.text();
    }).then(function(text) {
        text = JSON.parse(text);
        document.getElementById('Company').value = text.Company;
        document.getElementById('Username').value = text.Username;
        document.getElementById('Email').value = text.Email;
        document.getElementById('First name').value = text.FirstName;
        document.getElementById('Last name').value = text.LastName;
        document.getElementById('City').value = text.City;
        document.getElementById('Country').value = text.Country;
        document.getElementById('Password').value = text.Password;
        document.getElementById('Postal code').value = text.PostalCode;
        document.getElementById('About me').value = text.AboutMe;
      });  
    }   
}

function putData() {
  fetch('http://localhost:3000/posts/' + userId,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body:  JSON.stringify({
        Company:document.getElementById('Company').value,
        Username:document.getElementById('Username').value,
        Email:document.getElementById('Email').value,
        FirstName:document.getElementById('First name').value,
        LastName:document.getElementById('Last name').value,
        City:document.getElementById('City').value,
        Country:document.getElementById('Country').value,
        Password:document.getElementById('Password').value,
        PostalCode:document.getElementById('Postal code').value,
        AboutMe:document.getElementById('About me').value,
      }),
    })
}

function signIn() {
  let userName = document.getElementById('Username').value;
  let pass = document.getElementById('Password').value;
  dataBase.forEach(item => {
    if (userName == item.Username && pass == item.Password) {
      getTabContent('#userprofile');
      userId = item.id;
      fetch('http://localhost:3000/posts/' + userId).then(function(response) {
        return response.text();
      }).then(function(text) {
          text = JSON.parse(text);
          document.getElementById('Company').value = text.Company;
          document.getElementById('Username').value = text.Username;
          document.getElementById('Email').value = text.Email;
          document.getElementById('First name').value = text.FirstName;
          document.getElementById('Last name').value = text.LastName;
          document.getElementById('City').value = text.City;
          document.getElementById('Country').value = text.Country;
          document.getElementById('Password').value = text.Password;
          document.getElementById('Postal code').value = text.PostalCode;
          document.getElementById('About me').value = text.AboutMe;
        });
      }
    })   
}