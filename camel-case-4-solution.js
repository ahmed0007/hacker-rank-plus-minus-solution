function processData(input) {
    //Enter your code here
    let splits = input.split(/\r\n/); 
    splits.forEach((singleInput) => {
        console.log( processInput(singleInput) );
    });
    
    
}

function processInput(input){
    
    input = input.trim();
    let action = input[0];
    let type   = input[2];
    let sensitizedInput = input.substr(4, (input.length) -1);
    
    if( action == "S"){
        
        if( type == "M"){
            // S;M;plasticCup() => plastic cup ==> DONE
            sensitizedInput = sensitizedInput.substr(0, (sensitizedInput.length) -2); 
            sensitizedInput = sensitizedInput.replace(/([A-Z])/g, " $1").toLowerCase().trim();
        }
        if( type == "C"){
            // S;C;LargeSoftwareBook => large software book 
            sensitizedInput = sensitizedInput.replace(/([A-Z])/g, " $1").toLowerCase().trim();
        } 
        if( type == "V"){
            // S;V;pictureFrame => picture frame
            sensitizedInput = sensitizedInput.replace(/([A-Z])/g, " $1").toLowerCase().trim();
        }
            
    }else if( action == "C"){
        
        // C;C;coffee machine => CoffeeMachine
        // C;M;white sheet of paper => whiteSheetOfPaper()
        let space = -1;    
        while( space =  sensitizedInput.indexOf(' ')){
            if (space<0) break;
            sensitizedInput = sensitizedInput.substr(0, space) 
                                + sensitizedInput[space+1].toUpperCase() 
                                + sensitizedInput.substr(space+2, (sensitizedInput.length) -1);
        }
        
        if( type == "M"){    
            sensitizedInput = sensitizedInput + "()";
        }
        
        if( type == "C"){
            sensitizedInput = sensitizedInput[0].toUpperCase() + sensitizedInput.substr(1, (sensitizedInput.length) -1);
        }
        
        if( type == "V"){
        }
    }
    
    return sensitizedInput;
}

 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
