
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateComment from "../Layouts/CreateComment";
import axios from 'axios';

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost/api/articles/${id}`)
            .then(response => {
                setArticle(response.data.data);
            })
            .catch(()=>{
                const response = err.response;
                if (response && response.status == 422){
                    console.error(response.data.errors);
                    setLoading(false)
                }
            })
    }, [id]);

    if (!article) return <div className='article-block'>Загрузка...</div>;

    return (
        <div className='article-block'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h1 className='article-title'>{article.title}</h1>
                            <p className='article-content'>{article.content}</p>
                            <CreateComment />
                            <h3 className='article-title'>Комментарии:</h3>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    {article.comments && article.comments.map(comment => (
                    <tr key={comment.id}>
                        <td>
                            <strong className='card-title'>{comment.author_name}</strong>: 
                            <p className='card-content'>{comment.content}</p>
                            <small className='card-date'>{comment.created_at}</small>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};