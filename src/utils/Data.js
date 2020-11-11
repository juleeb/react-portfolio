import imageJulee from '../image/julee.jpeg';
import covid from '../image/covid.png';
import houseboo from '../image/house_of_boo.png';
import schedule from '../image/schedule.png';
import weather from '../image/weather.png';

export default
    {
        name :'Julee Butler',
        headerTagline: [
                        'Web Developer',
                        'from Seattle, Washington'
                    ],
        contactEmail:'gown94@gmail.com',
        abouttext: ["My name is Julee Butler.", "I am a web developer.", "I live in Seattle, Washington."],
        aboutImage: imageJulee,
        ShowAboutImage:true,
        projects:[
           {
                id: 1,
                title:'COVID-19 Dashboard',
                service:'HTML, CSS, Javascript, API',
                description: 'Application about COVID-19 informations that can be viewed easily with statistics.',
                imageSrc: covid,
                url:'https://juleeb.github.io/covid-tracker/',
                github: 'https://github.com/juleeb/covid-tracker'
            },
            {
                id: 2,
                title: 'House of Boo',
                service: 'HTML, CSS, Javascript, API, Node.js, SQL, Heroku',
                description: 'Application for virtual online Trick or Treat.',
                imageSrc: houseboo,
                url: 'https://insanecoolapp.herokuapp.com/',
                github: 'https://github.com/juleeb/house-of-boo'
            },
            { 
                id: 3,
                title: 'Weather Dashboard',
                service: 'HTML, CSS, Javascript, API',
                description: 'Application to view weather in searched city.',
                imageSrc: weather,
                url: 'https://juleeb.github.io/weather-dashboard/',
                github: 'https://github.com/juleeb/weather-dashboard'
            },
            {
                id: 4,
                title: 'Workday Scheduler',
                service: 'HTML, CSS, Javascript',
                imageSrc: schedule,
                url: 'https://juleeb.github.io/day-schedule/',
                github: 'https://github.com/juleeb/day-schedule'
           }
        ],
        websites: [
            {   name:'Github',
                url:'https://github.com/juleeb'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/julee-butler-22a46b173/'
            }
        ]
    }