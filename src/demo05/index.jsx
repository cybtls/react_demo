import React, { Component } from 'react'
class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let nameSlot = {};
        // 提取具名插槽
        this.props.children.forEach(item => {
            if (item.props.slot) {
                nameSlot[item.props.slot] = item;
            }
        })
        return (
            <div>
                <div style={{ color: 'red' }}>
                    {nameSlot['nameSlotOne']}
                </div>
                {/* 过滤非具名插槽 */}
                {this.props.children.filter(item => !item.props.slot)}
                <div style={{ color: 'red' }}>
                    {nameSlot['nameSlotTwo']}
                </div>
            </div>
        );
    }
}
export default Slot;