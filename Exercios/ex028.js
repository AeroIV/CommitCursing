function filtrarString(array){
    return array.filter(function(string){
        return string.length > 5;
    })
}

const string = ["barco","elo" ,"Par" ,"jicuraru", "jiboia", "januario", "avon", "SonimBlaybe", "SinimCleyNhim", "SonimVeltom"]
console.log(filtrarString(string))