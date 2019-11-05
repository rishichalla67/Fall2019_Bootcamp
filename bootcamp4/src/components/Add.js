import React from "react";

class Add extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const building = {
            code: this.code.value,
            name: this.name.value,
            address: this.address.value || null,
            coordinates: {
                latitude: this.lat.value || null,
                longitude: this.long.value || null
            }
        };
        console.log(building);
        this.props.dataAdd(building);
    }
    render() {
        return (
            <div>
                <p>Fill out this form to add a building to the listing</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Code:{" "}
                        <input
                            type="text"
                            ref={value => {
                                this.code = value;
                            }}
                        />
                    </label>
                    <label>
                        Name:{" "}
                        <input
                            type="text"
                            ref={value => {
                                this.name = value;
                            }}
                        />
                    </label>
                    <label>
                        Address:{" "}
                        <input
                            type="text"
                            ref={value => {
                                this.address = value;
                            }}
                        />
                    </label>
                    <label>
                        Latitude:{" "}
                        <input
                            type="text"
                            ref={value => {
                                this.lat = value;
                            }}
                        />
                    </label>
                    <label>
                        Longitude:{" "}
                        <input
                            type="text"
                            ref={value => {
                                this.long = value;
                            }}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Add;