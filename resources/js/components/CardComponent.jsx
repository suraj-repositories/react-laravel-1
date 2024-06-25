

function CardComponent() {
    return (
        <div className="card">
            <div className="image">
                <img src="https://via.placeholder.com/150" alt="Placeholder image" />
            </div>
            <div><h2>Shubham kumar</h2></div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quo adipisci impedit quod nostrum temporibus suscipit dolor omnis amet error?
            </p>
            <div className="btns">
                <span> 
                    <span className="btn">👍</span>
                    <span className="btn">❤️</span>
                </span>
                <span>
                <span className="btn">✏️</span>
                <span className="btn">⚙️</span>
                </span>
            </div>
        </div>
    );
}

export default CardComponent;