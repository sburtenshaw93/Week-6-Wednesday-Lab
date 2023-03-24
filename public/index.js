const btn = document.querySelector('button');

const clickHandler = (event) => {
    event.preventDefault();
    const messages = [
        'The worst thing about prison was the dementors.', 
        'Im not superstitious but I am a little stitious.', 
        'Mmm. Sort of an oaky afterbirth.', 
        'I declare bankruptcy!', 
        'Friends joke with one another. Hey, you are poor. Hey, your mommas dead. Thats what friends do.', 
        'Thats what she said!'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length - 1);
    const randomMessage = messages[randomIndex];
    alert(randomMessage);
    
}

btn.addEventListener('click', clickHandler);

const uselessBtn = document.getElementById('uselessbutton');
const uselessClick = () => alert('this button does nothing, its upset about it.');
uselessBtn.addEventListener('click', uselessClick);


const quoteButton = document.getElementById('quotebutton');
const quoteInput = document.getElementById('quoteentry');
const quoteClick = (event) => {
    event.preventDefault();
    axios
        .post('http://localhost:4000/api/quote', { michaelScottQuotes: quoteInput.value })
        .then(res => {
            const list = document.getElementById('quoteList');
            const listItem = document.createElement('li')
            listItem.innerHTML=res.data[0]
            list.appendChild(listItem)
        })
        .catch(error => console.log(error));
}
quoteButton.addEventListener('click', quoteClick);