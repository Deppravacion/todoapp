import React from "react";

class ExChangeCompState extends React.Component {


  render() {
    const { info:{items, text, name,} } = this.props;    
  
    
    return(
      <div>
        <h5>{name} this is props</h5>      
      </div>
    )
  }
}

export default ExChangeCompState;