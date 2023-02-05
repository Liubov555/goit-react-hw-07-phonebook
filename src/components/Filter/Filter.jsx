import { Input, Label } from "./Filter.style";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";

export default function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const onChange = evt => {
        dispatch(setFilter(evt.target.value));
    };

    return (
        <Label> 🕵️‍♂️
            <Input
                type="text"
                name={filter}
                onChange={onChange}
                placeholder="Find contacts by name"
            />
        </Label>
    );
};




