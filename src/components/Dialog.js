import React, { useState } from 'react';
import "./Dialog.css";

const Dialog = () => {
    const [diffX, setDiffx] = useState(null);
    const [diffY, setDiffy] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});

    const _dragStart = (e) => {
        console.log(e.screenX - e.currentTarget.getBoundingClientRect().left);
        console.log(e.screenY - e.currentTarget.getBoundingClientRect().top)
        setDiffx(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setDiffy(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setDragging(true);
    }

    const _dragging = (e) => {
        if (dragging) {
            let l = e.screenX - diffX;
            let t = e.screenY - diffY;

            setStyles({
                left: l,
                top: t
            });
            console.log(l, t);
            console.log(styles);
        }
    }

    const _dragEnd = () => {
        setDragging(false);
    }
    
    return (
        <button className="Dialog" style={styles} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
            CLICK ME TO DRAG
        </button>
    );
}
export default Dialog;