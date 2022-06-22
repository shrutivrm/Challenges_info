const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  };


document.body.style.fontFamily = 'sans-serif, helvetica';

let wrapper = document.querySelector(".wrapper");

let h1 = document.createElement('h1');
h1.innerHTML = 'Asabeneh Yetayeh Challenges in <strong>2022</strong>';
h1.style.textAlign = 'center';
h1.style.fontSize = '30px';
h1.style.fontWeight = '400';
h1.style.marginBottom = '8px';
h1.style.padding = '6px';
wrapper.appendChild(h1);

let year_text = document.querySelector('strong');
year_text.style.fontSize = '80px';


let animateColors = () => {
    let regEx = '0123456789abcdef';
    let arrOfColors = [];
    for(var i = 0; i < 6; i++){
        let arr_index = Math.floor(Math.random() * 15);
        arrOfColors.push(regEx[arr_index]);
    }
    return '#' + arrOfColors.join('');
}

setInterval(() => year_text.style.color = animateColors(), 1000);


let h3 = document.createElement('h3');
h3.textContent = '30DaysOfJavaScript Challenge';
h3.style.fontWeight = '370';
h3.style.fontSize = '20px';
h3.style.textDecoration = 'underline';
h3.style.textAlign = 'center';
h3.style.padding = '9px';
h3.style.margin = '0px';
      
wrapper.appendChild(h3);


let getDate = () => {
    let todayDate = new Date();
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let monthIndex = todayDate.getMonth();
    let year = todayDate.getFullYear();
    let date = todayDate.getDate();
    let hour = todayDate.getHours();
    let mins = todayDate.getMinutes();
    
    date = date < 10? '0'+date.toString(): date;
    hour = hour < 10? '0'+hour.toString(): hour;  
    mins = mins < 10? '0'+mins.toString():mins;
    
    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
}

let today_date = document.createElement('h4');
today_date.textContent = getDate();
today_date.style.fontSize = '18px';
today_date.style.padding = '8px';
today_date.style.margin = 'auto';
today_date.style.textAlign = 'center';
today_date.style.width = '15%';
today_date.style.fontWeight = '550';
today_date.style.marginBottom = '40px';
today_date.style.marginTop = '20px';

setInterval(() => {
today_date.style.backgroundColor = animateColors();
}, 1000);
      
wrapper.appendChild(today_date);

let data_list = document.createElement('ul');

data_list.style.listStyle = 'none';
data_list.style.width = '80%';
data_list.style.margin = 'auto';


asabenehChallenges2020.challenges.forEach(challenge => {
    let data_item = document.createElement('li');
    
    let titleSpan = document.createElement('span');
    let title = document.createTextNode(challenge.name);
    //console.log(title);
    titleSpan.appendChild(title);

    let dropdownSpan = document.createElement('span');
    let dropdown = document.createElement('details');
   

    let data_summary = document.createElement('summary');
    data_summary.textContent  = challenge.name.split(' ')[challenge.name.split(' ').length - 1];
    //console.log(data_summary);
    data_summary.style.justifyItems = 'center';
    
    let topics = document.createElement('ul');

    challenge.topics.forEach(topic => {
        let item = document.createElement('li');
        item.textContent = topic;
        topics.appendChild(item);
        //console.log(item);
        item.style.padding='5px';
        item.style.width = '90%';
        item.style.marginTop ='3px';
        item.style.marginBottom = '3px';

    })


    topics.style.listStyleType = 'none';
    topics.style.width = '80%';
    topics.style.margin = 'auto';
    

    console.log(dropdownSpan);
    dropdownSpan.appendChild(dropdown);

    let status = document.createTextNode(challenge.status);
    let statusSpan = document.createElement('span');
    statusSpan.appendChild(status);



    data_item.appendChild(titleSpan);
    dropdown.appendChild(data_summary);
    dropdown.appendChild(topics);
    data_item.appendChild(dropdownSpan);
    data_item.appendChild(statusSpan);
    data_list.appendChild(data_item);


  
    data_item.style.padding='25px';
    data_item.style.width = '90%';
    data_item.style.marginTop ='5px';
    data_item.style.marginBottom = '5px';
    data_item.style.display = 'flex';
    data_item.style.justifyContent = 'space-between';

    if(challenge.status == 'Done') {
        data_item.style.backgroundColor = '#FFAEBC';
    }
    else if(challenge.status == "Ongoing") {
        data_item.style.backgroundColor = '#9DA993';
    }
    else{
        data_item.style.backgroundColor = '#BCA88E';
    }
})


let h2head = document.createElement('h2');
h2head.textContent = asabenehChallenges2020.author.firstName + " " + asabenehChallenges2020.author.lastName; 
//console.log(typeof h2head.textContent);
h2head.style.fontSize = '40px';
h2head.style.fontWeight = '700';
h2head.style.textAlign = 'center';
h2head.style.marginTop = '50px';
h2head.style.letterSpacing = '1px';


/*let social_logo = document.createElement('div');
asabenehChallenges2020.socialLinks.forEach(logo => {
    let logos = document.createElement('div');
    logos.innerHTML = 
})
social_logo.innerHTML = asabenehChallenges2020.socialLinks.url;
social_logo.style = asabenehChallenges2020.socialLinks.fontawesomeIcon;*/

let h3content = document.createElement('h3');
h3content.textContent = asabenehChallenges2020.author.bio;
h3content.style.fontWeight = '700';
h3content.style.fontSize = '20px';
h3content.style.color = 'grey';
h3content.style.margin = '50px';
h3content.style.marginLeft = '150px';
h3content.style.marginRight = '150px';
h3content.style.lineHeight ='25px';
h3content.style.letterSpacing = '1px';
h3content.style.textAlign = 'center';



wrapper.appendChild(data_list);
document.body.appendChild(wrapper);
document.body.appendChild(h2head);
document.body.appendChild(h3content);

