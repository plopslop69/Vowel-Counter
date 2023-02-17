function fetchWord(){
    let input = document.getElementById("word").value;
    console.log("Input: "  + '"' +  input + '"');
    console.log("Input length: " + input.length);
    vowelCount(input);
}

function vowelCount(word){
    let count = 0;
    let nCount = 0;
    word = word.toUpperCase();
    for(let i = 0; i < word.length; i++){
        if (word[i] == 'A' | word[i] == 'E' | word[i] == 'I'| word[i] == 'O' | word[i] == 'U'){
            count++;
        }else{
            nCount++;
        }
    }
    console.log("Vowel Count: " + count);
    console.log("Non-vowel Count: " + nCount);
    document.getElementById("result").innerHTML = count;
}

function toUpperCase(txt){
    for(let i = 0; i < txt.length; i++){
        if (97 <= word[i] <= 122){
            word[i] -= 32;
        }
    }
}

 // We use .value to get the value in the text field
// we can also set default value on the text field by specitfying value =" " in the input tag itself

document.getElementById("word").addEventListener("keypress", function textFieldEnter(keyboardEvent){
    // event.preventDefault(); 
    // This line prevents the default from happening, eg it doesn't trigger keypress when randomany keys are pressed, which would've been the default case

    // if (event1.keyCode == 13){ // Keycode of enter key is 13
    //     fetchWord(); // keyCode is deprecated as it brings problems apparently
    // }

    if (keyboardEvent.code == "Enter"){ // Enter key code is "Enter"
        fetchWord();
    }
});
    

