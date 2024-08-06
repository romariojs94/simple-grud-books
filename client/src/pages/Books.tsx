import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface BookProps {
  id: number;
  title: string;
  desc: string;
  cover: string;
  price: number;
}

export default function Books() {

    const [books, setBooks] = useState<BookProps[]>([]);
    
    useEffect(() => {
        const fecthBooks = async () => {
            try {
              const res = await axios.get('http://localhost:8800/books');  
              setBooks(res.data);              
            } catch (err) {
             console.log(err);
                   
            }
        }
        fecthBooks();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await axios.delete("http://localhost:8800/books/"+id);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

  let BRCurrency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  return ( 
    <>
    <header className="py-10 max-w-[90%] mx-auto flex justify-end items-center">
        <Button variant="destructive" className="my-8"><Link to="/add">Adicionar novo Livro</Link></Button>
    </header>
        <h1 className="text-black text-5xl text-center font-bold mb-16">Book Shop</h1>    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[90%] mx-auto gap-4 mb-24 w-full">
    {books.map((book) => (
        <Card
            key={book.id}
            className="rounded-lg mb-12 shadow-lg mx-auto hover:shadow-xl transition-all duration-200 w-full"
          >
            <img
              alt="Profile picture"
              className="object-cover max-w-[100%] block w-full h-[415px]"
              src={book.cover}
            />
            <CardContent className="p-4">
              <div>
                <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200 pt-1 pb-2">{book.title}</h2>
                <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">{book.desc}</h3>
                <p className="mt-2 hover:text-red-700 transition-all duration-200 text-[#EF4444] font-bold">{`${BRCurrency.format(book.price)}`}</p>
              </div> 
              <div className="mt-4 space-x-2 flex justify-end content-end">
                <Button variant="destructive" className="w-full hover:bg-red-700 text-white transition-all duration-200 text-base" size="sm" onClick={() => handleDelete(book.id)}> 
                  Deletar
                </Button>
                <Link to={`/update/${book.id}`}>
                  <Button
                    className="w-full hover:bg-gray-400 transition-all duration-200 text-base"
                    size="sm"
                    variant="secondary"
                  >
                  Atualizar
                  </Button>
                </Link>
              </div>
            </CardContent>
        </Card>
    ))}
    </div> 
    </>
  )
}