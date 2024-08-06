import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

const Update = () => {     
    const { id } = useParams();
    
    const [update, setUpdate] = useState({});     
    const navigate = useNavigate();

    useEffect(() => {
        const fecthBooks = async () => {
            try {
              const res = await axios.get('http://localhost:8800/books');  
              
              const book = res.data;
              book.map((book: any) => {
                if(book.id == id) {
                    setUpdate(book);
                }
              });
              
                       
            } catch (err) {
             console.log(err);        
            }
        }
        fecthBooks();
    }, []);
    const handleChange = (e: any) => {
        setUpdate(prev=> ({...prev, [e.target.name]: e.target.value}));
    }
    
    const bookId = location.pathname.split("/")[2]; 

    const handleClick = async (e: any) => {
        e.preventDefault();
        
        try {
            await axios.put(`http://localhost:8800/books/${bookId}`, update);
            navigate("/");
        }catch(err) {
            console.log(err);
        }
    } 
    return (       
        <form className="grid place-content-center h-screen">
            <h1 className="text-black text-5xl pb-8">Update the book</h1>
            {
                
            }
            <Input className="mb-2 text-base" type="text" name="title" value={update.title || ""} onChange={handleChange} />

            <Textarea placeholder="Descrição" className="mb-2" name="desc" value={update.desc || ""} onChange={handleChange} />
            
            <Input className="mb-2 text-base" type="text" name="price" value={update.price || ""}  placeholder="Price" onChange={handleChange} />

            <Input className="mb-2 text-base" type="text" name="cover" value={update.cover || ""} placeholder="Cover" onChange={handleChange} />

            <Button variant="destructive" onClick={handleClick}>Atualizar</Button>
            <Link to="/" className="text-zinc-700 py-3 underline">Ver todos os livros</Link>
        </form>
    )
}
export default Update; 