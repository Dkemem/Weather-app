let input=document.querySelector(".card-header input");
inputvalue=input.value;
let city=document.querySelector(".city");
let btn=document.querySelector(".btn");
let humidity=document.querySelector(".elem1 p");
let WindSpeed=document.querySelector(".elem2 p");
let FeelsLike=document.querySelector(".elem3 p");
let WindDegrees=document.querySelector(".elem4 p");
let CloudPct=document.querySelector(".elem5 p");
let MaxTemp=document.querySelector(".elem6 p");


// Call the asynchronous function
btn.addEventListener("click",()=>{
   inputvalue=input.value;
   let temperature=document.querySelector(".temp");
   city.innerHTML="LOADING..";
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputvalue}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '380be63781msheb48d4e2a96cedcp1e8cdbjsn396ab47a82a4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    city.innerHTML=inputvalue+" weather";
    humidity.innerHTML=result.humidity;
    MaxTemp.innerHTML=result.max_temp+"&deg";
    CloudPct.innerHTML=result.cloud_pct;
    FeelsLike.innerHTML=result.feels_like+"&deg";
    WindSpeed.innerHTML=result.wind_speed;
    WindDegrees.innerHTML=result.wind_degrees;
    temperature.innerHTML=result.temp+"&deg";
  } catch (error) {
    console.error(error);
  }
}
fetchData();
})


