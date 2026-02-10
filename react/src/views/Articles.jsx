import { useEffect, useState } from "react";
import CreateArticle from "../Layouts/CreateArticle";
import axiosClient from "../axios-client";

export default function Articles() {
    const [articles, setArticles]=useState([]);
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true);
        getArticles();
    }, [])
    const getArticles = () => {
        axiosClient.get('/articles')
        .then(({data})=>{
            setLoading(false)
            console.log(data);
            setArticles(data.data)
        })
        .catch(()=>{
            const response = err.response;
            if (response && response.status == 422){
                console.error(response.data.errors);
                setLoading(false)
            }
        })
    }
    if (loading) return (<div className="article-block"><p>Загрузка...</p></div>);

    if (!loading) return (
        <>
            <div className="article-block">
                <table>
                    <tbody>
                        <tr><td><CreateArticle /></td></tr>
                    </tbody>
                    <tbody>
                        {articles.map((a) => (
                            <tr key={a.id}>
                                <td>
                                    <a className="card-block" href={"articles/"+a.id}>
                                    <h5 className="card-title">{a.title}</h5>
                                    <p className="card-content">{a.excerpt}</p>
                                    <small className="card-date">{a.created_at}</small>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}