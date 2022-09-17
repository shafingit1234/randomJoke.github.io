// const image = document.querySelector('img');
const JokeDiv = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');
button.addEventListener('click', function () {
    getRandomJoke();
});
function getRandomJoke()
{
    const ajax = new XMLHttpRequest();
    const url = 'https://api.chucknorris.io/jokes/random';
    ajax.open('GET', url, true);
    ajax.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            //some random code
            //console.log(this.responseText);
            let data = JSON.parse(this.responseText)//will extract values from this.responseText
            JokeDiv.innerHTML = `${data.value}`;
        }
        else {
            this.onerror = this.onerror();//is result is not fetched
        }
    }
    ajax.send();
}
function onerror()
{
    JokeDiv.innerHTML = 'There was an error';
}