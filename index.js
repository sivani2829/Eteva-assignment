let List1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
let List2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

function f1() {
    let uniqueElementsInList1 = []
    for (p of List1) {
        let t = false
        for (p1 of List2) {
            if (p === p1) {
                t = true
                break;
            }
        }

        if (!t) {
            uniqueElementsInList1.push(p)
        }
    }
    // tl.textContent = uniqueElementsInList1;
    document.getElementById('text-1').textContent = "unique set of users from List1 which are not in List2:" + uniqueElementsInList1;
    document.getElementById('text-2').textContent = "";
    document.getElementById('text-3').textContent = "";
}

function f2() {
    let uniqueElementsInList2 = []
    for (p of List2) {
        let t = false
        for (p1 of List1) {
            if (p === p1) {
                t = true
                break;
            }
        }

        if (!t) {
            uniqueElementsInList2.push(p)
        }
    }
    document.getElementById('text-2').textContent = "unique set of users from List1 which are not in List1:" + uniqueElementsInList2;
    document.getElementById('text-1').textContent = "";
    document.getElementById('text-3').textContent = "";
}

function f3() {
    let commonElements = []
    for (p of List1) {
        for (p1 of List2) {
            if (p === p1) {
                commonElements.push(p)

            }
        }
    }
    document.getElementById('text-3').textContent = "Set of users who are present in List1 and List2 are:" + commonElements
    document.getElementById('text-2').textContent = "";
    document.getElementById('text-1').textContent = "";
}