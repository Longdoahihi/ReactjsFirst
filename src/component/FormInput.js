import React from 'react';
class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.Phone = [{a:'1'}];
        this.getInfoPhone = this.getInfoPhone.bind(this);
    }
    getInfoPhone = ()=>{
        var $ = document.querySelector.bind(document);
        var infoPhone = {
            title: $('.title').value,
            des: $('.description').value,
            linkImg: $('.linkImage').value,
            priceImg: $('.price').value
        }
        this.Phone.push(infoPhone);  
        console.log(this.Phone[0]);
        
    }
    render() {
        return(
            <div className="container">
                <form className="row">
                    <div className="row">
                        <div className="col-4">
                        <label htmlFor="validationDefault01" className="form-label ">Title</label>
                        <input type="text" className="form-control title" id="validationDefault01" defaultValue="Điện thoại " required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <label htmlFor="validationDefault02" className="form-label ">Description</label>
                        <input type="text" className="form-control description" id="validationDefault02" defaultValue="..." required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <label htmlFor="validationDefault02" className="form-label ">Link image</label>
                        <input type="text" className="form-control linkImage" id="validationDefault02" defaultValue="..." required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <label htmlFor="validationDefault02" className="form-label">Price</label>
                        <input type="text" className="form-control price" id="validationDefault02" defaultValue="VNĐ" required/>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" onClick={this.getInfoPhone}>Submit form</button>
                    </div>
                    </form>
            </div>
        )
    }
}
export default FormInput;