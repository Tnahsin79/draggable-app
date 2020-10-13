import React, { useState } from 'react';

const MainApp = () => {
    const [diffX, setDiffx] = useState(null);
    const [diffY, setDiffy] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});

    const _dragStart = (e) => {
        /*this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });*/
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

            /*this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });*/
            setStyles({
                left: l,
                top: t
            });
            console.log(l, t);
            console.log(styles);
        }
    }

    const _dragEnd = () => {
        /*this.setState({
            dragging: false
        });*/
        setDragging(false);
    }
    return (
        <button style={styles} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
            CLICK ME TO DRAG
        </button>
    );
}
export default MainApp;