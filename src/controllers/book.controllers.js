import { bookModel, status } from "../models/book.model.js";


export const getBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json(books);
  } catch (error) {
    console.error(status).json({ message: "Error al obtener los libros" });
  }
};
export const getBookById = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Libro no encontrado" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el libro" });
  }
};
export const createBook = async (req, res) => {
  try {
    const newBook = new bookModel(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el libro" });
  }
};
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBook) return res.status(404).json({ message: "Libro no encontrado" });
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el libro" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: "Libro no encontrado" });
    res.json({ message: "Libro eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el libro" });
  }
};