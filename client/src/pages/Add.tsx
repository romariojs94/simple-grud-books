import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import axios from "axios";

export default function Add() {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: "",
        cover: ""
    });
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setBook(prev=> ({...prev, [e.target.name]: e.target.value}));
    }

    const handleClick = async (e: any) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/books", book);
            navigate("/");
        }catch(err) {
            console.log(err);
        }
    }
    return (
        <>
        <header className="py-5 max-w-[95vw] mx-auto flex justify-start items-center">
            <Button variant="destructive" className="my-8">
                <Link to="/">Voltar</Link>
            </Button>
        </header>
           <Form className="max-w-[500px] mx-auto flex flex-col justify-center">
                <h1 className="text-black text-5xl pb-8">Cadastre um novo livro</h1>
                <Input className="mb-2" type="text" name="title" value={book.title} placeholder="Titulo" onChange={handleChange} />
                <Textarea className="mb-2" name="desc" value={book.desc} placeholder="Descrição" onChange={handleChange} />
                <Input className="mb-2" type="text" name="price" value={book.price} placeholder="Preço" onChange={handleChange} />
                <Input className="mb-2" type="text" name="cover" value={book.cover} placeholder="Nome da Capa" onChange={handleChange} />
                <Button variant="destructive" onClick={handleClick}>Atualizar</Button>
           </Form>
        </>  
    )
}