const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');

console.log('Welcome to password validator');

const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)

readline.question('what password would you like to validate?', password => {
    String(password);
    if(password.length >= 10){
        HTMLFormControlsCollection.log('Congrats!');
        readline.close();
    } else {
        console.log("failed, try again");
        readline.question('what password would you like to validate?', password => {
            String(password);
            if(password.length >= 10){
                console.log('congrats!');
                readline.close();
            } else {
                console.log('failed again, you suck');
                readline.close();
            }
        })
    }
})