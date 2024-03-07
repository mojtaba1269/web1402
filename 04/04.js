let fs = require('fs');
const { argv } = require('process');
let command = process.argv[2];


let commands = {
   readFile:function(){
    let name= process.argv[3];
    fs.readFile('database.json', {encoding: 'utf8'}, function(err){
        if(err){
            console.log('ERR: ', err);
        }
        else {
            fileData = JSON.parse(fileData);
            
            

            for (let i =0; i<records.lenght;i++)
            {
                if(fileData[i]=name)
                {

                }
                else{
                    console.log("not found");
                }
                

            }

            console.log(fileData);
            /*fileData = JSON.stringify(fileData);
            console.log(fileData);
        */
        }
    });


   },
    createRecord: function(){
        let data = {
            name: process.argv[3],
            family: process.argv[4],
            email: process.argv[5]
        }

        fs.readFile('database.json', {encoding: 'utf8'}, function(err, fileData){
            if(err){
                console.log('ERR: ', err);
            }
            else {
                fileData = JSON.parse(fileData);
                fileData.records.push(data);
                fileData = JSON.stringify(fileData);
                fs.writeFile('database.json', fileData, fsCallback);
            }
        });
    }
}
commands[command]();
function fsCallback(err){
    let messages ={
      
        createRecord:  'createRecord done successfully.'
    }

    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log(messages[command])
    }
}