
const notFound=()=>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    resizeBy.status(404);
    next(error);
};

const errorHandler =(err,req,res,next)=>{
const statusCode = res.statusCode ===200 ? 500: res.statusCode;
res.staus(statusCode);
res.json()
}