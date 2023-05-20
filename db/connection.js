const mongoose=require('mongoose')

const db=process.env.DATABASE

mongoose.connect(db,{
    useUnifiedTopology:true,
    // userNewUrlParser:true
}).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
})