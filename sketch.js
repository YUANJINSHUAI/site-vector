async function getData(){
    const api_url = "https://yjspersonal-website-back.herokuapp.com/test";
    // {
    //     "aa":"bb",
    //     "foo":"hello json",
    //     "key":"value"
    // }
    const response = await fetch(api_url);
    const data = await response.json();
    console.log( data);

    const {aa, foo} = data;
    console.log(aa);
    console.log(foo);
    document.getElementById('a').textContent = aa;
    document.getElementById('b').textContent = foo;
    console.log(data);
}
getData();