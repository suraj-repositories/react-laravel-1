import React from  'react';
import ReactDOM from 'react-dom/client';
import CardComponent from './CardComponent';

export default function Main(){
    return (
        <>
           <div className='container'>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
           
            </div>
        </>
    );
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<Main/>);