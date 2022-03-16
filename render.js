
function render(firstName, lastName, category) {
    return ` <div class="cards">
    <div class="card">
        <span class="name-icon">${firstName.substring(0, 1)}  ${lastName.substring(0, 1)}</span>
        <p>${firstName}  ${lastName}</p>
        <span class="card-category">${category}</span>
    </div>
</div>`
}



////fetch all api for first time 
fetch('https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true')
    .then(response => response.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].fname);
            document.querySelector("#cards").insertAdjacentHTML("beforeend", render(data[i].fname, data[i].lname, data[i].category))

        }

    });



/////// when click button category
let categories = document.querySelector("#categories");

categories.addEventListener("click", function (e) {
    let category = e.target.id;
    document.querySelector("#cards").innerHTML = "";///make it empty first
    fetch(`https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22${category}%22]&pretty=true`)
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                console.log(data[i].fname);
                document.querySelector("#cards").insertAdjacentHTML("beforeend", render(data[i].fname, data[i].lname, data[i].category))

            }

        });

})
