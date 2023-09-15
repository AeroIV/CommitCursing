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
};
