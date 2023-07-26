
let List1=["Arjun", "Adwait", "Swapnil","Amit", "Vishal", "Adnan"]
let List2=[ "Adwait","Laxman","Amit", "Adnan","Nitin","Gaurav"]
let uniqueElementsInList1=[]
for(p of List1) {
    let t=false
    for (p1 of List2){
        if(p===p1){
            t=true
            break;
        }
    }

    if(!t){
        uniqueElementsInList1.push(p)
    }
}

console.log("unique set of users from List1 which are not in List2:",uniqueElementsInList1)

