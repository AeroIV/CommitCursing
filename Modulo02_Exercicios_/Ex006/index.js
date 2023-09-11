const express = require("express");
const {PrismaClient} = require("@prisma/client");

const app = express();

app.use(express.json());

const prisma = new PrismaClient();

//Post - Criar Usuarios
app.post("/posts", async (req, res) => {
    const {id, email, name} = req.body;

    const usuarioExistente = await prisma.user.findFirst({
        where: {
            email,
        }
    })

    if (usuarioExistente) {
        res.json("Usuario Existente.");
    }

    try {
    const user = await prisma.user.create({
        data: {
            id,
            email,
            name,
        }
    })
    } catch (error) {
        res.json(error);
    }
    res.json({Mensagem: "Usuario Criado!"});
})

//Get - Buscar Usuarios
app.get("/get", async (req, res) => {
    const user = await prisma.user.findMany();
    res.json(user);
});

app.listen(8080, () => {
    console.log("Running on port 8080...");
});