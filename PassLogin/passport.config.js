//separate file for user authenticaiton using password and password-loca;

const localStrategy=require("passport-local").Strategy
const bcrypt=require("bcrypt")

function initialize(passport,getUserByEmail){
    const authenticateUser=async (email,password,done)=>{
        const user=getUserByEmail(email)
        if(user==null){
            return done(null,false,{message:"No user with that email"})
        }
        try{
            if(await bcrypt.compare(password,user.password)){
               return done(null,user)
            }else{
                return done(null,false,{message:"Password incorrect"})
            }
        }catch(e){
            return done(e)
        }
    }




    passport.use(new LocalStrategy({usernameField:"email"}),
    authenticateUsre) 
    passport.serializeUser((user,done)=>{})   
    passport.serializeUser((user,done)=>{})   
}

module.exports=initialize  