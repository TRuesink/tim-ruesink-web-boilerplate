// Models

// Description: Get a list of Public Resource
// Route: GET /api/v1/public_resource
// Access: PUBLIC
exports.getAllPublicResource = (req, res) => {
  res.json({
    success: true,
    message: 'List of All Public Resource',
  });
};

// Description: Get single Public Resource by id
// Route: GET /api/v1/public_resource/:id
// Access: PUBLIC
exports.getOnePublicResource = (req, res) => {
  res.json({
    success: true,
    message: `Here is the Public Resource with the ID: ${req.params.id}`,
  });
};

// Description: Create Public Resource
// Route: POST /api/v1/public_resource
// Access: PUBLIC
exports.createPublicResource = (req, res) => {
  res.json({
    success: true,
    message: `Create Public Resource with ID: TBD`,
  });
};

// Description: Update Public Resource
// Route: PUT /api/v1/public_resource/:id
// Access: PUBLIC
exports.updatePublicResource = (req, res) => {
  res.json({
    success: true,
    message: `Updated Public Resource with ID: ${req.params.id}`,
  });
};

// Description: Delete Public Resource
// Route: DELETE /api/v1/public_resource/:id
// Access: PUBLIC
exports.deletePublicResource = (req, res) => {
  res.json({
    success: true,
    message: `Deleted Public Resource with ID: ${req.params.id}`,
  });
};
