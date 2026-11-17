const { log } = require('console');
const express = require('express');
const { engine } = require('express-handlebars');
const { resolve } = require('path');
const app = express();
const path = require('path');
const i18n = require('i18n');

// Configure Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.engine('hbs', engine({
  //defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: 'views/partials/' // Explicitly define partials directory
}));

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'views')));

i18n.configure({
  locales: ['en', 'ms', 'id'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  queryParameter: 'lang', // Allows switching via ?lang=es
  autoReload: true
});

// Route
app.get('/', (req, res) => {
    
    // const _res = getJsonData("http://localhost:9001/assets/contents/index.json")
    // .then((_data)=> {
    //    console.log(_data);
       res.render('index', {
        title: "Hadith Learning"    
       });
          
    // })
    
});
app.get('/courses', (req, res) => {
    
    res.render('courses', {
      title: 'Courses | Hadith Learning'   
    });
    
});
app.get('/course-detail', (req, res) => {
    
    res.render('course-detail', {
      title: 'Courses-Detail | Hadith Learning'   
    });
    
});
app.get('/library', (req, res) => {
    
    res.render('library', {
      title: 'Library | Hadith Learning'   
    });
    
});
app.get('/hadith-detail', (req, res) => {
    
    res.render('hadith-detail', {
      title: 'Hadith-Detail | Hadith Learning'   
    });
    
});

app.get('/daily-hadith', (req, res) => {
    
    res.render('daily-hadith', {
      title: 'Daily-Hadith | Hadith Learning'   
    });
    
});

app.get('/about', (req, res) => {
    
    res.render('about', {
      title: 'About | Hadith Learning'   
    });
    
});
app.get('/contact', (req, res) => {
    
    res.render('contact', {
      title: 'Contacrt | Hadith Learning'   
    });
    
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });

  // Or Return JSON for REST APIs
//   res.status(404).json({ error: 'Route not found' });
});

//functions
async function getJsonData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
    // console.log(data);
    
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
}
// Start server
app.listen(9001, () => {
    console.log('Server running at http://localhost:9001');
});
