// You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

// Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

// You will always get at least a photo and all pics will be in the format YYYY.imgN

// Examples:

// sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
// sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]

// function sortPhotos(pics) {
//     console.log(pics)
//     let sort = pics.sort((firstPic, secondPic) => {
        
//         let firstPicYear = parseInt(firstPic.slice(0, 4))
//         let secondPicYear = parseInt(secondPic.slice(0, 4))
//         if (firstPicYear > secondPicYear) {
//             console.log("less than first year check")
//             return 1
//         } else if (firstPicYear < secondPicYear) {
//             console.log('greater than first year check')
//             return -1
//         } else {
//             // console.log('equal check')
//             // console.log("years:", firstPicYear, secondPicYear)
//             let firstImg = parseInt(firstPic.slice(8))
//             let secondImg = parseInt(secondPic.slice(8))
//             // console.log(firstImg, secondImg)
//             return firstImg > secondImg ? 1 : -1
            
//         }
//     })
    
//     console.log("sort:", sort)
//     const lastFive = sort.slice(-5)
//     console.log("last five:", lastFive)
//     let lastPhoto = lastFive.slice(lastFive.length - 1)[0];
//     const splitPhoto = lastPhoto.split('.img');
//     let finalPhoto = splitPhoto[0] + '.img' + (parseInt(splitPhoto[1])+ 1) 
//     lastFive.push(finalPhoto)
//     return lastFive
// }

function sortPhotos(pics) {

    let sort = pics.sort((firstPic, secondPic) => {
        
        let firstPicYear = parseInt(firstPic.slice(0, 4))
        let secondPicYear = parseInt(secondPic.slice(0, 4))
        if (firstPicYear > secondPicYear) {
            return 1
        } else if (firstPicYear < secondPicYear) {
            return -1
        } else {
            let firstImg = parseInt(firstPic.slice(8))
            let secondImg = parseInt(secondPic.slice(8))
            return firstImg > secondImg ? 1 : -1
            
        }
    })
    
    const lastFive = sort.slice(-5)
    let lastPhoto = lastFive.slice(lastFive.length - 1)[0];
    const splitPhoto = lastPhoto.split('.img');
    let finalPhoto = splitPhoto[0] + '.img' + (parseInt(splitPhoto[1])+ 1) 
    lastFive.push(finalPhoto)
    return lastFive
}

const firstPhotos = ["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]
const secondPHotos = ["2016.img1"]
// const testCase = ["2016.img4","2016.img5","2016.img1","2016.img3","2016.img2"]
const testCase = ["2016.img1","2013.img3","2016.img2","2015.img3","2012.img7","2016.img4","2013.img5"]
//["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
// const testCase = ["2016.img7","2016.img2","2016.img3","2015.img3","2012.img8","2016.img4","2016.img5"]
//["2016.img2","2016.img3","2016.img4","2016.img5","2016.img7","2016.img8"]



// CODEWARS SOLUTION
// function sortPhotos(pics) {
//     pics = pics.map(s => s.split('.img'))
//             .sort((a, b) => +a[0] - b[0] || +a[1]-b[1])
//             .slice(-5)
//     let [last, n] = pics[pics.length - 1]
//     pics.push([last, +n+1])
//     return pics
    
    

// }

console.log(sortPhotos(testCase))
// sortPhotos(testCase)




