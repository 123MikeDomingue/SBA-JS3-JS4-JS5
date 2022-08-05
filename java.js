






class Person{

constructor(firstName, lastName, age){

this._firstName = firstName;

this._lastName = lastName;

this._age= age


}

get firstName(){
  return this._firstName
}

get lastName (){
  return this._lastName
}

get age () {
  return this._age
}

}



function newObjectCreated(firstName, lastsName, age){

  let FirstName = (document.getElementById('firstName'))
  let LastsName = new Person (document.getElementById('lastName'))
  let Age =   new Person(document.getElementById('age'))
 

alert(`Hello, ${FirstName} ${lastName} ! You are ${Age} Years old`)



}
FirstName.addEventListener('click',newObjectCreated)
LastName.addEventListener('click',newObjectCreated)
Age.addEventListener('click',newObjectCreated)