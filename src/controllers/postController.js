const Post = require("../models/Post");
const PostList = require("../models/PostList");
const lista = new PostList();

lista.addPost(new Post("Back-end Top", 31));
lista.addPost(new Post("Front-end Top", 20));
lista.addPost(new Post("Ds is good", 15));

const routerP = {
    getAllPosts: (req, res) => {
    res.json(lista.getAllPosts());
    },

    getPostById: (req, res) => {
        try {
        res.json(lista.getPostById(req.params.id));
        } catch (error) {
        res.status(404).json({ message: "Post não encontrado"});
        }
    },

    addPost: (req, res) => {
        try {
        const { comment, like } = req.body;
        if (!comment || !like === undefined) {
            throw new Error("O campo comment e o like são obrigatórios");
        }
        const newPost = new Post(comment, like);
        lista.addPost(newPost);
        res.status(201).json(newPost);
        } catch (error) {
        res.status(400).json({ message: error.message,});
        }
    },
    deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(200).json({ message: "Post deletado com sucesso", IdDeletado: req.params.id });
    },

    updatePost: (req, res) => {
        try {
        res.json(lista.updatePost(req.params.id, req.body));
        } catch (error) {
        res.status(404).json({ message: "Erro ao atualizar o post"});
        }
    },
};

module.exports = routerP;