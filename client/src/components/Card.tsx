        {/* <div className="flex flex-col items-center justify-between mt-24 h-full">
            <h1 className="text-black text-5xl pb-8">Books shop</h1>
            <div className="flex flex-wrap gap-4 text-center">
                {books.map((book) => (        
                    <div key={book.id} className="flex flex-wrap h-80 w-96 flex-1 flex-col items-center gap-4 justify-between">
                        <div className="flex flex-col">
                            {book.cover && <img className="w-full object-cover bg-orange-100 max-w-full" src={book.cover} alt={book.title} />}
                            <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">{book.title}</h2>
                            <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">{book.desc}</h3>
                            <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">{book.price}</p>
                        </div>
                       <div className="flex gap-2 flex-col w-full">
                        <Button variant="destructive" className="delete w-full" onClick={() => handleDelete(book.id)}>Delete</Button>
                        <Button variant="secondary" className="update w-full"><Link to={`/update/${book.id}`}>Update</Link></Button> 
                       </div>     
                    </div>    
                ))}
            </div>
            <Button variant="destructive" className="my-8"><Link to="/add">Add new book</Link></Button>
        </div> */}