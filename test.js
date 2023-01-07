document.getElementById('button').addEventListener('click', function Test(event){
    let test = document.getElementById('test');
    let type = document.getElementById('type');

    test.innerHTML = event.target.value;
    type.innerHTML = event.type;
});

function Testing(e){
    let name = document.getElementById('name1');
    let name2 = document.getElementById('name2');
    name.innerHTML = e.target.value;
    name2.innerHTML = e.target.innerHTML;
}