const e   = require('express')
const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({ include: { category: true } })
        return res.status(200).json({ data: products, message: 'Products retrieved successfully', status: 'success' })
    } catch (error) {
        console.error('Error fetching products:', error)
        return res.status(500).json({ message: 'Failed to retrieve products', status: 'error' })
    }
}

// Get product by id
exports.getProductById = async (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ message: 'Invalid product id', status: 'error' })
    try {
        const product = await prisma.product.findUnique({ where: { id }, include: { category: true } })
        if (!product) return res.status(404).json({ message: 'Product not found', status: 'error' })
        return res.json({ data: product, message: 'Product retrieved successfully', status: 'success' })
    } catch (error) {
        console.error('Error retrieving product:', error)
        return res.status(500).json({ message: 'Failed to retrieve product', status: 'error' })
    }
}

// Create product
exports.createProduct = async (req, res) => {
    const {
        sku,
        name,
        slug,
        description,
        price,
        stockQuantity,
        imageUrl,
        isActive,
        categoryId,
    } = req.body

    // basic validation
    if (!sku || !name || !slug || price === undefined) {
        return res.status(400).json({ message: 'sku, name, slug and price are required', status: 'error' })
    }

    // normalize numeric fields
    const stock = stockQuantity !== undefined ? parseInt(stockQuantity) : 0
    const catId = categoryId !== undefined && categoryId !== null ? parseInt(categoryId) : undefined

    // price should be saved as string for Decimal in Prisma
    const priceStr = typeof price === 'string' ? price : String(price)

    try {
        const data = {
            sku,
            name,
            slug,
            description: description || null,
            price: priceStr,
            stockQuantity: isNaN(stock) ? 0 : stock,
            imageUrl: imageUrl || null,
            isActive: isActive === undefined ? true : Boolean(isActive),
        }

        if (catId) {
            data.category = { connect: { id: catId } }
        }

        const product = await prisma.product.create({ data })
        return res.status(201).json({ data: product, message: 'Product created successfully', status: 'success' })
    } catch (error) {
        console.error('Error creating product:', error)
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            // Unique constraint failed
            return res.status(409).json({ message: 'Unique constraint failed, duplicate value', status: 'error' })
        }
        return res.status(500).json({ message: 'Failed to create product', status: 'error' })
    }
}

// Update product
exports.updateProduct = async (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ message: 'Invalid product id', status: 'error' })

    const {
        sku,
        name,
        slug,
        description,
        price,
        stockQuantity,
        imageUrl,
        isActive,
        categoryId,
    } = req.body

    try {
        const updateData = {}
        if (sku !== undefined) updateData.sku = sku
        if (name !== undefined) updateData.name = name
        if (slug !== undefined) updateData.slug = slug
        if (description !== undefined) updateData.description = description || null
        if (price !== undefined) updateData.price = String(price)
        if (stockQuantity !== undefined) updateData.stockQuantity = parseInt(stockQuantity)
        if (imageUrl !== undefined) updateData.imageUrl = imageUrl || null
        if (isActive !== undefined) updateData.isActive = Boolean(isActive)

        // handle category relation
        if (categoryId === null) {
            // disconnect
            updateData.category = { disconnect: true }
        } else if (categoryId !== undefined) {
            const catId = parseInt(categoryId)
            if (!isNaN(catId)) updateData.category = { connect: { id: catId } }
        }

        const product = await prisma.product.update({ where: { id }, data: updateData })
        return res.json({ data: product, message: 'Product updated successfully', status: 'success' })
    } catch (error) {
        console.error('Error updating product:', error)
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return res.status(409).json({ message: 'Unique constraint failed, duplicate value', status: 'error' })
        }
        return res.status(500).json({ message: 'Failed to update product', status: 'error' })
    }
}

// Delete product
exports.deleteProduct = async (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ message: 'Invalid product id', status: 'error' })
    try {
        const product = await prisma.product.delete({ where: { id } })
        return res.json({ data: product, message: 'Product deleted successfully', status: 'success' })
    } catch (error) {
        console.error('Error deleting product:', error)
        return res.status(500).json({ message: 'Failed to delete product', status: 'error' })
    }
}

exports.getUpdatedProduct = async (req, res) => {
    const { id } = req.params
    const { name, price, description } = req.body

    try {
        const updatedProduct = await prisma.product.update({
            where: { id: Number(id) },
            data: { name, price, description }
        })
        return res.status(200).json({ data: updatedProduct, message: 'Product updated successfully', status: 'success' })
    } catch (error) {
        console.error('Error updating product:', error)
        return res.status(500).json({ message: 'Failed to update product', status: 'error' })
    }
}

exports.DeleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const deletedProduct = await prisma.product.delete({
            where: { id: Number(id) },
        })
        return res.status(200).json({ data: deletedProduct, message: 'Product deleted successfully', status: 'success' })
    } catch (error) {
        console.error('Error deleting product:', error)
        return res.status(500).json({ message: 'Failed to delete product', status: 'error' })
    }
}

exports.createProduct = async (req, res) => {
    const { sku, name, slug, description, price, image_url, category_id } = req.body

    try {
        const newProduct = await prisma.product.create({
            data: {
                sku,
                name,
                slug,
                description,
                price,
                image_url,
                stockQuantity: 0,
                isActive: 1,
                categoryId: category_id,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })
        return res.status(201).json({ data: newProduct, message: 'Product created successfully', status: 'success' })
    } catch (error) {
        console.error('Error creating product:', error)
        return res.status(500).json({ message: 'Failed to create product', status: 'error' })
    }
}















































































































































































































































































































































































































































































































































































































































































exports