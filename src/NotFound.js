import { Link } from "react-router-dom";

const NotFound  = () => {
   
   const mystyle = {
      color: "blue",
      fontFamily: "Arial",
      textAlign: "center",
      marginTop: "25%",
      fontSize:"30px"
   };
   
    return ( 
        <div className="not-found" style={mystyle}>
           <h2>Sorry</h2> <br />
           <p>404 :That page cannot be found</p><br />
           <Link to="/" style={{backgroundColor: "black", color: "white",padding: "10px", textDecoration:"none"}}>Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;