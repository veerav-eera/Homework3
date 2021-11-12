const baseUrl = 'http://localhost:8082';

var email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
var username_regex = /^[A-Za-z]+$/
function createuser() {
    //disable the add user button
    document.getElementById("createuser").disabled = true;
    //get the username entered by the user
    var username1 = document.getElementById('name').value;
    //
    var password1 = document.getElementById('password').value;
    var Email1 = document.getElementById('Email').value;
    create_user(username1,password1,Email1);
}
//}
function fetchusers() {
    fetch(`http://localhost:8082/api/allitems`)
        .then(function (response) {
            //change to json
            //.json ,. text ,.blob
            return response.json()
        })
        .then(function (response) {
            console.log(response);
            //since we changed it to json no need to use the .data
            const item = response;
            item.forEach((loanitem) => {
                const postHtml = `

                            <option value="${loanitem.Accountholdername}">${loanitem.Accountholdername}</option>
                            
                            `;
                $("#Available_items").append(postHtml);
            });
        })
        .catch(function (response) {
            console.dir(response);
        });
}
