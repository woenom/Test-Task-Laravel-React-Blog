import { useRef } from "react";
import axiosClient from "../axios-client";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const titleRef = useRef();
    const navigate = useNavigate();
    const contentRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault()
        const article = {
            title: titleRef.current.value,
            content: contentRef.current.value,
        }
        console.log(article);
        axiosClient.post('/articles',article)
            .then(()=>{
                navigate(`/`)
            })
            .catch(err=>{
                const response = err.response;
                if (response && response.status == 422){
                    console.error(response.data.errors);
                }
            })
    }
    return (
        <>
        <form onSubmit={onSubmit}>
            <label className="input-label">Название статьи:</label>
            <input 
                ref={titleRef} className="input-field" placeholder="Введите название"
            />
            <label className="input-label">
                Текст статьи:
            </label>
            <textarea 
                ref={contentRef} rows="4" className="input-textarea" placeholder="Введите текст"
            ></textarea>
            <button className="btn-primary">
                Создать статью
            </button>
        </form>
        </>
    )
}