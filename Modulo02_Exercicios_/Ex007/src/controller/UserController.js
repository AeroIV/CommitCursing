const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async criarUsuario(req, res) {
        const { nome, email } = req.body;
        try {
            const userExistente = await prisma.user.findFirst({
                where: {
                    email,
                },
            }); 
            
            if (userExistente) {
                    return res.json("Esse usuário já existe!");
                } else {
                    const user = await prisma.user.create({
                        data: {                           
                            email,
                            nome,
                        },
                    });
                    res.json({ Mensagem: "Usuário criado com sucesso!" });
                }
        } catch (error) {
            res.json({ error });
        }
    },

    async searchUser(req, res) {
        const { id } = req.params;

        try {
            const user = await prisma.user.findUnique({
                where: { id: parseInt(id, 10) },
            });
            res.json(user);
        } catch (error) {
            res.json(error);
        }
    },

    async searchUsers(req, res) {
        const users = await prisma.user.findMany();
        res.json(users);
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { nome, email } = req.body;

            const user = await prisma.user.findUnique({
                where: { id: parseInt(id) },
            });

            if (!user) {
                return res.json({ error: "ERROR: This user don't exist, please try again." });
            }

            user = await prisma.user.update({
                where: { id: parseInt(id) },
                data: { nome, email },
                select: {
                    nome: true,
                    email: true
                }
            });
            return res.json(user);

        } catch (error) {
            res.json(error)
        }
    },
};
