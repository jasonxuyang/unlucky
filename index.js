const validUsers = [
    'jason', 
    'singer', 
    'yasmine', 
    'jackson c',
    'xiao',
    'beverly',
    'phoebe',
    'kd',
    'coltrain',
    'jackson l',
    'karis'
];
const unchosen = [...validUsers];
const chosen = [];
const body = document.querySelector('#body-container');

const cleanup = element => {
    element.remove();
}

const init = () => {
    const nameInput = document.querySelector('#name');
    const getName = event => {
        if (event.code === 'Enter') {
            if (validUsers.includes(nameInput.value)) {
                cleanup(nameInput);
                document.removeEventListener('keyup', getName);
                login(nameInput.value);
            }
        }
    }
    document.addEventListener('keyup', getName);
}

const login = () => {
    body.innerHTML = `<button id='button'>who's unlucky today?</button>`;
    document.querySelector('#button').addEventListener('click', chooseUser);
}

const chooseUser = event => {
    if (unchosen.length > 0) {
        const die = Math.floor(Math.random() * unchosen.length);
        let unluckyPerson = unchosen.splice(die, 1);
        chosen.push(unluckyPerson[0]);
        console.log(chosen.toString());
        if (!body.contains(document.querySelector('#text'))) {
            body.insertAdjacentHTML('afterbegin', `<p id='text'>sorry ${unluckyPerson}...`)
        } else {
            document.querySelector('#text').textContent = `${unluckyPerson}`
        }
        event.target.textContent = `who's next?`;
    } else {
        cleanup(event.target);
        document.querySelector('#text').textContent = `that's it for today.`
    }
}

init();