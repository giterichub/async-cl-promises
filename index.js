const createImage = function(imgPath){
    return new Promise(function(resolve, reject){
        const createdImgElement = document.createElement('img');
        
        createdImgElement.addEventListener('load', function(){
            document.body.appendChild(createdImgElement);
            resolve(createdImgElement);
        })
        createdImgElement.addEventListener('error', function(){
            reject(new Error('Failed to load image at ' + imgPath));
        })
        createdImgElement.src = imgPath;
        // createdImgElement.onerror = function(err){
        //     reject(err);
        // }
    })
}
createImage('https://images.unsplash.com/photo-1710078964187-439431f006b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
.then(response => {
    wait(2).then(()=>{
        response.style.display = "none";
        return createImage('imgwall.jpg');
    })
    .then(()=>{
        return wait(2);
    })
    .then(()=>{
        document.body.style.display = "none";
    })
    
})

.catch(err => {
    console.error(err);
})

const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000);
    })
}





// createImage = function(imgPath){
//         const createdImgElement = document.createElement('img');
//         createdImgElement.src = imgPath;
//         createdImgElement.addEventListener('load', function(){
//             document.body.appendChild(createdImgElement);
//         })
// }
// createImage('imgwall.jpg')