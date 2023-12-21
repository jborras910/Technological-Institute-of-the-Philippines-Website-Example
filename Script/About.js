const button = document.querySelectorAll('.btn');
const content = document.querySelectorAll('.content');


button.forEach(item => item.addEventListener('click', selectItem));



function selectItem(e) {

    removeActive();

    if (e.target.classList.contains('G-I')) {
        var Content = document.getElementById("tab-1-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('A-P')) {

        var Content = document.getElementById("tab-2-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('V-M')) {

        var Content = document.getElementById("tab-3-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('A-L')) {

        var Content = document.getElementById("tab-4-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('Q-L')) {

        var Content = document.getElementById("tab-5-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('C-V')) {

        var Content = document.getElementById("tab-6-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('C-C')) {

        var Content = document.getElementById("tab-7-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('G-A')) {

        var Content = document.getElementById("tab-8-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('OB-E')) {

        var Content = document.getElementById("tab-9-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('AC-P')) {

        var Content = document.getElementById("tab-10-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('HT-FS')) {

        var Content = document.getElementById("tab-11-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    } else if (e.target.classList.contains('AD')) {

        var Content = document.getElementById("tab-12-content");
        content.forEach(item => item.classList.remove('show'))
        Content.classList.add('show');

    }

    this.classList.add('active');
}

const removeActive = () => button.forEach(item => item.classList.remove('active'));