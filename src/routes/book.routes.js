import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/book.controllers.js";

const router = Router();
// GET /books 
router.get("/", getBooks);
// GET /books/:id 
router.get("/:id", getBookById);
// POST /books 
router.post("/", createBook);
// PUT /books/:id 
router.put("/:id", updateBook);
// DELETE /books/:id 
router.delete("/:id", deleteBook);
export default router;
