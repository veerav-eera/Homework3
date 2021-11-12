function create_user(username1,password1,Email1){
    if (password_regex.test(password1) && email_regex.test(Email1) && (username1 != "" || null) && username_regex.test(username1)) {
        axios.post("http://localhost:8082/user2", {
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