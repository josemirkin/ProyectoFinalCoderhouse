import React from 'react'

import Arrows from '../Arrows/Arrows'
import TotalProducts from '../TotalProducts/TotalProducts'

import './BottomBar.scss'

function BottomBar() {
    return (
        <div className="footer">
            <div className="bottom-bar d-flex">
                <TotalProducts />
                <div className="bottom-bar-container">
                    <Arrows />
                </div>
            </div>
            </div>
    )
}

export default BottomBar