const items = [
    {
        title: "hasnan"
    },
    {
        title: "kashif"
    },
]
const item2=[
    {
        title:"hasnain"
    }
]

 async function Check(){
    let check=await items.filter((item)=>{
        if (item.title==item2[0].title) {
            return item
        } else {
            return ""
        }
    })
    console.log(check)
}
Check()
