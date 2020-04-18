 const electron = require("electron");
// const uuid = require("uuid");
const {app, BrowserWindow, Menu} = electron ;

let homeWindow;
let rumusWindow;

// Code Home On
app.on("ready", ()=> {
    homeWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title : "Aplikasi Menghitung Luas Bangun Ruang"
    });


    homeWindow.loadURL(`file://${__dirname}/home.html`);
    homeWindow.on("closed", ()=> {

        app.quit();
        homeWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

// Link Jajar Genjang dan Keliling
const createWindowCreatorJargenkel = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/jajarGenjang.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Kubus
const rumusWindowCreatorKubus = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/kubus.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Prisma Segitiga
const rumusWindowCreatorPriseg = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/prismaSegitiga.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Tabung
const rumusWindowCreatorTabung = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/tabung.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Kerucut
const rumusWindowCreatorKerucut = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/kerucut.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Code Menu Template
const menuTemplate = [
    
    // Menu
    {
        label: "Menu",
        submenu: [
            { role: "reload" }, 
            { role: "toggledevtools" },
            {
                label: "Quit",
                accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl + O",
                
                click() {
                app.quit();
                }
            }
        ]
    },

    // Menu Formula
    {
        label: "Formula",
        submenu: [{
                label: "1. Luar Jajar Genjang dan Kelilingnya",
                
                click() {
                    createWindowCreatorJargenkel();
                }
            },
            {
                label: "2. Luas Kubus",
                click() {
                    rumusWindowCreatorKubus();
                }
            },
            {
                label: "3. Luas Prisma Segitiga",
                click() {
                    rumusWindowCreatorPriseg();
                }
            },
            {
                label: "4. Luas Tabung",
                click() {
                    rumusWindowCreatorTabung();
                }
            },
            {
                label: "5. Kerucut",
                click() {
                    rumusWindowCreatorKerucut();
                }
            }
        
        ]
    }

]