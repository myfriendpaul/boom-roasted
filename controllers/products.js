import Product from "../models/product"

import React from 'react'

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find()
    res.json(products)
  } catch(error) {
    console.error(error.message)
    res.status(500).json({ error: error.message })
  }
}

