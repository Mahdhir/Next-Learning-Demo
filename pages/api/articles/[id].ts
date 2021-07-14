import {articles} from '../../../data';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest,res:NextApiResponse){
    const {id} = req.query;
    const filteredArticle = articles.filter(article => article.id==id);

    if(filteredArticle.length>0){
        res.status(200).json(filteredArticle[0]);
    }else{
        res.status(404).json({message:`Article with ID ${id} not found`});
    }
}