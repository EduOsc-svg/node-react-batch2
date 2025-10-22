const { PrismaClient: PrismaClient } = require('../../generated/prisma')

// Create a single prisma client instance per request in these handlers
// (alternatively create one global instance outside handlers if preferred)

exports.createCategory = async (req, res) => {
    const { name } = req.body
    try {
        const category = await new PrismaClient().category.create({
            data: { name }
        })
        res.status(201).json({ data: category, message: 'Category Was Successfully Created', status: 'success' })
    } catch (error) {
        console.error('Error creating category:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.readCategories = async (req, res) => {
    try {
        const categories = await new PrismaClient().category.findMany()
        res.status(200).json({ data: categories, message: 'Categories retrieved successfully', status: 'success' })
    } catch (error) {
        console.error('Error retrieving categories:', error)
        res.status(500).json({ message: 'Failed to retrieve categories', status: 'error' })
    }
}

exports.updateCategory = async (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    const { name } = req.body
    try {
        const category = await new PrismaClient().category.update({ where: { id }, data: { name } })
        res.json({ data: category, message: 'Category Was Successfully Updated', status: 'success' })
    } catch (error) {
        console.error('Error updating category:', error)
        res.status(500).json({ message: 'Failed to update category', status: 'error' })
    }
}

exports.deleteCategory = async (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    try {
        const category = await new PrismaClient().category.delete({ where: { id } })
        res.json({ data: category, message: 'Category Was Successfully Deleted', status: 'success' })
    } catch (error) {
        console.error('Error deleting category:', error)
        res.status(500).json({ message: 'Failed to delete category', status: 'error' })
    }
}