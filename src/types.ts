import { ChangeEventHandler } from "react";

interface Checkbox {
    alliance: string;
    name: string;
}
interface FilterType {
    alliances: Array<Checkbox>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

export type { Checkbox, FilterType };
