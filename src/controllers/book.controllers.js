
import { Where } from "sequelize/lib/utils";
import { bookModel } from "../models/book.model.js";
import { Op, where } from "sequelize";


//GET all(funciona)
export const getBooks = async (req, res) => {
  
  try {
    const books =  await bookModel.findAll();

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los libros" });
  }
};
//GET byId( funciona)
export const getBookById = async (req, res) => {
  try {

    const book = await bookModel.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el libro" });
  }
};
//POST (funciona)
export const createBook = async (req, res) => {
  try {
    
    const { title, author, pages, genre, description  } = req.body;
    
    if (!title || !author || !pages || !genre) {
      return res.status(400).json({ message: "campos obligatorios no rellenados: title, author, pages, genre" });
    }
    
    const existingBook = await bookModel.findOne({where:{
      title
    }});
    
    if (existingBook) {

      return res.status(400).json({ message: "El título ya existe" });
    }
    const newBook = new bookModel(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el libro" });
  }
};
//PUT (funciona)
export const updateBook = async (req, res) => {
  try {
    const { title, author, pages, genre, description } = req.body;
    
    const book = await bookModel.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    
    if (!title || !author || !pages || !genre) {
      return res.status(400).json({ message: "Campos obligatorios vacíos" });
    }


    const existingBook = await bookModel.findOne({where:{title, id: {[Op.ne]: req.params.id}}});
    if (existingBook){
      return res.status(400).json({message: "el titulo editado ya existe"})
    }

    await book.update({ title, author, pages, genre, description});
    
   
    
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el libro" });
  }
};
//DEL (funciona)
export const deleteBook = async (req, res) => {
  try {
    const book = await bookModel.findOne({where:{  id : req.params.id }});
    
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
   
    await bookModel.destroy({where: { id: req.params.id }});
    return res.json({ message: "Libro eliminado" });

    
    
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el libro" });
  }
};