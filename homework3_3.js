
function peopleFethcherUsingThen(){
    fetch('https://swapi.co/api/people')
    .then(response=>response.json())
    .then(value=>value.results.forEach(element => {
        console.log(element.name +" "+element.height+" "+element.gender);
    }))
    .catch(error=>console.log(error)); 
}


async function peopleFetcheUsingAsyncAwait(){
    const firstpromis = fetch('https://swapi.co/api/people');
    const secondpromis = await firstpromis;
    const thirdpromis = await secondpromis.json()
    thirdpromis.results.forEach(element => {
        console.log(element.name +" "+element.height+" "+element.gender);
    });
}
peopleFetcheUsingAsyncAwait()