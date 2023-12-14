import {Color} from "../components/colorInput";


export class ContextProvider{
    constructor(public colors: Color[], public mode: String) {
    }
}