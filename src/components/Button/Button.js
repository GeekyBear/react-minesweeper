import React from "react";

function Button(id, reveal) {
    return (
        <button
            //className={styles.square}
            id={id}
            onClick={(e) => reveal(e, id[0], id[1])}>
        </button>
    )
}
export default Button;