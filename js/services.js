// work as post man
const url = "https://geology2.herokuapp.com/api/login"


async function login(){
    // GET request by default
  const data = await fetch(url)
   const updated_data = await data.json()
   return updated_data
}

async function login (name){

    const data = await fetch(url,{
        method: "POST",    
        headers: {
            'Accept':'applicaion/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({name})
    })
    const updated_data = await data.json()
    return updated_data
}