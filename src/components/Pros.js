import React, {Component} from 'react'
import { connect } from 'react-redux'
import  {updateActivePros, updatePros} from "../reducers/rootActions";

class Pros extends Component {
    constructor(props) {
        super(props)
    }

    clickHandle = (id) => {
        this.props.updateActivePros(id);
    };

    changeHandle = (e, id) => {
        this.props.updatePros(id, e.target.value);
    };

    enterHandle = (e) => {
        if(e.keyCode === 13){
            this.props.updateActivePros(null);
        }
    };

    render() {
        const {pros, activePros} = this.props;
        return(
            <div className="left">
                <p className="pros-border">PROS</p>
                <div className="data">
                    {
                        pros.length ? (
                            pros.map((item, index) => {
                                return (
                                    <div className="item" key={item.id} onClick={() => this.clickHandle(item.id)}>
                                        <span className="index"> {index + 1}. </span>
                                        {item.id === activePros ?
                                            <input value={item.value} onChange={(e) => this.changeHandle(e, item.id)} onKeyDown={(e) => this.enterHandle(e)} />
                                            : <span> {item.value} </span>
                                        }
                                    </div>
                                )
                            })
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        updateActivePros: (id) => {
            dispatch(updateActivePros(id))
        },
        updatePros: (id, value) => {
            dispatch(updatePros(id, value))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        pros: state.pros,
        activePros: state.activePros
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pros)