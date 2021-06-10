const $weatherForm = document.forms.weatherForm
const $resultDiv = document.querySelector('#result')
const $btn = document.querySelector('#btn')
const cityArr = ['Tokyo',
  'Jakarta',
  'Delhi',
  'Mumbai',
  'Manila',
  'Shanghai',
  'São Paulo',
  'Seoul',
  'Mexico City',
  'Guangzhou',
  'Beijing',
  'Cairo',
  'New York',
  'Kolkāta',
  'Moscow',
  'Bangkok',
  'Buenos Aires',
  'Shenzhen',
  'Dhaka',
  'Lagos',
  'Istanbul',
  'Osaka',
  'Karachi',
  'Bangalore',
  'Tehran',
  'Kinshasa',
  'Ho Chi Minh City',
  'Los Angeles',
  'Rio de Janeiro',
  'Nanyang',
  'Chennai',
  'Chengdu',
  'Lahore',
  'Paris',
  'London',
  'Linyi',
  'Tianjin',
  'Shijiazhuang',
  'Baoding',
  'Zhoukou',
  'Lima',
  'Hyderābād',
  'Bogotá',
  'Weifang',
  'Nagoya',
  'Wuhan',
  'Heze',
  'Ganzhou',
  'Tongshan',
  'Chicago',
  'Handan',
  'Luanda',
  'Fuyang',
  'Kuala Lumpur',
  'Jining',
  'Dongguan',
  'Hanoi',
  'Pune',
  'Chongqing',
  'Changchun',
  'Zhumadian',
  'Ningbo',
  'Onitsha',
  'Nanjing',
  'Hefei',
  'Ahmadabad',
  'Hong Kong',
  'Khartoum',
  'Nantong',
  'Yancheng',
  'Foshan',
  'Nanning',
  'Hengyang',
  'Xi’an',
  'Shenyang',
  'Tangshan',
  'Shaoyang',
  'Changsha',
  'Santiago',
  'Zhengzhou',
  'Zhanjiang',
  'Riyadh',
  'Cangzhou',
  'Dar es Salaam',
  'Maoming',
  'Huanggang',
  'Xinyang',
  'Shangrao',
  'Luoyang',
  'Bijie',
  'Yantai',
  'Quanzhou',
  'Hangzhou',
  'Miami',
  'Kunming',
  'Nanchong',
  'Zunyi',
  'Lu’an',
  'Yichun',
  ]

if ($btn) {
  $btn.addEventListener('click', async (e) => {
    const randomCity = cityArr[Math.floor(Math.random() * cityArr.length)]
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=a1001e2389408a4b3d25aaa7a5bda568`)
    if (response.status === 200) {
      const serverData = await response.json()
      const temp = Math.round(serverData.main.temp - 273.15)
      const wind = Math.round(serverData.wind.speed)
      $resultDiv.innerHTML = 
        `
        <p>Город: ${serverData.name}</p>
        <p>Температура: ${temp}°C</p>
        <p>Облачность: ${serverData.clouds.all}%</p>
        <p>Ветер: ${wind} м/с</p>
      `
    }
    else {
      $resultDiv.innerHTML = 
        `
      <p>Упс! Ошибочка вышла</p>
      `
    }
  })
}

if ($weatherForm) {
  $weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=a1001e2389408a4b3d25aaa7a5bda568`)
    if (response.status === 200) {
      const serverData = await response.json()
      const temp = Math.round(serverData.main.temp - 273.15)
      $resultDiv.innerHTML = 
        `
        <p>Город: ${serverData.name}</p>
        <p>Температура: ${temp}°C</p>
        <p>Облачность: ${serverData.clouds.all}%</p>
        <p>Ветер: ${serverData.wind.speed} м/с</p>
      `
    }
    else {
      $resultDiv.innerHTML = 
        `
      <p>Упс! Ошибочка вышла</p>
      `
    }
  })
}

