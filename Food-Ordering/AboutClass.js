import React from "react";

class AboutClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div>I am {this.props.name} working for this project as a {this.props.role}</div>
            </>
        )
    }
}
export default AboutClass;