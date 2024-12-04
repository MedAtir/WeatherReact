const API_KEY = '4dcb14784f562ea783f04292edecbc7f'
const URL = "https://api.openweathermap.org/data/3.0/forecast/daily"

// export const coordinates = (location) => `${URL}weather?q=${location}&appid=${API_KEY}`

export const weatherForecast = (loc) => `${URL}?q=${loc}&units=metric&cnt=7&appid=${API_KEY}`
