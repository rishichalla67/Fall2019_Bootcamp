import React from "react";


class RemoveBuilding extends React.Component {
    onClick = () => {
        this.props.dataDelete(this.props.id);
    };
    render() {
        return (
            <td>
                <button
                    onClick={this.onClick}
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none"
                    }}
                >
                </button>
            </td>
        );
    }
}

export default RemoveBuilding;