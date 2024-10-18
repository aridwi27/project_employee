module.exports = {
    success: (res,data,message) => {
       const response ={
        code:200,
        message,
        data
       }
       res.json(response)
    },datainvalid: (res,message,data) => {
        const response ={
         code:404,
         message,
         data
        }
        res.json(response)
     },
    fail: (res,message,data) => {
        const response ={
         code:500,
         message,
        }
        res.json(response)
     },
     inputfail: (res,message) => {
         const response = {
             code: 400,
             message
         }
         res.json(response)
     },
     emailRegister: (res,message) => {
         const response = {
             code: 409,
             message
         }
         res.json(response)
     }
 }
