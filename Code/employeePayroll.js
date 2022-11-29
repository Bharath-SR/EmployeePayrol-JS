window.onload = function () {
    const formEl=document.forms.contact;

    // normal method

    // const fullName=formEl.elements.name;
    // console.log(fullName.placeholder);

    // onjcet destructing

    const {name,profile,gender,hr,sales,finance,engineer,others,salary,Day,Month,Year,Notes } =formEl.elements;

    console.log(name,profile,gender,hr,sales,finance,engineer,others,salary,Day,Month,Year,Notes);


}