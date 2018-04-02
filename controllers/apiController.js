module.exports = function(app){
    app.get('/', (req,res)=>{
        res.send("Server Connected");
    });

    app.get('/users/register', (req,res)=>{
        res.send("Register Route created")
    });

    app.get('/users/authenticate', (req,res)=>{
        res.send("Authenticate Route created")
    });

    app.get('/users/profile', (req,res)=>{
        res.send("Profile Route created")
    });

    app.get('/users/Validate', (req,res)=>{
        res.send("Validate Route created")
    });
}