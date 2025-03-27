
export default function({fill, total})
{
    return (
        <div style={{position:"relative",
                width: "100px",
                height:"1em",
                border: "1px solid gray",
                display:"inline-block",
                boxSizing: "content-box"}}>
            <div style={{position:"absolute",
                    left:"0",
                    top:"0",
                    bottom:"0",
                    height:"1em",
                    backgroundColor:"#ccc",
                    width: (100*fill/total) + "%"}}></div>
            <div style={{position:"absolute",
                        top:0,
                        bottom:0,
                        left:"25%",
                        borderLeft:"1px dashed #555"}}></div>

            <div style={{position:"absolute",
                        top:0,
                        bottom:0,
                        left:"50%",
                        borderLeft:"2px dashed #555"}}></div>

            <div style={{position:"absolute",
                        top:0,
                        bottom:0,
                        left:"75%",
                        borderLeft:"1px dashed #555"}}></div>
        </div>
    );
}
