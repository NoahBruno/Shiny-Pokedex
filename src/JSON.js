let url = PRIVATE_KEY;



function getJson() {
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            console.log(movies);

        });
}

document.getElementById('submit').addEventListener("click", function (e) {
    e.preventDefault()
    let data = addType();
    addTypesToJSON(data);
})


let addType = (id) => {

    let type = document.getElementById("type").value,
        strong = document.getElementById("strong").value,
        weak = document.getElementById("weak").value,
        resist = document.getElementById('resist').value,
        vunerable = document.getElementById('vone').value;

    let vArr = vunerable.split(', ');
    let resistArr = resist.split(', ')
    let strongArr = strong.split(', ');
    let weakArr = weak.split(', ');
    id++;

    let data = {
        type: type,
        strong: strongArr,
        weak: weakArr,
        Resistant: resistArr,
        Vulnerable: vArr,
        id: id,
    }
    return data;
}

function addTypesToJSON(data) {
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), })
            .then(response => response.json()).then(() => getJson())
}
getJson();

