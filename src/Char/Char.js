import './Char.css';


const Char = (props) => {
    return (
        <div className="char-div" data-index={props.index} onClick={props.click}>
            {props.val}
        </div>
    );
};


export default Char;





// const Char = (props) => {
//     return (
//     <div>
//         <h2>Tap to remove</h2>
//         {props.inputArr > 0 ? props.inputArr.map(val => {
//             return (
//             <div className="char-div">
//                 {val}
//             </div>)
//             }) : null}
//     </div>
//     );
// }