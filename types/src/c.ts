interface Empl {
    name : string;
    date : Date;
};

interface person {
    name : string;
    department : string;
};

type Techro = Empl & person;

const techro : Techro ={
    name : "yash",
    date : new Date(),
    department : "Manager"

};