document.getElementById("form").addEventListener("submit",()=>{
    const password = document.getElementById("password")
    const confirm = document.getElementById("confirm-password")

    if(password.value === confirm.value) alert("registered")
    else alert("password not confirm")
})