const Person = function(firstAndLast) {
    let name = firstAndLast;
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFirstName= function(){
      return name.split(' ')[0];
    }
    this.getLastName = function() {
      return name.split(' ')[1];
    }
    this.getFullName = function() {
      return name;
    };
    this.setFirstName = function(first) {
      name = first + ' ' + name.split(' ')[1];
    }
    this.setLastName = function(last){
      name = name.split(' ')[0] + ' ' + last;
    }
    this.setFullName = function(firstAndLast){
      name = firstAndLast;
    }
    return name;
  };
  
  const bob = new Person('Bob Ross');
  let a = bob.getFullName();
  let b = bob.getFullName();
  console.log(b);