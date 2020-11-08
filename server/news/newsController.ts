import { Request, Response } from 'express';

const axios = require('axios');

async function getAll(req: Request, res: Response){
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d3df51be3c3f4e0681b12ca83085c254';
    await axios
        .get(url)
        .then((result: any)=>{
            res.send({result: result.data});
        })
        .catch((err: any)=>{
            res.send({error: err});
        });
}


async function getByCategory(req: Request, res:Response){
    console.log(req.query);
    const url = `https://newsapi.org/v2/everything?q=${req.query.category}&apiKey=d3df51be3c3f4e0681b12ca83085c254`;
    await axios
        .get(url)
        .then((result: any)=>{
            res.send({result: result.data});
        })
        .catch((err: any)=>{
            res.send({error: err});
        });
}


module.exports = {
    getAll,
    getByCategory
}