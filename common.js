
let List1=["Arjun", "Adwait", "Swapnil","Amit", "Vishal", "Adnan"]
let List2=[ "Adwait","Laxman","Amit", "Adnan","Nitin","Gaurav"]
let commonElements=[]
for(p of List1) {
    for (p1 of List2){
        if(p===p1){
            commonElements.push(p)
            
        }
    }
}

console.log("set of users who are present in List1 and List2 are:",commonElements)

