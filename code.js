const GetData = document.querySelector("#data")
const getname = ['name', 'acc', 'iBalance', 'address']
const showbtn = document.getElementById("show")
const dltbtn = document.getElementById("dlt")
const editbtn = document.getElementById("edit")
const table = document.getElementById("content")
// console.log(getname)
const readDataFromStorage = (storageKey) => {
    let store 
    try {
        store = JSON.parse(localStorage.getItem(storageKey)) || []
        if(!Array.isArray(store)) throw new Error("Not an Array")
    }
    catch {
        store = []
    }
    return store
}

const writeDataToStorage = (store, storageKey) => {
    localStorage.setItem(storageKey, JSON.stringify(store))
}
const f = function (onSubmit){
    onSubmit.preventDefault()
    console.log(onSubmit.target)
    var Data = []
     getname.forEach(i => {
        Data[i]= this.elements[i].value
    });
    console.log(Data)

    const AddData = readDataFromStorage("AddData")
    AddData.push(Data)

    writeDataToStorage(AddData, "AddData")
    this.reset()
    console.log(AddData)

}



const show = function () {
   
    var row = table.insertRow()
    var cell1 = row.insertCell() 
    var cell2 = row.insertCell()
    var cell3 = row.insertCell()
    var cell4 = row.insertCell()
    const cells = ['cell1', 'cell2', 'cell3', 'cell4']
    const AddData = readDataFromStorage("AddData")

    // for (var k in cells) {
    //     var cellsInd = cells[k]
    //     console.log(cellsInd)
    // }
    // for (var i in AddData) {
    //     var addData = AddData[i].value
    // }
    // console.log(addData)
    // cellsInd[k].innerHTML = addData[i]
    var Data = []
    AddData.forEach( i => {
        Data[i]= this.elements[i].value
    })
    console.log (Data[i])


}

const del = function (AddData, i) {
    AddData.splice(i, 1)
    writeDataToStorage(AddData,"AddData")
    window.location.reload()
    show()
}

GetData.addEventListener("submit", f)
showbtn.addEventListener("click", show)
dltbtn.addEventListener("click", del)




