import { useRef } from "react";
import axiosClient from "../axios-client";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateComment() {
    const { id } = useParams();
    const author_nameRef = useRef();
    const navigate = useNavigate();
    const contentRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault()
        const comment = {
            author_name: author_nameRef.current.value,
            content: contentRef.current.value,
        }
        console.log(comment);
        axiosClient.post(`/articles/${id}/comments`,comment)
            .then(()=>{
                navigate(0)
            })
            .catch(err=>{
                const response = err.response;
                if (response && response.status == 422){
                    console.error(response.data.errors);
                }
            })
    }
    return (
        <div className="card-block">
            <form onSubmit={onSubmit}>
                <label className="input-label">Имя автора</label>
                <input 
                    ref={author_nameRef} className="input-field" placeholder="Введите имя"
                />
                <label className="input-label">Комментарий</label>
                <input 
                    ref={contentRef} className="input-field" placeholder="Введите комментарий"
                />
                <button className="btn-primary">
                    Опубликовать комментарий
                </button>
            </form>
        </div>
    )
}