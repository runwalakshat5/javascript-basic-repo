var data = [
    1,
    "Akshat",
    true,
    null,
    undefined,
    function(name){
        return name
    },
    {name: "Akshat"},
    ["red", "blue", "yellow"]
]
console.log(data)

console.log(data[5](data[6]["name"]))