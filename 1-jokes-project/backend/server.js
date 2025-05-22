import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send("server is running");
// })


// get a list of five jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "joke1",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "joke2",
            content: "This is a joke"
        },
        {
            id: 3,
            title: "joke3",
            content: "This is a joke"
        },
        {
            id: 4,
            title: "joke4",
            content: "This is a joke"
        },
        {
            id: 5,
            title: "joke5",
            content: "This is a joke"
        }
    ];
    res.send(jokes);
});


const port = 3000;

app.listen(port ,()=>{
    console.log(`server is running at http://localhost:${port}`)
})