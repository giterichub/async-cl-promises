const createImage = function(imgPath){
    return new Promise(function(resolve, reject){
        const createdImgElement = document.createElement('img');
        
        createdImgElement.addEventListener('load', function(){
            document.body.appendChild(createdImgElement);
            createdImgElement.classList.add("images")
            resolve(createdImgElement);
        })
        createdImgElement.addEventListener('error', function(){
            reject(new Error('Failed to load image at ' + imgPath));
        })
        createdImgElement.src = imgPath;
    })
};

// (async function(){
//     try{
//         const loadedImage = await createImage('https://images.unsplash.com/photo-1710078964187-439431f006b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
//         await wait(2);
//         loadedImage.style.display = "none";
//         const loadedImage2 = await createImage('imgwall.jpg');
//         await wait(2);
//         loadedImage2.style.display = "none";
//     }catch(err){
//     console.error(err);
// }
// })();
// [createImage("imgwall.jpg"),
//     createImage("wall2img.jpg")
// ]
const loadAll = async function(imgArr){
    // const imgs = imgArr.map((imgArrItems) => createImage(imgArrItems))
    const imgs = await Promise.all(imgArr.map(async imgArrItems => await createImage(imgArrItems)));
console.log(imgs);
};
loadAll(["imgwall.jpg", "wall2img.jpg"]);

// let currentImage;
// createImage('https://images.unsplash.com/photo-1710078964187-439431f006b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
// .then(response => {
//     currentImage = response;
//     return wait(2);
// })
// .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('imgwall.jpg');
// })
// .then(response => {
//     currentImage = response;
//     return wait(2);
// })
// .then(() => {
//     currentImage.style.display = 'none';
// })
// .catch(err => {
//     console.error(err);
// })

const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000);
    })
}