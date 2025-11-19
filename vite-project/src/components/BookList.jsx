import SingleBook from "./SingleBook";

function BookList (props){

    console.log(props.bookList);
    
    
 return(    
    props.bookList.map((book) => {
        return(
        <>
        <SingleBook key={book.id} book={book} />
        </>
        )
    }
    )
)
}

export default BookList