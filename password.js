console.log('welcome to the password validator tool!')
console.log('enter a password to validate')

function passwordValidator(password){
    if(password.length >= 10){
        console.log('Success')
    } else {
        console.log('failure')
    }
}

passwordValidator("fjdksjdiejd")