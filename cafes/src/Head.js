import './Head.css';
const Head = (props) =>{
    return(
        <div className="f1 tc">
            <h1>Cafes in Ahmedabad</h1>
            <p>{props.tagline}</p>
        </div>
    );
}
 export default Head;