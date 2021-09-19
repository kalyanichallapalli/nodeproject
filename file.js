// TO PERFORM FILE OPERATIONS IN NODEJS WE WILL USE 'FS' MODULE

// to create and insert data in to the file
   const fs = require('fs')
/* fs.writeFile('input.txt', 'welcome to my first nodejs file', (data) =>  {
    console.log('data inserted in the file')
})  */

// to read file 

/* fs.readFile('input.txt', (err, data) => {  
    if(err) throw err;

    console.log((data).toString());
}) */

// to delect file 
   /* fs.unlink('input.txt', (err)=> {  

    console.log('file deleted');
})
 */


// add data to the exesting file 

/* fs.appendFile('input.txt', '   data to append', (err) =>{
    if(err) throw err;
    console.log('data appended')
})
 */

// to rename a file

fs.rename('input.txt', ' newfile.txt', (err) =>{
    if(err) throw err;
    console.log('file name changed')
})
