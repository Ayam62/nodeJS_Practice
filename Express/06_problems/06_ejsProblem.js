/*
You have to write a Node. js program to clear clutter inside of a directory and organize the
contents of that directory
into different folders
for example, these files become:
1. Name. jpg
2.Name. png
3. this. pdf
4. harry. zip
5. Rohan. zip
6. cat. jpg

after solving: jpg/Name.jpg png/Name.png   pdf/this.pdf
*/
import fs from "fs/promises"
import fsn from "fs"
import path from "path"


let files= await fs.readdir("/Users/ayamkattel/Desktop/Backend/My Backend/Node/Express/06_problems/")
console.log(files)

// for (const item of files) {
//     console.log(item)
// }
// var oldPath = 'old/path/file.txt'
// var newPath = 'new/path/file.txt'

// fs.rename(oldPath, newPath, function (err) {
//   if (err) throw err
//   console.log('Successfully renamed - AKA moved!')
// })
let oldpath="/Users/ayamkattel/Desktop/Backend/My Backend/Node/Express/06_problems/"

files.forEach(element => {
    console.log(element)
   let ext= element.split(".")[1]
   if(fsn.existsSync(path.join(oldpath,ext))){
    let newpath="/Users/ayamkattel/Desktop/Backend/My Backend/Node/Express/06_problems/"+ext
    fs.rename(path.join(oldpath,item),path.join(oldpath,ext,path),function(err){
        if(err) throw err
        console.log('Successfully  moved!')
    })
   }
   else{
    fs.mkdir(ext)
    
   }
   console.log(ext)

});