app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]
  
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts)
  })