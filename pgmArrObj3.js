var movies=[
    {movieName:'Drishyam',hero:'Mohan Lal',heroine:'Meena',releaseYear:2013},
    {movieName:'Rajamanikam',hero:'Mammotty',heroine:'Padma Priya',releaseYear:2007},
    {movieName:'Neru',hero:'Mohan Lal',heroine:'Anaswera',releaseYear:2023},
    {movieName:'RDX',hero:'pepe',heroine:'Mahima',releaseYear:2024},
    {movieName:'Guruvayour Ambalanadyil',hero:'prthiwaraj',heroine:'Anaswera',releaseYear:2024},
    {movieName:'Kathal',hero:'Mammotty',heroine:'Jothika',releaseYear:2023},
]

//questions

// 1, Return an Array with movie name with hero mohan lal
// 2, Return an Array with movie name with hero Mammotty
// 3, sort the movies object with relece relece year
// 4, Return an Array with movie name with heroine anaswra

// 1
var res1=[]
movies.forEach((movie)=>{
    if(movie.hero=='Mohan Lal')
    {
        res1.push(movie.movieName)
    }
})
console.log("movie name with hero mohan lal is ",res1);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


var res2=[]
movies.filter((ma)=>{
    if(ma.hero=='Mammotty')
    {
        res2.push(ma.movieName)
    }
})
console.log("movie name with hero Mammotty is ",res2);

console.log("............................................");

let moviesname=movies.sort((a,b)=>a.releaseYear-b.releaseYear)
console.log(moviesname);
console.log("............................................");
let res3=[];
movies.filter((ans)=>{
    if(ans.heroine=='Anaswera')
    {
        res3.push(ans.movieName)
    }
})
console.log("movie name with heroine Anaswera is ",res3);

