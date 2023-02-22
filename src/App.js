import "./App.css";
import user from "./Mock Data";
import Tabledata from "./Tabledata";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  
  return (
    <div className="App">
      <Header onSearchTextChange={handleSearchTextChange} />
      <Tabledata
        users={user.filter((user) => {
          return (
            user.id.toString().toLowerCase().includes(searchText.toLowerCase()) ||
            user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
            user.email.toLowerCase().includes(searchText.toLowerCase()) ||
            user.gender.includes(searchText) ||
            user.ip_address.toLowerCase().includes(searchText.toLowerCase())
          );
        })}
        // searchText={searchText}
      />
    </div>
  );
}

export default App;
