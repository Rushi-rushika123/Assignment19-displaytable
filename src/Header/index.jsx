export default function Header(props)
{   
    return(
        <div>
            <h1>User Data</h1>
            <input type="text" onChange={props.onSearchTextChange}/>     
        </div>
        
        
        
    );
}
