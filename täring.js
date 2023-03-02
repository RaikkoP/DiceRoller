function veereta() {
    let kordade_arv = document.getElementById("täringud").value;
    if (Number(kordade_arv) > 0) {
        let visked = [];
        let i = 0
        while (i < kordade_arv){
            visked.push(Math.floor(Math.random() * 6) + 1);
            i += 1;
        }
        document.getElementById("tulemus").innerHTML =  `Visked olid järgmised = ${visked}`;
    }
}