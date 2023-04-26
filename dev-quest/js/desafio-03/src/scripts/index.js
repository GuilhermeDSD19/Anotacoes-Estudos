var form = document.querySelector('form');
var inputs = form.querySelectorAll('input, textarea');

console.log(inputs);

inputs.forEach(function(input) {
    input.addEventListener('change', function (event) {
        console.log("TESTE");
    });
})


