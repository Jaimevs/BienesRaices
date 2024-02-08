import bcrypt from "bcrypt";

const people = [
    {
        name: "Jaime",
        email: "vazquezjaime183@gmail.com",
        password: bcrypt.hashSync('12345678',10),
        verified: 1
    },
    {
        name: "Pepe",
        email: "pepe@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
    {
        name: "Armando",
        email: "armando@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
    {
        name: "Luis",
        email: "luis@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
    {
        name: "Pamela",
        email: "pamela@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
    {
        name: "Raul",
        email: "raulo@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
    {
        name: "Ulises",
        email: "ulises@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
    {
        name: "Uriel",
        email: "ueriel@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
    {
        name: "Edgar",
        email: "ergarin@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
    {
        name: "Zacek",
        email: "zacek@gmail.com",
        password: bcrypt.hashSync('12345678',10),
    },
]

export default people;