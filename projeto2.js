let UserName = getFirstName("Marcos vinicius", " ")
console.log(UserName)
UserName = getFirstName("Ceila-DIas", "-");
console.log(UserName)
function getFirstName(name,splitChar){
let firstName = name.split(splitChar)[0]
return firstName;
}
