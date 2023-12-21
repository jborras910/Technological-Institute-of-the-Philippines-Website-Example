const button = document.querySelectorAll('.btn');
const content = document.querySelectorAll('.content');

button.forEach(item => item.addEventListener('click', selectItem));

function selectItem(e) {
    removeActive()
    if (e.target.classList.contains('tab-1')) {
        var Content = document.getElementById("tab-1-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('tab-2')) {

        var Content = document.getElementById("tab-2-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');
    } else if (e.target.classList.contains('tab-3')) {

        var Content = document.getElementById("tab-3-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');
    } else if (e.target.classList.contains('tab-4')) {

        var Content = document.getElementById("tab-4-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');
    } else if (e.target.classList.contains('tab-5')) {

        var Content = document.getElementById("tab-5-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');
    } else if (e.target.classList.contains('tab-6')) {

        var Content = document.getElementById("tab-6-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');
    } else if (e.target.classList.contains('tab-7')) {

        var Content = document.getElementById("tab-7-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');
    }
    this.classList.add('active');
}

function removeActive() {
    button.forEach(item => item.classList.remove('active'))

}