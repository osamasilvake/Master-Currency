export interface DropdownInterface {
    label: string;
    initial: string;
    options: string[];
    onChange: (arg: string) => void;
    id:string;
}