import axios from "axios"
 
 async function getData(id){
     const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/"+id)
     const{data:post}=await axios("https://jsonplaceholder.typicode.com/posts?userId="+id)

    console.log("user:",users)
    console.log("post:",post)
 }



 export default getData