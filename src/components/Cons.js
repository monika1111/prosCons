import React, {Component} from 'react'
import { connect } from 'react-redux'
import {rootConstants} from "../reducers/rootReducer";

class Cons extends Component {
    constructor(props) {
        super(props)
    }

    clickHandle = (id) => {
        this.props.updateActiveCons(id);
    };

    changeHandle = (e, id) => {
        this.props.updateCons(id, e.target.value);
    };

    render() {
        const {cons, activeCons} = this.props;
        return(
            <div className="right">
                <p className="cons-border">CONS</p>
                <div className="data">
                    {
                        cons.length ? (
                            cons.map((item, index )=> {
                                return (
                                    <div className="item" key={item.id} onClick={() => this.clickHandle(item.id)}>
                                        <span className="index"> {index + 1}. </span>
                                        {item.id == activeCons ?
                                            <input value={item.value} onChange={(e) => this.changeHandle(e, item.id)}/>
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

const mapStateToProps = (state) => {
    return {
        cons: state.cons,
        activeCons: state.activeCons
    }
};

const mapDispatchToProps  = (dispatch) => {
    return {
        updateActiveCons: (id) => {
            dispatch({type: rootConstants.UPDATE_ACTIVE_CONS, id: id})
        },
        updateCons: (id, value) => {
            dispatch({type: rootConstants.UPDATE_CONS, payload: {id: id, value: value}})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps )(Cons)