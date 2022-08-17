

chrome.runtime.onMessage.addListener((req,senser,res)=>{
  // console.log(req)
  let tosend;
  if(req.do=="login"){
    var url="http://localhost:8000/user/login"
    tosend={
      username:req.username,
      password:req.password
    }
  }
  if(req.do=="signup"){
    var url="http://localhost:8000/user/signup"
    tosend={
      username:req.username,
      email:req.email,
      password:req.password
    }
  }
  if(req.do=="addProduct"){
    var url="http://localhost:8000/user/addProduct"
    tosend={
      name:req.name
    }
  }
  
  $.ajax({
    url: url,
    data: tosend,
    type: 'POST',
    success: (res)=>{
      if(res.message!='Products added sussesfully'){
        alert(res.message)
      }
      console.log(res.message)
    },
    error: (err)=>{console.log(err)}
  });
})





// fetch('http://localhost:8000/products',{
//       method:'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify( payload )})
//     .then((response) => {response.json()})
//     .catch((err) => {console.log(err)})

  






// var xhttp = new XMLHttpRequest();


// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log("done");
      
//     }
//   };
//   xhttp.open("post", url2, true);
//   xhttp.getResponseHeader('Content-type', 'application/json');
//   params = ;
//     xhttp.send(params);
