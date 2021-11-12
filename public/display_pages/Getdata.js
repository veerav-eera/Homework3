const baseUrl =  window.location.protocol + "//" + window.location.host;

var email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
var username_regex = /^[A-Za-z]+$/
function createuser() {
    console.log("hello")
    //disable the add user button
    document.getElementById("createuser").disabled = true;
    //get the username entered by the user
    var username1 = document.getElementById('name').value;
    //
    var password1 = document.getElementById('password').value;
    var Email1 = document.getElementById('Email').value;
    if (password_regex.test(password1) && email_regex.test(Email1) && (username1 != "" || null) && username_regex.test(username1)) {
        axios.post(baseUrl+`/user2`, {
            username: username1,
            password: password1,
            email: Email1
        },
        )
            .then(function (response) {
                document.getElementById("createuser").disabled = false;
                if (response.status == 200) {
                    location.reload();
                } else if (response.status == 404) {
                    alert("values entered are incomplete");
                }
                else if (response.status == 500) {
                    alert(responce.error);
                } else {
                    console.dir(response)
                }
            })
            .catch(function (response) {
                console.dir(response);
            });
    } else {
        document.getElementById("createuser").disabled = false;
        if (!password_regex.test(password1)) {
            alert("enter password properly")
        } else if (!email_regex.test(Email1)) {
            alert("enter email properly")
        } else if (!username_regex.test(username1)) {
            alert("enter username properly")
        }
    }
}
//}
function fetchusers() {
    fetch(baseUrl+`/api/allitems`)
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

                            <option value="${loanitem.accountholdername}">${loanitem.accountholdername}</option>
                            
                            `;
                $("#Available_items").append(postHtml);
            });
        })
        .catch(function (response) {
            console.dir(response);
        });
}
