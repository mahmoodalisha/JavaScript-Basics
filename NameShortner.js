//short the length of a long name

function NameShortner (name, maxLength) {
    if(name.length > maxLength ){
        return name.substring(0,maxLength) + "..."
    }
    return name
}
let newName = NameShortner("CodeMonster", 8)
console.log(newName)