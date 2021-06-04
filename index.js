const express = require('express');


const app = express();
// function rootCall(req, res){
//     res.send('thank you Rejaul karim')
// }
// const rootCall = (req, res) =>res.send('Thank You Mohammad Rejaul akrim')
app.get('/', (req, res)=>{
    res.send('yahh, I am Learning Node js, Oh My got!!!!')
})
app.listen(4000, ()=>console.log('Listening to port 3000'));