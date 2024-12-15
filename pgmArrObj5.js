var weatherData=[
    {district:'Thrissure',temperature:32},
    {district:'Palakkad',temperature:45},
    {district:'Ernakulam',temperature:30},
    {district:'Kottayam',temperature:31},
    {district:'Thrissure',temperature:29},
    {district:'Palakkad',temperature:40},
    {district:'Ernakulam',temperature:32},
    {district:'Kottayam',temperature:33},
    
]
//print each district with highest temperature
//o/p { Thrissure: 32, Palakkad: 45, Ernakulam: 32, Kottayam: 33 }

let wd={}

for(let data of weatherData)
{
    let district=data.district
    let currentTemp=data.temperature

    if(district in wd)
    {
        let oldTemp=wd[district];

        if(oldTemp<currentTemp)
        {
            wd[district]=currentTemp
        }

    }else{
        wd[district]=currentTemp
    }
    
}
console.log(wd);


