
let List1=["Arjun", "Adwait", "Swapnil","Amit", "Vishal", "Adnan"]
let List2=[ "Adwait","Laxman","Amit", "Adnan","Nitin","Gaurav"]
let uniqueElementsInList2=[]
for(p of List2) {
    let t=false
    for (p1 of List1){
        if(p===p1){
            t=true
            break;
        }
    }

    if(!t){
        uniqueElementsInList2.push(p)
    }
}

console.log("unique set of users from List2 which are not in List1:",uniqueElementsInList2)

