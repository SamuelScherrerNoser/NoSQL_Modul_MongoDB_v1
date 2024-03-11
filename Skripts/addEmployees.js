const employeesToAdd = [
    { 
        Firstname: "Max",
        Lastname: "Mustermann",
        Birthdate: new Date('1990-01-01'),
        Departement: "IT",
        Job: "Software Engineer",
        Salary: 5000
    },
    { 
        Firstname: "Luis",
        Lastname: "Banane",
        Birthdate: new Date('1990-03-05'),
        Departement: "IT",
        Job: "Software Engineer",
        Salary: 6000
    },
    { 
        Firstname: "Julia",
        Lastname: "Meier",
        Birthdate: new Date('1993-09-25'),
        Departement: "IT",
        Job: "Systemadministrator",
        Salary: 5800
    },
    { 
        Firstname: "David",
        Lastname: "Schneider",
        Birthdate: new Date('1987-06-12'),
        Departement: "Finanzen",
        Job: "Finanzberater",
        Salary: 6500
    },
    { 
        Firstname: "Laura",
        Lastname: "Hofmann",
        Birthdate: new Date('1991-02-18'),
        Departement: "Personal",
        Job: "Personalassistentin",
        Salary: 5200
    },
    { 
        Firstname: "Paul",
        Lastname: "Schulz",
        Birthdate: new Date('1994-12-10'),
        Departement: "Marketing",
        Job: "Marketingmanager",
        Salary: 7200
    },
    { 
        Firstname: "Sophia",
        Lastname: "Lehmann",
        Birthdate: new Date('1989-10-07'),
        Departement: "Vertrieb",
        Job: "Vertriebsleiter",
        Salary: 7500
    },
    { 
        Firstname: "Kevin",
        Lastname: "Bauer",
        Birthdate: new Date('1990-08-14'),
        Departement: "IT",
        Job: "Softwareentwickler",
        Salary: 6000
    },
    { 
        Firstname: "Hannah",
        Lastname: "Koch",
        Birthdate: new Date('1992-04-22'),
        Departement: "Finanzen",
        Job: "Finanzanalystin",
        Salary: 6700
    },
    { 
        Firstname: "Finn",
        Lastname: "Schwarz",
        Birthdate: new Date('1993-11-29'),
        Departement: "Marketing",
        Job: "Marketingberater",
        Salary: 5500
    },
    { 
        Firstname: "Emma",
        Lastname: "Lange",
        Birthdate: new Date('1988-05-03'),
        Departement: "Personal",
        Job: "Personalberaterin",
        Salary: 6200
    },
    { 
        Firstname: "Tim",
        Lastname: "Herrmann",
        Birthdate: new Date('1995-07-20'),
        Departement: "Vertrieb",
        Job: "Vertriebsmitarbeiter",
        Salary: 5900
    },
    { 
        Firstname: "Lara",
        Lastname: "Fuchs",
        Birthdate: new Date('1991-03-17'),
        Departement: "IT",
        Job: "IT-Administrator",
        Salary: 5700
    },
    { 
        Firstname: "Nico",
        Lastname: "Becker",
        Birthdate: new Date('1993-12-28'),
        Departement: "Finanzen",
        Job: "Buchhalter",
        Salary: 6400
    },
    { 
        Firstname: "Lea",
        Lastname: "Richter",
        Birthdate: new Date('1989-09-08'),
        Departement: "Personal",
        Job: "Personalsachbearbeiterin",
        Salary: 5300
    },
    { 
        Firstname: "Tom",
        Lastname: "Scholz",
        Birthdate: new Date('1990-06-05'),
        Departement: "Marketing",
        Job: "Marketingassistent",
        Salary: 5800
    },
    { 
        Firstname: "Elena",
        Lastname: "Voigt",
        Birthdate: new Date('1994-02-15'),
        Departement: "Vertrieb",
        Job: "Vertriebskoordinatorin",
        Salary: 6100
    },
    { 
        Firstname: "Jonas",
        Lastname: "Hoffmann",
        Birthdate: new Date('1987-08-18'),
        Departement: "IT",
        Job: "Softwarearchitekt",
        Salary: 6900
    },
    { 
        Firstname: "Marie",
        Lastname: "Kaiser",
        Birthdate: new Date('1992-01-12'),
        Departement: "Finanzen",
        Job: "Finanzcontrollerin",
        Salary: 6600
    },
    { 
        Firstname: "Alexander",
        Lastname: "Bergmann",
        Birthdate: new Date('1991-10-30'),
        Departement: "Personal",
        Job: "Personalleiter",
        Salary: 7100
    },
    { 
        Firstname: "Lisa",
        Lastname: "Schröder",
        Birthdate: new Date('1988-04-07'),
        Departement: "Marketing",
        Job: "Marketingdirektorin",
        Salary: 7800
    },
    { 
        Firstname: "Jan",
        Lastname: "Wolff",
        Birthdate: new Date('1993-06-25'),
        Departement: "Vertrieb",
        Job: "Vertriebsassistent",
        Salary: 5400
    }
];

async function addEmployees() {
    // Personen zur Collection "employees" hinzufügen
    const result = db.employees.insertMany(employeesToAdd);
    print(`Added Employees successfully.`);
}

// Personen hinzufügen aufrufen
addEmployees();