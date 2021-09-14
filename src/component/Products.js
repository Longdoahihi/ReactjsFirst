import React from 'react';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.showInfo = this.showInfo.bind(this);
    }
    showInfo (){
        var a = "";
        for (var [key,value] of Object.entries(this.props)){
            a+=key+' : '+value +'\n';
        }
        alert(a);
    }
    render() {
        return(
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    
                    <div className="thumbnail">
                        <img src={this.props.image} alt="product"/>
                        <div className="caption">
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.des}
                            </p>
                            <p>
                                <a href="#none" className="btn btn-primary" onClick={this.showInfo}>Mua ngay</a>
                                <a href="#none" className="btn btn-default">Chi tiết</a>
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Products;