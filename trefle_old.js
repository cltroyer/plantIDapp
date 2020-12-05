document.getElementById('fetchUserDataBtn').addEventListener("click", fetchUserData());

function fetchUserData() {
   fetch("https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=Mih8MBbsAIgV4g2QNvXAPdgY-WuR_nkV7ffEt91SB2c")
     .then(response => response.json())
     .then(users => {
       let output = '<h2>List of Users</h2>';
       output += '<ul>';
       users.forEach(function(data) {
         output += `
            <li>
               ${data.data}
            </li>
          `;
     });
     output += '</ul>';
    document.getElementById("response").innerHTML = output;
});
}
