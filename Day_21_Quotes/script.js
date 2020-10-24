let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];


fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
    "method": "GET",
	"headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "539723036emshd5c6592eea05863p14b455jsn5baa277e4d5c"
	}
})
.then(res => res.json())
.then(quotes => {
    const node = document.createElement('p');
    node.innerText = quotes.content;
    body.appendChild(node);
})
.catch(err => console.log('Dear user, seems like we have a little trouble getting your quotes.', err));