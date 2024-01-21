const Directory = require("../models/directory");
const File = require("../models/file");
const Category = require("../models/category");
const readDirectoriesAndCreateOrUpdateFiles = require("../database/updateFiles");

// ==========================================================================================================================

exports.getImages = async function (req, res, next) {
  const images_filter = req.body;

  const files = await File.query()
    .withGraphFetched("categories")
    .withGraphFetched("directory");
  res.json({
    files: files,
  });
};
// ==========================================================================================================================

exports.getDirectories = async function (req, res, next) {
  const directories = await Directory.query();
  res.json({
    directories: directories,
  });
};
// ==========================================================================================================================

exports.getCategories = async function (req, res, next) {
  const categories = await Category.query();
  res.json({
    categories: categories,
  });
};
// ==========================================================================================================================

exports.addTags = async function (req, res, next) {
  const { categoriesToAdd } = req.body;

  try {
    const addedCategories = await Category.query().insert(categoriesToAdd);

    res.status(201).json({
      message: "Tags added successfully",
      directories: addedCategories,
    });
  } catch (error) {
    console.error("Error adding tags:", error);
    res.status(500).json({
      message: "Error adding tags",
    });
  }
};
// ==========================================================================================================================

exports.addTagsToImage = async function (req, res, next) {
  const { fileId, categoriesToAdd } = req.body;

  try {
    // Pobierz obiekt File na podstawie fileId
    const file = await File.query().findById(fileId);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Powiąż kategorie z plikiem
    await file.$relatedQuery("categories").relate(categoriesToAdd);

    res.status(201).json({
      message: "Tags added successfully",
      file: file,
    });
  } catch (error) {
    console.error("Error adding tags:", error);
    res.status(500).json({
      message: "Error adding tags",
    });
  }
};
// ==========================================================================================================================

exports.addDirectories = async function (req, res, next) {
  const directoriesToAdd = req.body; // Zakładam, że dane są przekazywane w ciele żądania jako tablica obiektów

  try {
    // Wywołaj metodę insert na modelu Directory
    const addedDirectories = await Directory.query().insert(directoriesToAdd);

    res.status(201).json({
      message: "Directories added successfully",
      directories: addedDirectories,
    });
  } catch (error) {
    console.error("Error adding directories:", error);
    res.status(500).json({
      message: "Error adding directories",
    });
  }
};
// ==========================================================================================================================

exports.updateServer = async function (req, res, next) {
  try {
    const [updatedFilesNum, addedFilesNum] =
      await readDirectoriesAndCreateOrUpdateFiles();

    res.status(201).json({
      message: "Files updated",
      updatedFilesNum: updatedFilesNum,
      addedFilesNum: addedFilesNum,
    });
  } catch (error) {
    console.error("Error updating files:", error);
    res.status(500).json({
      message: "Error updating files",
    });
  }
};
