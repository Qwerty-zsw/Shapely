import { Button } from "react-bootstrap"

const Btnz = (props)=> {
    return(
        <>
            <Button className="p-3 px-4 mx-1 rounded-0">{props.text}</Button>
        </>
    )
}
export default Btnz