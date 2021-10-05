import React from 'react';

class IssueItem extends React.Component{
    render(){
        return(
            <div className="item-container">
                <a href={this.props.url} alt="" className="item-view">{this.props.title}</a>
                <span>{this.props.labels}</span>
            </div>
        )
    }
}

export default IssueItem