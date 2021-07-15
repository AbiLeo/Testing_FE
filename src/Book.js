import React from "react";

const Book = (props) =>{
    const {img, title, author} = props.book;
    const clickHandler = (e) =>{
        console.log(e);
        console.log(e.target);
        alert("Click Handler");
    }
    const complexstuff = (x)=> {
        alert(x);
    }
    return (
    <article className="book" onMouseOver={()=>
    {
        console.log(author);
    }}>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Click Handler
        </button>
        <br />
        <button type="button" onClick={()=>complexstuff(author)}>Author</button>
    </article>
    );
}

export default Book;