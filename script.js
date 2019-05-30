let para = document.getElementsByTagName('p');
let nbrPara = para.length;
document.getElementById('count').textContent = nbrPara;

console.log('nombre de paragraphes est de : ' + nbrPara);


let trash = document.getElementsByClassName('trash');

for (let i = 0; i < trash.length; i++) {

    trash[i].addEventListener('click', function() {

        this.parentNode.remove();

        let para = document.getElementsByTagName('p');
        let nbrPara = para.length;
        document.getElementById('count').textContent = nbrPara;
    });
}