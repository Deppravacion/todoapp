import React from "react";

class ExChangeCompState extends React.Component {


  render() {
    const { items } = this.props;
    
    
    
    
    // let randomCal = Math.floor(Math.random() * items.length - 1);
    
    return(
      <div>
        {items.map(item => (
          <li key={item.id}>{item.text} "yo buddy"</li>
        ))}
        
  
        <h4>test h4</h4>

      </div>
    )
  }
}

export default ExChangeCompState;